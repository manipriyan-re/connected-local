'use client';
import Dropdown from '@/components/shared/Dropdown/Dropdown';
import MultiSelectDropdown from '@/components/shared/MultiGroupDropdown/MultiGroupDropdown';

const groupOptions = [
	{ value: 'all', label: 'All Groups' },
	{ value: 'asia_pacific', label: 'Asia Pacific' },
	{ value: 'europe', label: 'Europe' },
	{ value: 'america', label: 'America' },
	{ value: 'middle_east_africa', label: 'Middle East and Africa' },
];

const weekOptions = [
	{ value: '1', label: 'Last Day' },
	{ value: '2', label: 'Last Week' },
	{ value: '3', label: 'Last Month' },
	{ value: '4', label: 'Custom' },
];

const groupList = {
	vehicles: [
		{ key: 'ME3J3E5FMR2000041', value: 'ME3J3E5FMR2000041' },
		{ key: 'ME3J3E5FMR2000042', value: 'ME3J3E5FMR2000042' },
		{ key: 'ME3J3E5FMR2000043', value: 'ME3J3E5FMR2000043' },
		{ key: 'ME3J3E5FMR2000044', value: 'ME3J3E5FMR2000044' },
		{ key: 'ME3J3E5FMR2000045', value: 'ME3J3E5FMR2000045' },
		{ key: 'ME3J3E5FMR2000046', value: 'ME3J3E5FMR2000046' },
		{ key: 'ME3J3E5FMR2000047', value: 'ME3J3E5FMR2000047' },
		{ key: 'ME3J3E5FMR2000048', value: 'ME3J3E5FMR2000048' },
		{ key: 'ME3J3E5FMR2000049', value: 'ME3J3E5FMR2000049' },
		{ key: 'ME3J3E5FMR2000010', value: 'ME3J3E5FMR2000010' },
		{ key: 'ME3J3E5FMR2000011', value: 'ME3J3E5FMR2000011' },
	],
	groups: [
		{ key: 'Group 1', value: 'Group 1' },
		{ key: 'Group 2', value: 'Group 2' },
	],
};

// const handleSelect = (data) => {

// };

const HeaderComponent = ({ isgoogleMap, setGoogleMap }) => {
	return (
		<section className="alerts_dashboard_header_options_container">
			{/* Controls */}
			<div className="flex items-center space-x-4 ">
				{/* multi select */}
				<MultiSelectDropdown
					optionsList={groupList}
					dropLabel="Search by VIN/Group"
					// onSelect={handleSelect}
				/>
				{/* Week Selection */}
				<div className="relative">
					<Dropdown
						options={groupOptions}
						defaultOption={{ value: 'all', label: 'All Groups' }}
					/>
				</div>

				{/* Week Selection */}
				<div className="relative">
					<Dropdown
						options={weekOptions}
						defaultOption={{
							value: weekOptions[0].value,
							label: weekOptions[0].label,
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default HeaderComponent;
