import React, { useEffect, useState } from 'react';
import Tabs from '../Tabs/Tabs';
import './sidebar.scss';
import leftArrow from '../../../../public/images/icons/left-arrow.svg';
import rightArrow from '../../../../public/images/icons/right-arrow.svg';
import closeIcon from '../../../../public/images/icons/close_icon.svg';
import GPSIcon from '../../../../public/images/icons/GPS-icon.svg';
import Image from 'next/image';

const Sidebar = ({
	isOpen,
	setShowSideBar,
	selectedTitle,
	titles,
	onTitleChange,
}) => {
	const [persistedTitle, setPersistedTitle] = useState('No Title Available');

	useEffect(() => {
		if (selectedTitle) {
			setPersistedTitle(selectedTitle);
		}
	}, [selectedTitle]);

	const handleArrowClick = (direction) => {
		const currentIndex = titles.indexOf(persistedTitle);

		if (direction === 'left' && currentIndex > 0) {
			const previousTitle = titles[currentIndex - 1];
			setPersistedTitle(previousTitle);
			onTitleChange(previousTitle);
		} else if (direction === 'right' && currentIndex < titles.length - 1) {
			const nextTitle = titles[currentIndex + 1];
			setPersistedTitle(nextTitle);
			onTitleChange(nextTitle);
		}
	};

	return (
		<div className="sidebar_container">
			{isOpen && <div className="full_screen_blur"></div>}
			{selectedTitle && (
				<div
					className={`fixed top-0 right-0 h-full bg-[var(--background-color)] text-white w-3/5 ${
						isOpen ? 'translate-x-0' : 'translate-x-full'
					} transition-transform duration-300 ease-in-out z-40 tabs_content_container`}>
					{/* Fixed Header Section */}
					<div className="tabs_content_header_container">
						<section className="tabs_header_left flex items-center w-3/5">
							<section className="tabs_header_logo">
								<span>
									<Image src={GPSIcon} alt="GPS-icon" />
								</span>
							</section>
							<section className="tabs_header_text">
								<span>{persistedTitle}</span>
							</section>
						</section>
						<section className="tabs_header_right flex">
							<section className="raise_ticket_container">
								<span className="raise_ticket_icon"></span>
								<span>Raise Ticket</span>
							</section>
							<section className="raise_icons_container">
								<button
									className="left_arrow"
									onClick={() => handleArrowClick('left')}>
									<Image src={leftArrow} alt="Left Arrow" />
								</button>
								<button
									className="right_arrow"
									onClick={() => handleArrowClick('right')}>
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
			)}
		</div>
	);
};

export default Sidebar;
