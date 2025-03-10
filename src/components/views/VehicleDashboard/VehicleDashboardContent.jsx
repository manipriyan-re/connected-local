'use client';
import { useState, useEffect, useCallback } from 'react';
import Search from '../../shared/SearchComponent/SearchComponent';
import VehicleStatus from './VehicleStatus';
import CustomTable from '../../shared/SortingTable/SortingTable';
import Sidebar from '@/components/shared/Sidebar/Sidebar';
import GoogleMapComp from '@/components/shared/MapComponent/GoogleMapComp';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { useGoogleMaps } from '@/utilities/GoogleMapsProvider';
import Dropdown from '@/components/shared/Dropdown/Dropdown';
import Image from 'next/image';

const VehicleDashboardContent = ({ setShowSideBar, showSideBar }) => {
	const { google } = useGoogleMaps();
	const [gMap, setGMap] = useState(null);
	const [selectedTitle, setSelectedTitle] = useState('');

	const initialData = [
		{
			id: 1,
			title: 'ME3J3E5FMR2000041',
			description: 'Super Meteor 650',
			variant: 'Motoverse G_1',
			time: '4 min',
		},
		{
			id: 2,
			title: 'ME3J3E5FMR2000042',
			description: 'Super Meteor 650',
			variant: 'Motoverse G_1',
			time: '4 min',
		},
		{
			id: 3,
			title: 'ME3J3E5FMR2000043',
			description: 'Super Meteor 650',
			variant: 'Motoverse G_1',
			time: '4 min',
		},
	];

	const getSelectedVehicle = (title) => {
		setSelectedTitle(title);
		setShowSideBar(true);
	};

	const handleTitleChange = (newTitle) => {
		setSelectedTitle(newTitle);
	};

	const items = [
		'React',
		'TailwindCSS',
		'JavaScript',
		'CSS',
		'Node.js',
		'GraphQL',
	];
	const handleSearch = (query) => {
		items.filter((item) =>
			// const results = items.filter((item) =>
			item.toLowerCase().includes(query.toLowerCase()),
		);
		// setFilteredResults(results);
	};

	useEffect(() => {
		if (showSideBar) {
			// Add class to body when sidebar is open
			document.body.classList.add('sidebar-active');
		} else {
			// Remove class from body when sidebar is closed
			document.body.classList.remove('sidebar-active');
		}

		return () => {
			// Clean up when the component is unmounted
			document.body.classList.remove('sidebar-active');
		};
	}, [showSideBar]);

	const plotMarker = useCallback(async () => {
		if (!google || !gMap) return;

		const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
		const infoWindow = new google.maps.InfoWindow();
		const locations = [
			{ lat: -31.56391, lng: 147.154312 },
			{ lat: -33.718234, lng: 150.363181 },
			{ lat: -33.727111, lng: 150.371124 },
			{ lat: -33.848588, lng: 151.209834 },
			{ lat: -33.851702, lng: 151.216968 },
			{ lat: -34.671264, lng: 150.863657 },
			{ lat: -35.304724, lng: 148.662905 },
			{ lat: -36.817685, lng: 175.699196 },
			{ lat: -36.828611, lng: 175.790222 },
			{ lat: -37.75, lng: 145.116667 },
			{ lat: -37.759859, lng: 145.128708 },
			{ lat: -37.765015, lng: 145.133858 },
			{ lat: -37.770104, lng: 145.143299 },
			{ lat: -37.7737, lng: 145.145187 },
			{ lat: -37.774785, lng: 145.137978 },
			{ lat: -37.819616, lng: 144.968119 },
			{ lat: -38.330766, lng: 144.695692 },
			{ lat: -39.927193, lng: 175.053218 },
			{ lat: -41.330162, lng: 174.865694 },
			{ lat: -42.734358, lng: 147.439506 },
			{ lat: -42.734358, lng: 147.501315 },
			{ lat: -42.735258, lng: 147.438 },
			{ lat: -43.999792, lng: 170.463352 },
		];

		const bounds = new google.maps.LatLngBounds();

		const markers = locations.map((coord) => {
			//setting up custom icon
			const imgTag = `<img class='map_marker' src='/images/re-pin.svg'>`;
			const icon = document.createElement('div');
			icon.innerHTML = imgTag;

			//setting up marker
			const marker = new AdvancedMarkerElement({
				position: coord,
				map: gMap,
				content: icon,
				// gmpClickable: true, //for click the marker
			});

			//settin up inital pop-up
			infoWindow.setContent(`<div> <p>Loading...</p></div>`);

			marker.addListener('click', () => {
				// let coords = e;
				infoWindow.setContent(
					`<div class="flex items-center justify-center" style="color:black;">
                <div>
                    <p><img src="/images/re-logo.svg" /> ME3J3E5FMR2000041</p>
                    <span>Last Tracked: Nov 27, 24 10:15AM</span>
                </div>
                <div class="pop-status-idle">
                    <span class="status-dot"></span>Idle<span>
                </div>
            </div>
            <table>
                <tr>
                    <td>Modal</td>
                    <td>Location</td>
                </tr>
                <tr>
                    <td>Super Meteor 650</td>
                    <td>Unnamed Road, Tamil Nadu 631604, India</td>
                </tr>
            </table>                      
          `,
				);
				infoWindow.open(gMap, marker);
			});

			marker.addListener('mouseout', () => {
				infoWindow.close();
			});

			bounds.extend(coord);
			return marker;
		});

		gMap.fitBounds(bounds);
		// Add a marker clusterer to manage the markers.
		new MarkerClusterer({ markers, map: gMap });
	}, [gMap, google]);

	useEffect(() => {
		if (gMap) {
			plotMarker();
		}
	}, [gMap, plotMarker]);

	const getMap = useCallback((map) => {
		setGMap(map);
	}, []);

	const vehicleStatus = [
		{
			status: 'running',
			count: 2000,
			title: 'Running',
			color: '#6AD074',
			isActive: true,
		},
		{ status: 'idle', count: 999, title: 'Idle', color: '#FDDA37' },
		{ status: 'halt', count: 72, title: 'Halt', color: '#F94B65' },
		{ status: 'no-gps', count: 200, title: 'No GPS', color: '#A6A6A6' },
		{ status: 'offline', count: 652, title: 'Offline', color: '#6F6F70' },
		{ status: 'inactive', count: 250, title: 'Inactive', color: '#CD853F' },
		{ status: 'dead', count: 8, title: 'Dead', color: '#F94B65' },
	];

	const alertStatus = [
		{ status: 'emergency', count: 2000, title: 'Emergency', color: '#EE2E22' },
		{ status: 'd0', count: 999, title: 'D0', color: '#F94B65' },
		{ status: 'd1', count: 72, title: 'D1', color: '#CD853F' },
		{ status: 'd2', count: 200, title: 'D2', color: '#6F6F70' },
	];

	const groupOptions = [
		{ value: 'all', label: 'All Groups' },
		{ value: '1', label: 'Group 1' },
		{ value: '2', label: 'Group 2' },
		{ value: '3', label: 'Group 3' },
		{ value: '4', label: 'Group 4' },
	];

	return (
		<>
			<section className="vehicle_dashboard_content_container">
				<div className="vehicle_dashboard_status_main_container">
					<div
						className="w-full flex default-scroll-5 x-scroll-color"
						style={{ paddingBottom: '10px' }}>
						<div className="vehicle_count_container w-auto">
							<p className="header_title vehicle_status_container ">VEHICLES</p>
							<div className="pr-8">
								<VehicleStatus
									status=""
									count={2000}
									title={'#Records'}
									color=""
								/>
							</div>
						</div>
						<div className="vehicle_dashboard_status_container px-8 ml-4">
							<p className="header_title vehicle_status_section">STATUS</p>
							<section className="flex items-center">
								{vehicleStatus.map((stat) => (
									<div key={stat.title} className="vehicle_status_container">
										<VehicleStatus
											status={stat.status}
											count={stat.count}
											title={stat.title}
											color={stat.color}
											isActive={stat.isActive}
										/>
									</div>
								))}
							</section>
						</div>
						<div className="vehicle_dashboard_alerts_container pl-8">
							<p className="header_title vehicle_status_section flex ">
								ALERTS{' '}
								<Image
									src="/images/arrow_right.svg"
									alt="alert"
									width={14}
									height={14}
									className="ml-2"
								/>{' '}
							</p>
							<section className="flex items-center">
								{alertStatus.map((stat) => (
									<div key={stat.title} className="vehicle_status_container">
										<VehicleStatus
											status={stat.status}
											count={stat.count}
											title={stat.title}
											color={stat.color}
										/>
									</div>
								))}
							</section>
						</div>
					</div>
				</div>
				<div
					className="vehicle_dashboard_map_main_container flex default-scroll-5 overflow-y-auto p-2"
					style={{ height: 'calc(100vh - 19.5rem)' }}>
					<div className="vehicle_dashboard_map_container pr-3 ">
						<h3 className="text-base mt-2 my-4 font-semibold">
							Vehicle Location (15)
						</h3>
						<div
							className="w-full rounded-2xl"
							style={{ height: 'calc(100% - 2.5rem)' }}>
							<GoogleMapComp sendMap={getMap} radius="rounded-2xl" />
						</div>
					</div>
					<section className="vehicle_dashboard_map_details_container">
						<div className="flex items-center justify-between">
							<div className="alert_type_container h-[36px]">
								<span
									className="selected_indicator mr-3"
									style={{ backgroundColor: '#6AD074' }}></span>
								Running
							</div>
							<Dropdown
								options={groupOptions}
								defaultOption={{
									value: groupOptions[0].value,
									label: groupOptions[0].label,
								}}
							/>
							<div className="alert_search_container ml-3">
								<Search onSearch={handleSearch} />
							</div>
						</div>
						<div className="vechicle__details_container">
							<CustomTable
								getSelectedVehicle={getSelectedVehicle}
								initialData={initialData}
							/>{' '}
						</div>
					</section>
					<Sidebar
						isOpen={showSideBar}
						setShowSideBar={setShowSideBar}
						selectedTitle={selectedTitle}
						titles={initialData.map((row) => row.title)}
						onTitleChange={handleTitleChange}
					/>{' '}
				</div>
			</section>
		</>
	);
};

export default VehicleDashboardContent;
