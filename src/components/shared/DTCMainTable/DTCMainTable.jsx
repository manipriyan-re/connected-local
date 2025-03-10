'use client';

//import React, { useState } from 'react';
//import { Filter, ChevronDown, ChevronRight, AlertCircle } from 'lucide-react';
import './DTCMainTable.scss';
//import Card from '@/components/shared/Card/Card';
//import Line_Common from '../LineCommon/LineCommon';
//import AlertCommon from '../AlertMap/AlertCommon';
//import Dropdown from '../Dropdown/Dropdown';
import Tabs from '../Tabs/Tabs';
//import FilterPage from '../AlertMap/FilterPage';
import '../../views/VehicleDashboard/vehicle-dashboard.scss';
import AlertsDashboardContent from './AlertsDashboardContent';
import Header from '../Header/Header';
export default function VehicleMonitoringDashboard({ theme }) {
	// Initialize expanded state

	//const [recordsToShow, setRecordsToShow] = useState(5);

	// Sample data

	// const regionOptions = [
	// 	{ value: 'global', label: 'Global' },
	// 	{ value: 'asia_pacific', label: 'Asia Pacific' },
	// 	{ value: 'europe', label: 'Europe' },
	// 	{ value: 'america', label: 'America' },
	// 	{ value: 'middle_east_africa', label: 'Middle East and Africa' },
	// ];

	// const countryOptions = [
	// 	{ value: 'usa', label: '🇺🇸 United States' },
	// 	{ value: 'india', label: '🇮🇳 India' },
	// 	{ value: 'germany', label: '🇩🇪 Germany' },
	// 	{ value: 'japan', label: '🇯🇵 Japan' },
	// 	{ value: 'brazil', label: '🇧🇷 Brazil' },
	// 	// Add more countries as needed
	// ];

	// const modelOptions = [
	// 	{ value: 'global', label: 'Global' },
	// 	{ value: 'asia_pacific', label: 'Asia Pacific' },
	// 	{ value: 'europe', label: 'Europe' },
	// 	{ value: 'america', label: 'America' },
	// 	{ value: 'middle_east_africa', label: 'Middle East and Africa' },
	// ];

	// const varientOptions = [
	// 	{ value: 'global', label: 'Global' },
	// 	{ value: 'asia_pacific', label: 'Asia Pacific' },
	// 	{ value: 'europe', label: 'Europe' },
	// 	{ value: 'america', label: 'America' },
	// 	{ value: 'middle_east_africa', label: 'Middle East and Africa' },
	// ];

	// const yearOptions = [
	// 	{ value: 'global', label: 'Global' },
	// 	{ value: 'asia_pacific', label: 'Asia Pacific' },
	// 	{ value: 'europe', label: 'Europe' },
	// 	{ value: 'america', label: 'America' },
	// 	{ value: 'middle_east_africa', label: 'Middle East and Africa' },
	// ];
	const tabs = [
		{
			id: 0,
			title: 'ICE Vehicles',
			content: <AlertsDashboardContent theme={theme} />,
		},
		{ id: 1, title: 'EV Vehicles' },
	];

	return (
		<div
			className="default-scroll-5 overflow-y-auto"
			style={{ height: 'calc(100vh - 2rem)' }}>
			<section className="alerts_dashboard_container">
				<Header headerTitle={'Alerts Support Overview'} />

				<div className="dashboard_tabs_left">
					<Tabs tabs={tabs} />
				</div>
			</section>
			<div className="overflow-x-auto"></div>
		</div>
	);
}
