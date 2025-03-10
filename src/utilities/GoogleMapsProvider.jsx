'use client';
import { createContext, useState, useEffect, useContext } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMapsContext = createContext(null);

export const GoogleMapsProvider = ({ children }) => {
	const [google, setGoogle] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (loaded || typeof window === 'undefined') return;
		const loadGoogleMaps = async () => {
			try {
				setLoading(true);
				const loader = new Loader({
					apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
					version: 'weekly',
					libraries: ['places', 'geometry'],
				});

				await loader.load();
				setGoogle(window.google);
				setLoaded(true);
			} catch (e) {
				console.error('Error loading js-api-loader:', e);
				setLoading(false);
			} finally {
				setLoading(false); // Set loading to false *in finally* (always runs)
			}
		};

		loadGoogleMaps();
	}, [loaded]);

	if (loading) {
		return <div>Loading Google Maps API...</div>;
	}

	if (!google) {
		return <div>Google Maps API failed to load.</div>;
	}

	return (
		<GoogleMapsContext.Provider value={{ google, loaded }}>
			{children}
		</GoogleMapsContext.Provider>
	);
};

export const useGoogleMaps = () => useContext(GoogleMapsContext);
