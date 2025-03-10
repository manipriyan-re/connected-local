import './vehicle-dashboard.scss';
import Tabs from '../../shared/Tabs/Tabs';
import VehicleDashboardContent from './VehicleDashboardContent';
import Dropdown from '@/components/shared/Dropdown/Dropdown';
import Header from '@/components/shared/Header/Header';

const VehicleDashboardHeaderDropdown = () => {
	const regionOptions = [
		{ value: 'all', label: 'All Regions' },
		{ value: 'asia_pacific', label: 'Asia Pacific' },
		{ value: 'europe', label: 'Europe' },
		{ value: 'america', label: 'America' },
		{ value: 'middle_east_africa', label: 'Middle East and Africa' },
	];

	const countryOptions = [
		{ value: 'all', label: 'All Variants' },
		{ value: '1', label: 'Variant 1' },
		{ value: '2', label: 'Variant 2' },
		{ value: '3', label: 'Variant 3' },
		{ value: '4', label: 'Variant 4' },
	];

	const yearOptions = [
		{ value: '2023', label: '2023' },
		{ value: '2024', label: '2024' },
		{ value: '2025', label: '2025' },
	];

	return (
		<section className="vehicle_dashboard_header_dropdown_container flex gap-3">
			{/* Model Selector */}
			<Dropdown
				options={regionOptions}
				defaultOption={{
					value: regionOptions[0].value,
					label: regionOptions[0].label,
				}}
			/>
			{/* Variant Selector */}
			<Dropdown
				options={countryOptions}
				defaultOption={{
					value: countryOptions[0].value,
					label: countryOptions[0].label,
				}}
			/>
			{/* Year Selectore */}
			<Dropdown
				options={yearOptions}
				defaultOption={{
					value: yearOptions[0].value,
					label: yearOptions[0].label,
				}}
			/>
		</section>
	);
};

const VehicleDashboard = ({ setShowSideBar, showSideBar }) => {
	const tabs = [
		{
			id: 0,
			title: 'ICE Vehicles',
			content: (
				<VehicleDashboardContent
					showSideBar={showSideBar}
					setShowSideBar={setShowSideBar}
				/>
			),
		},
		{ id: 1, title: 'EV Vehicles', content: 'Content for Tab 2' },
	];
	return (
		<>
			<section className="vehicle_dashboard_container">
				<Header headerTitle={'Vehicle Dashboard'} />
				<div className="vehicle_dashboard_tabs_container">
					<div className="dashboard_tabs_left">
						<Tabs
							tabs={tabs}
							renderOnClickComponent={<VehicleDashboardHeaderDropdown />}
						/>
					</div>
					<div className="dashboard_tabs_right text-black"></div>
				</div>
			</section>
		</>
	);
};

export default VehicleDashboard;
