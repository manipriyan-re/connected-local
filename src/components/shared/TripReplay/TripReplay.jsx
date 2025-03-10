'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useGoogleMaps } from '@/utilities/GoogleMapsProvider';
import GoogleMapComp from '../MapComponent/GoogleMapComp';
import { updateMarkerRotation } from '@/utilities/helperFunctions';
import '../../views/TripSummary/tripSummary.scss';
import Image from 'next/image';

const TripReplay = ({ route = [], isBack = false, goBack }) => {
	const [isPlay, setIsPlay] = useState('stop');
	const [speed, setSpeed] = useState(1);
	const [timelinePosition, setTimelinePosition] = useState(0);
	const [showTrip, setShowTrip] = useState(false);

	const { google, loaded } = useGoogleMaps();
	const mapRef = useRef(null);

	const currentIndex = useRef(0);
	const vehicleMarker = useRef(null);
	const tripPolyline = useRef(null);
	const tripFullPolyline = useRef(null);
	const intervalId = useRef(null);
	const pathCoordinates = useRef([]);
	const speedListRef = useRef(null);
	const startMarker = useRef(null);
	const endMarker = useRef(null);
	const startFlag = useRef(null);
	const endFlag = useRef(null);

	const speedList = [6, 4, 2, 1];

	useEffect(() => {
		startFlag.current = document.createElement('img');
		startFlag.current.src = '/images/start-flag.svg';

		endFlag.current = document.createElement('img');
		endFlag.current.src = '/images/finish-flag.svg';
	}, []);

	const loadFullTrip = async () => {
		setShowTrip(true);
		const gMap = mapRef.current;

		const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
		startMarker.current = new AdvancedMarkerElement({
			position: route[0],
			map: gMap,
			content: startFlag.current,
		});

		endMarker.current = new AdvancedMarkerElement({
			position: route.slice(-1)[0],
			map: gMap,
			content: endFlag.current,
		});

		//remove existing polyline
		resetAllMapComp();

		plotFullTrip(route.slice(currentIndex.current));
		//fitbounds for the map
		boundMap(route);
	};

	//Get map from child
	const getMap = useCallback((map) => {
		mapRef.current = map;
	}, []);

	const plotTrip = () => {
		clearInterval(intervalId.current);
		intervalId.current = setInterval(() => {
			if (currentIndex.current < route.length - 1) {
				pathCoordinates.current.push(route[currentIndex.current]);
				plotFullTrip(route.slice(currentIndex.current));
				plotVehicleMovement(route[currentIndex.current]);
				const newTimelinePosition =
					(currentIndex.current / (route.length - 1)) * 100; // Calculate percentage
				setTimelinePosition(newTimelinePosition);
				currentIndex.current++;
			} else {
				setIsPlay('stop');
				currentIndex.current = 0;
				pathCoordinates.current = [];
			}
		}, 1000 / speed);
	};

	const resetAllMapComp = () => {
		if (tripFullPolyline.current) {
			tripFullPolyline.current.setMap(null);
			tripFullPolyline.current = null;
		}
		if (tripPolyline.current) {
			tripPolyline.current.setMap(null);
			tripPolyline.current = null;
		}
		if (vehicleMarker.current) {
			vehicleMarker.current.setMap(null);
			vehicleMarker.current = null;
		}
	};

	const plotFullTrip = (coords) => {
		const gMap = mapRef.current;

		if (tripFullPolyline.current) {
			tripFullPolyline.current.setPath(coords);
		} else {
			tripFullPolyline.current = new google.maps.Polyline({
				path: coords,
				strokeColor: '#424242',
				geodesic: true,
				strokeOpacity: 1,
				strokeWeight: 3,
				map: gMap,
			});
		}
	};

	useEffect(() => {
		if (route.length > 0 && mapRef.current && loaded) {
			loadFullTrip();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [route, loaded]);

	const plotVehicleMovement = async (coords) => {
		if (!google || !mapRef.current || !loaded) return;
		const gMap = mapRef.current;

		const position = coords;

		if (vehicleMarker.current) {
			vehicleMarker.current.position = position;
			if (route[currentIndex.current - 1]) {
				const angle = updateMarkerRotation(
					route[currentIndex.current - 1],
					coords,
				);
				vehicleMarker.current.content.style.transform = `rotate(${angle}deg)`;
			}
			// tripPolyline.current.setPath([...pathCoordinates.current, coords]);
			pathCoordinates.current.push(coords);
			tripPolyline.current.setPath(pathCoordinates.current);
		} else {
			const { AdvancedMarkerElement } =
				await google.maps.importLibrary('marker');

			//svg for a dashed polyline
			const lineSymbol = {
				path: 'M 0,-1 0,1',
				strokeOpacity: 1,
				scale: 3,
				strokeColor: '#EE2E22',
			};

			tripPolyline.current = new google.maps.Polyline({
				path: pathCoordinates.current,
				// strokeColor: "#424242",
				// geodesic: true,
				strokeOpacity: 0,
				// strokeWeight: 3,
				icons: [
					{
						icon: lineSymbol,
						offset: '0',
						repeat: '15px',
					},
				],
				map: gMap,
			});

			const markerContent = document.createElement('div');
			markerContent.style.display = 'inline-block';
			markerContent.classList.add('marker-content');
			const image = document.createElement('img');
			image.src = '/images/re-marker.svg';
			image.style.height = '3rem';
			image.style.pointerEvents = 'none';
			image.style.position = 'absolute'; // Needed for centering
			image.style.top = '50%';
			image.style.left = '50%';
			image.style.transform = 'translate(-50%, -50%)'; // Center the image
			markerContent.appendChild(image);

			vehicleMarker.current = new AdvancedMarkerElement({
				position,
				map: gMap,
				content: markerContent,
			});
		}
	};

	useEffect(() => {
		if (isPlay === 'start') {
			plotTrip();
		} else {
			clearInterval(intervalId.current);
		}
		return () => clearInterval(intervalId.current); //on unmount
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPlay]);

	const boundMap = (routes) => {
		const gMap = mapRef.current;
		const bounds = new google.maps.LatLngBounds();
		routes.forEach((data) => {
			bounds.extend(data);
		});

		gMap.fitBounds(bounds);
	};

	const playTrip = () => {
		setIsPlay(isPlay === 'pause' || isPlay === 'stop' ? 'start' : 'pause');
	};

	const handleTimelineClick = (e) => {
		if (!mapRef.current) return;

		const currentValue = e.target.value;
		const index = Math.floor((currentValue * (route.length - 1)) / 100);

		plotByTimeline(index);
		setTimelinePosition(currentValue);
		setIsPlay('pause'); // Stop current replay
	};

	const plotByTimeline = async (index) => {
		currentIndex.current = index;
		pathCoordinates.current = route.slice(0, index + 1);

		plotFullTrip(route.slice(index));
		plotVehicleMovement(route[index]);
	};

	const toggleList = () => {
		if (speedListRef.current) {
			speedListRef.current.style.display =
				speedListRef.current.style.display === 'none' ? 'block' : 'none';
		}
	};

	const changeSpeed = (x) => {
		setIsPlay('pause');
		setSpeed(x);
		toggleList();
		setTimeout(() => {
			setIsPlay('start');
		}, 50);
	};
	return (
		<>
			{isBack && showTrip && (
				<div
					className="flex items-center text-xs p-2 absolute top-[10px] left-[10px] cursor-pointer"
					style={{ background: 'var(--gradient-color-1)', zIndex: '1' }}
					onClick={goBack}>
					<Image
						src="/images/replay-back.svg"
						width={15}
						height={15}
						alt="back to live track"
						className="mr-2"
					/>
					<p>Back to Live Tracking</p>
				</div>
			)}
			<GoogleMapComp sendMap={getMap} />
			{showTrip && (
				<div className="absolute bottom-0 replay-controls w-full h-10">
					<div className="flex items-center justify-between h-full py-1 px-4">
						{isPlay !== 'start' ? (
							<div
								className="p-2"
								style={{
									border: '1px solid var(--color-2)',
									borderRadius: '50%',
								}}>
								<Image
									style={{ cursor: 'pointer' }}
									onClick={playTrip}
									src="/images/play.svg"
									width={12}
									height={12}
									alt="Play"
								/>
							</div>
						) : (
							<div
								className="p-2"
								style={{
									border: '1px solid var(--color-2)',
									borderRadius: '50%',
								}}>
								<Image
									style={{ cursor: 'pointer' }}
									onClick={playTrip}
									src="/images/pause.svg"
									width={12}
									height={12}
									alt="pause"
								/>
							</div>
						)}
						<div className="w-full px-3 flex">
							<input
								type="range"
								id="timeline"
								className="timeline-bar w-full"
								onChange={handleTimelineClick}
								name="timeline"
								min="0"
								max="100"
								value={timelinePosition}
								step="5"
							/>
							<label htmlFor="timeline"></label>
						</div>
						<div className="replay-speed">
							<ul
								ref={speedListRef}
								id="speed-list"
								className="absolute"
								style={{ display: 'none' }}>
								{speedList.map((x) => (
									<li
										key={x}
										onClick={() => changeSpeed(x)}
										className={`mt-2 pl-2 cursor-pointer ${speed === x ? 'select-s' : ''}`}>
										{x}x
									</li>
								))}
							</ul>
							<div
								className="speed-box flex items-center justify-center cursor-pointer"
								onClick={toggleList}>
								<p className="mr-2">{speed}x</p>
								<Image
									src="/images/replay-speed.svg"
									width={12}
									height={12}
									alt="replay"
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TripReplay;
