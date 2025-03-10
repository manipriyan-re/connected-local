import React from 'react';
import Titletab from '../TitleTab/Titletab';
import Tabs from '../Tabs/Tabs';
import Dropdown from '../Dropdown/Dropdown';
import './vehicleManagementData.scss';
import TableDelete from '../TableDelete/TableDelete';
import Search from '../SearchComponent/SearchComponent';
import DropdownWhiteBackground from '../Dropdown/DropdownWhiteBackground';
import '../../views/VehicleDashboard/vehicle-dashboard.scss';

const VehicleManagement = () => {
	const tabs = [
		{ id: 0, title: 'ICE Vehicles' },
		{ id: 1, title: 'EV Vehicles' },
	];
	const viewby = [
		{ value: 'View By Vehicles', label: 'Vehicles' },
		{ value: 'View By Groups', label: 'Groups' },
	];
	const newvehicle = [
		{
			value: 'Create New Vehicle',
			label: 'Create New Vehicle',
		},
		{
			value: 'Upload Bulk Vehicle',
			label: 'Upload Bulk Vehicle',
		},
	];

	const tableData = [
		{
			vin: '12345ABC',
			model: 'Sedan',
			group: 'Luxury',
			country: 'USA',
			imeiNo: '356789123456789',
			simNo: '8901234567891234567',
			lastModified: '2025-01-28',
			action: 'Edit/Delete',
		},
		{
			vin: '67890DEF',
			model: 'SUV',
			group: 'Family',
			country: 'Canada',
			imeiNo: '123456789012345',
			simNo: '8901234567894567890',
			lastModified: '2025-01-27',
			action: 'Edit/Delete',
		},
		{
			vin: '24680GHI',
			model: 'Hatchback',
			group: 'Economy',
			country: 'UK',
			imeiNo: '987654321098765',
			simNo: '8901234501234567890',
			lastModified: '2025-01-26',
			action: 'Edit/Delete',
		},
		{
			vin: '13579JKL',
			model: 'Convertible',
			group: 'Sports',
			country: 'Germany',
			imeiNo: '123450987654321',
			simNo: '8901234567012345678',
			lastModified: '2025-01-25',
			action: 'Edit/Delete',
		},
		{
			vin: '11223MNO',
			model: 'Truck',
			group: 'Heavy Duty',
			country: 'Australia',
			imeiNo: '112233445566778',
			simNo: '8901234598765432101',
			lastModified: '2025-01-24',
			action: 'Edit/Delete',
		},
		{
			vin: '44556PQR',
			model: 'Van',
			group: 'Utility',
			country: 'India',
			imeiNo: '334455667788990',
			simNo: '8901234567898765432',
			lastModified: '2025-01-23',
			action: 'Edit/Delete',
		},
		{
			vin: '77889STU',
			model: 'Crossover',
			group: 'Compact',
			country: 'Japan',
			imeiNo: '998877665544332',
			simNo: '8901234009876543210',
			lastModified: '2025-01-22',
			action: 'Edit/Delete',
		},
		{
			vin: '99001VWX',
			model: 'Minivan',
			group: 'Family',
			country: 'France',
			imeiNo: '776655443322110',
			simNo: '8901234012345678901',
			lastModified: '2025-01-21',
			action: 'Edit/Delete',
		},
		{
			vin: '12321YZ',
			model: 'Coupe',
			group: 'Sports',
			country: 'Italy',
			imeiNo: '445566778899001',
			simNo: '8901234598765432012',
			lastModified: '2025-01-20',
			action: 'Edit/Delete',
		},
		{
			vin: '12345ABC',
			model: 'Sedan',
			group: 'Luxury',
			country: 'USA',
			imeiNo: '356789123456789',
			simNo: '8901234567891234567',
			lastModified: '2025-01-28',
			action: 'Edit/Delete',
		},
		{
			vin: '67890DEF',
			model: 'SUV',
			group: 'Family',
			country: 'Canada',
			imeiNo: '123456789012345',
			simNo: '8901234567894567890',
			lastModified: '2025-01-27',
			action: 'Edit/Delete',
		},
		{
			vin: '24680GHI',
			model: 'Hatchback',
			group: 'Economy',
			country: 'UK',
			imeiNo: '987654321098765',
			simNo: '8901234501234567890',
			lastModified: '2025-01-26',
			action: 'Edit/Delete',
		},
		{
			vin: '13579JKL',
			model: 'Convertible',
			group: 'Sports',
			country: 'Germany',
			imeiNo: '123450987654321',
			simNo: '8901234567012345678',
			lastModified: '2025-01-25',
			action: 'Edit/Delete',
		},
		{
			vin: '11223MNO',
			model: 'Truck',
			group: 'Heavy Duty',
			country: 'Australia',
			imeiNo: '112233445566778',
			simNo: '8901234598765432101',
			lastModified: '2025-01-24',
			action: 'Edit/Delete',
		},
		{
			vin: '44556PQR',
			model: 'Van',
			group: 'Utility',
			country: 'India',
			imeiNo: '334455667788990',
			simNo: '8901234567898765432',
			lastModified: '2025-01-23',
			action: 'Edit/Delete',
		},
		{
			vin: '77889STU',
			model: 'Crossover',
			group: 'Compact',
			country: 'Japan',
			imeiNo: '998877665544332',
			simNo: '8901234009876543210',
			lastModified: '2025-01-22',
			action: 'Edit/Delete',
		},
		{
			vin: '99001VWX',
			model: 'Minivan',
			group: 'Family',
			country: 'France',
			imeiNo: '776655443322110',
			simNo: '8901234012345678901',
			lastModified: '2025-01-21',
			action: 'Edit/Delete',
		},
		{
			vin: '12321YZ',
			model: 'Coupe',
			group: 'Sports',
			country: 'Italy',
			imeiNo: '445566778899001',
			simNo: '8901234598765432012',
			lastModified: '2025-01-20',
			action: 'Edit/Delete',
		},
	];

	const headerData = [
		'VIN Info',
		'Model',
		'Group',
		'Country',
		'IMEI No',
		'SIM No',
		'Last Modified',
		'Action',
	];

	const data = { tableData, headerData };

	return (
		<div>
			<section className="vehicle_dashboard_container">
				<Titletab title="Vehicle Management" />
				<div className="flex items-center justify-between py-4 pl-7 pr-10">
					<div className="dashboard_tabs_left">
						<Tabs tabs={tabs} />
					</div>

					<div className="w-[43.4375rem] h-10 mr-0 flex justify-end   items-center gap-3">
						<Search />

						<Dropdown
							options={viewby}
							searchable={false}
							defaultOption={{ value: 'View By Vehicles', label: 'Vehicles' }}
						/>

						<DropdownWhiteBackground
							searchable={false}
							options={newvehicle}
							defaultOption={{ value: 'New Vehicle', label: 'New Vehicle' }}
						/>
					</div>
				</div>
				<div>
					<TableDelete data={data} pageName="VehicleManagement" />
					{/* <VehicleManagementTab /> */}
				</div>
			</section>
		</div>
	);
};

export default VehicleManagement;
