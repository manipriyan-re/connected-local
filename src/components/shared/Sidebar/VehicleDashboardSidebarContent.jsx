import tabsLogo from '../../../../public/images/icons/tabs-logo.svg';
import leftArrow from '../../../../public/images/icons/left-arrow.svg';
import rightArrow from '../../../../public/images/icons/right-arrow.svg';
import closeIcon from '../../../../public/images/icons/close_icon.svg';
import Tabs from '../Tabs/Tabs';

import Image from 'next/image';

const VehicleDashboardSidebarContent = ({ isOpen, setShowSideBar }) => {
	return (
		<div
			className={`fixed top-0 right-0 h-full bg-[#1B1B1B] text-white w-3/4 ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			} transition-transform duration-300 ease-in-out z-40 tabs_content_container`}>
			{/* Fixed Header Section */}
			<div className="tabs_content_header_container">
				<section className="tabs_header_left flex items-center w-3/5">
					<section className="tabs_header_logo">
						<span>
							<Image src={tabsLogo} alt="tabs-logo" />
						</span>
					</section>
					<section className="tabs_header_text">
						<span>ME3J3E5FMR2000041</span>
					</section>
				</section>
				<section className="tabs_header_right flex">
					<section className="raise_ticket_container">
						<span className="raise_ticket_icon"></span>
						<span>Raise Ticket</span>
					</section>
					<section className="raise_icons_container">
						<button className="left_arrow">
							<Image src={leftArrow} alt="Left Arrow" />
						</button>
						<button>
							<Image src={rightArrow} alt="Right Arrow" />
						</button>
					</section>
					<section className="close_icon flex">
						<button
							onClick={() => {
								setShowSideBar(false);
							}}>
							<Image src={closeIcon} alt="Close Icon" />
						</button>
					</section>
				</section>
			</div>

			{/* Scrollable Content */}
			<div className="tabs_location_details_container flex">
				<div className="last_tracked">
					<p>Last Tracked</p>
					<p>Nov 27, 24 10:15AM</p>
				</div>
				<div className="gps_status">
					<p>GPS Status</p>
					<p>Valid</p>
				</div>
				<div className="avg_speed">
					<p>Avg. Speed</p>
				</div>
				<div className="location">
					<p>Location</p>
					<p>Unnamed Road, Tamil Nadu 631604, India</p>
				</div>
			</div>

			{/* This container should be scrollable */}
			<div className="tab_content_section">
				<Tabs />
			</div>
		</div>
	);
};
export default VehicleDashboardSidebarContent;
