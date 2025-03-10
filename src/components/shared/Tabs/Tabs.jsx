'use client';

import React, { useState } from 'react';
import './tabs.scss';
import OverView from '../../views/OverView/OverView';
import Gpstracking from '../../views/GpsTracking/GpsTracking';
import DiagnosticReport from '@/components/views/DiagnosticReport/DiagnosticReport';
import VehicleDashboardAlerts from '@/components/views/Alerts/Alerts';

const Tabs = ({
	tabs = [
		{ id: 0, title: 'Overview', content: <OverView /> },
		{ id: 1, title: 'GPS Tracking', content: <Gpstracking /> },
		{ id: 2, title: 'Diagnostic Report', content: <DiagnosticReport /> },
		{ id: 3, title: 'Alerts', content: <VehicleDashboardAlerts /> },
	],
	renderOnClickComponent,
}) => {
	// State to track the active tab index
	const [activeTab, setActiveTab] = useState(0);

	// Tab data for dynamic content

	return (
		<div className="tabs_container ">
			<div className="tabs_title_container flex flex-nowrap gap-4 justify-between size-full">
				<section className="flex tabs_background">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`tab_title py-2 px-4 text-lg transition-colors duration-300 ease-in-out ${
								activeTab === tab.id ? 'active_tab' : 'inactive_tab'
							}`}
							style={{ whiteSpace: 'nowrap' }} // Prevents wrapping
						>
							{tab.title}
						</button>
					))}
				</section>
				<section>
					{renderOnClickComponent && <div>{renderOnClickComponent}</div>}
				</section>
			</div>

			{/* Tabs Content */}
			<div className="tab_content_container mt-2 border border-gray-300 rounded-lg">
				<div className="tab_content text-xl font-medium">
					{tabs[activeTab].content}
				</div>
			</div>
		</div>
	);
};

export default Tabs;
