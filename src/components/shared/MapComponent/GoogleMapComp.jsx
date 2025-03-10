'use client';
import { useGoogleMaps } from '@/utilities/GoogleMapsProvider';
import { useEffect, useRef } from 'react';

const GoogleMapComp = ({ sendMap, radius = '' }) => {
	const { google } = useGoogleMaps();
	const mapRef = useRef(null);

	useEffect(() => {
		if (google && mapRef.current) {
			const map = new google.maps.Map(mapRef.current, {
				center: { lat: 12.971599, lng: 77.594566 },
				zoom: 12,
				mapId: 'RE_MAP_ID',
			});

			sendMap(map);
		}
	}, [google, sendMap]);

	return (
		<div
			className={radius}
			ref={mapRef}
			style={{ width: '100%', height: '100%' }}
		/>
	);
};

export default GoogleMapComp;
