'use client';
import Tabs from '@/components/shared/Tabs/Tabs';
import TableDelete from '@/components/shared/TableDelete/TableDelete';
import Header from '@/components/shared/Header/Header';
import Dropdown from '@/components/shared/Dropdown/Dropdown';
import CustomDateRangePicker from '@/components/shared/Datepicker/DateRangePicker';
import '../../../components/views/VehicleDashboard/vehicle-dashboard.scss';
import MessageDisplay from '@/components/shared/MessageDisplay/page';
import { useTranslation } from 'react-i18next';
const TabContent = ({ data }) => {
	if (!data) {
		return (
			<div>
				<MessageDisplay
					messages={[
						'Search for VIN / Group to view the past events.',
						'Use the search box and time period to filter the VIN / Group records.',
					]}
				/>
			</div>
		);
	}

	return (
		<TableDelete
			showDelete={true}
			data={data}
			accordion={false}
			showAccordionDelete={false}
			sticky={true}
			showDownloadFilter={true}
			showFilteredRecords={true}
			showTableSearch={true}
		/>
	);
};
const VehicleDashboardHeaderDropdown = () => {
	const modelOptions = [
		{ value: 'all', label: 'All Model' },
		{ value: 'asia_pacific', label: 'Asia Pacific' },
		{ value: 'europe', label: 'Europe' },
		{ value: 'america', label: 'America' },
		{ value: 'middle_east_africa', label: 'Middle East and Africa' },
	];

	const variantOptions = [
		{ value: 'all', label: 'All Variant' },
		{ value: 'asia_pacific', label: 'Asia Pacific' },
		{ value: 'europe', label: 'Europe' },
		{ value: 'america', label: 'America' },
		{ value: 'middle_east_africa', label: 'Middle East and Africa' },
	];

	return (
		<section className="vehicle_dashboard_header_dropdown_container flex gap-3">
			{/* Model Selector */}
			<Dropdown
				options={modelOptions}
				defaultOption={{ value: 'all', label: 'All Model' }}
			/>
			{/* Variant Selector */}
			<Dropdown
				options={variantOptions}
				defaultOption={{
					value: variantOptions[0].value,
					label: variantOptions[0].label,
				}}
			/>
			<Dropdown
				options={variantOptions}
				defaultOption={{
					value: variantOptions[0].value,
					label: variantOptions[0].label,
				}}
				multiSelect={true}
			/>
			<CustomDateRangePicker />
			<button className="w-[158px] h-[40px] p-[12px_16px] gap-2 rounded-tl-[8px] bg-[var(--Button-Styles-Primary-BG,#FBFBFB)] text-[var(--Button-Styles-Primary-Label,#262626)] flex items-center justify-center transition-opacity duration-300 hover:opacity-100 hover:bg-[var(--Button-Styles-Primary-BG,#FBFBFB)] hover:text-[var(--Button-Styles-Primary-Label,#262626)]">
				Search Records
			</button>
		</section>
	);
};
const VehicleLogger = () => {
	const { t } = useTranslation();
	// Generate table data
	const tableData = Array.from({ length: 15 }, (_, rowIndex) => {
		const row = {};
		for (let colIndex = 0; colIndex < 15; colIndex++) {
			row[`column${colIndex + 1}`] = `Row ${rowIndex + 1}, Col ${colIndex + 1}`;
		}
		return row;
	});

	// Generate header data
	const headerData = Array.from(
		{ length: 15 },
		(_, index) => `Column ${index + 1}`,
	);

	// Combine table and header data into a single object
	const data = { tableData, headerData };

	// Tabs configuration
	const tabs = [
		{ id: 0, title: t('ice_vehicles'), content: <TabContent data={data} /> },
		{ id: 1, title: t('ev_vehicles'), content: 'Content for Tab 2' },
	];

	return (
		<>
			<section className="vehicle_dashboard_container">
				<Header headerTitle={t('vehicle_logger')} />
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

export default VehicleLogger;
