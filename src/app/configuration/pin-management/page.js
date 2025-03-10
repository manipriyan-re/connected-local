'use client';
import Tabs from '@/components/shared/Tabs/Tabs';
import TableDelete from '@/components/shared/TableDelete/TableDelete';
import Header from '@/components/shared/Header/Header';
import Search from '@/components/shared/SearchComponent/SearchComponent';
import '../../../components/views/VehicleDashboard/vehicle-dashboard.scss';
import MessageDisplay from '@/components/shared/MessageDisplay/page';

const TabContent = ({ data, dynamicKeys }) => {
	if (!data) {
		return (
			<div>
				<MessageDisplay messages={['No data found']} />
			</div>
		);
	}

	return (
		<TableDelete
			showDelete={false}
			data={data}
			accordion={false}
			showAccordionDelete={false}
			sticky={true}
			showDownloadFilter={false}
			showFilteredRecords={false}
			showTableSearch={false}
			dynamicKeys={dynamicKeys}
			showActions={'share Pin'}
		/>
	);
};
const VehicleDashboardHeaderDropdown = () => {
	return (
		<section className="vehicle_dashboard_header_dropdown_container flex gap-3">
			<Search />
		</section>
	);
};
const PinManagement = () => {
	const headerData = [
		'VIN',
		'Model',
		'Last Reset',
		'Occurence',
		'Vehicle Status',
		'Action Status',
		'Action',
	];

	const tableData = [
		{
			vin: 'ME3J3E5FMR2000042',
			model: 'Super Meteor 650 ',
			lastReset: 'Nov 25, 2024 12:33 PM',
			occurence: 'Nov 25, 2024 12:33 PM',
			vehicleStatus: 'Idle',
			actionStatus: '-',
		},
		{
			vin: 'ME3J3E5FMR2000042',
			model: 'Super Meteor 650 ',
			lastReset: 'Nov 25, 2024 12:33 PM',
			occurence: 'Nov 25, 2024 12:33 PM',
			vehicleStatus: 'Idle',
			actionStatus: 'pin shared',
		},
		{
			vin: 'ME3J3E5FMR2000042',
			model: 'Super Meteor 650 ',
			lastReset: 'Nov 25, 2024 12:33 PM',
			occurence: 'Nov 25, 2024 12:33 PM',
			vehicleStatus: 'Running',
			actionStatus: '-',
		},
		{
			vin: 'ME3J3E5FMR2000042',
			model: 'Super Meteor 650 ',
			lastReset: 'Nov 25, 2024 12:33 PM',
			occurence: 'Nov 25, 2024 12:33 PM',
			vehicleStatus: 'Idle',
			actionStatus: 'Pin Used',
		},
		{
			vin: 'ME3J3E5FMR2000042',
			model: 'Super Meteor 650 ',
			lastReset: 'Nov 25, 2024 12:33 PM',
			occurence: 'Nov 25, 2024 12:33 PM',
			vehicleStatus: 'Stopped',
			actionStatus: '-',
		},
		{
			vin: 'ME3J3E5FMR2000042',
			model: 'Super Meteor 650 ',
			lastReset: 'Nov 25, 2024 12:33 PM',
			occurence: 'Nov 25, 2024 12:33 PM',
			vehicleStatus: 'Idle',
			actionStatus: '-',
		},
	];
	const dynamicKeys = [
		'vin',
		'model',
		'lastReset',
		'occurence',
		'vehicleStatus',
		'actionStatus',
	];
	// Combine table and header data into a single object
	const data = { tableData, headerData };

	// Tabs configuration
	const tabs = [
		{
			id: 0,
			title: 'ICE Vehicles',
			content: <TabContent data={data} dynamicKeys={dynamicKeys} />,
		},
		{ id: 1, title: 'EV Vehicles', content: 'Content for Tab 2' },
	];

	return (
		<>
			<section className="vehicle_dashboard_container">
				<Header headerTitle={'Pin Management'} />
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

export default PinManagement;
