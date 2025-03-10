'use client';

import { useState } from 'react';
import Tabs from '../../shared/Tabs/Tabs';
import FilterSidebar from '@/components/shared/Sidebar/FilterSidebar';
import DeepLogEventHistoryContent from './DeepLogEventHistoryContent';
import Dropdown from '@/components/shared/Dropdown/Dropdown';
import Header from '@/components/shared/Header/Header';
import './deep-log-event-history.scss';

const DeepLogHeaderDropdown = ({ onGroupSelect }) => {
	const groupOptions = [
		{ value: 'group1', label: 'Group 1' },
		{ value: 'group2', label: 'Group 2' },
		{ value: 'group3', label: 'Group 3' },
	];

	const weekOptions = [
		{ value: 'last_week', label: 'Last Week' },
		{ value: 'week', label: 'Week' },
	];

	const handleGroupChange = (selectedOption) => {
		onGroupSelect(selectedOption.label); // Send the selected group's label to the parent
	};

	return (
		<div className="deep_log_header_dropdown flex gap-3 items-center">
			{/* Group Selector */}
			<Dropdown
				options={groupOptions}
				defaultOption={{ value: 'group1', label: 'Group 1' }}
				onChange={handleGroupChange}
			/>
			{/* Week Selector */}
			<Dropdown
				options={weekOptions}
				defaultOption={{ value: 'week', label: 'Week' }}
			/>
			{/* Search Records Button */}
			<button className="search_records_btn p-1 bg-white text-black rounded">
				Search Records
			</button>
		</div>
	);
};

const DeepLogEventHistory = () => {
	const [showSideBar, setShowSideBar] = useState(false);
	const [selectedGroup, setSelectedGroup] = useState('Group 1');

	const tabs = [
		{
			id: 0,
			title: 'ICE Vehicles',
			content: (
				<DeepLogEventHistoryContent
					showSideBar={showSideBar}
					selectedGroup={selectedGroup}
				/>
			),
		},
		{
			id: 1,
			title: 'EV Vehicles',
			content: 'Content for EV Vehicles', // Placeholder for Tab 2 content
		},
	];

	return (
		<section className="deep_log_event_history_container">
			<Header headerTitle={'Deep Log Event History'} />

			{/* Tabs Container */}
			<div className="deep_log_event_history_tabs_container">
				<div className="dashboard_tabs_left">
					<Tabs
						tabs={tabs}
						renderOnClickComponent={
							<DeepLogHeaderDropdown onGroupSelect={setSelectedGroup} />
						}
					/>
				</div>
				<div className="dashboard_tabs_right text-black"></div>
			</div>

			{/* Sidebar */}
			{showSideBar && <FilterSidebar setShowSideBar={setShowSideBar} />}
		</section>
	);
};

export default DeepLogEventHistory;
