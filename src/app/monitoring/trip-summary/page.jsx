import Tabs from '@/components/shared/Tabs/Tabs';
import TripSummaryComp from '@/components/views/TripSummary/TripSummary';
import '../../../components/views/VehicleDashboard/vehicle-dashboard.scss';
import Header from '@/components/shared/Header/Header';
import HeaderComponent from './HeaderComponent';

export default function TripSummary() {
	const tabs = [
		{ id: 0, title: 'ICE Vehicles', content: <TripSummaryComp /> },
		{ id: 1, title: 'EV Vehicles', content: 'Content for Tab 2' },
	];

	return (
		<>
			<section className="vehicle_dashboard_container">
				<Header headerTitle={'Vehicle Trip Summary'} />
				<div className="vehicle_dashboard_tabs_container">
					<div className="dashboard_tabs_left">
						<Tabs tabs={tabs} renderOnClickComponent={<HeaderComponent />} />
					</div>
					<div className="dashboard_tabs_right text-black"></div>
				</div>
			</section>
		</>
	);
}
