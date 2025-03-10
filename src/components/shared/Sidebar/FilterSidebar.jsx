import Image from 'next/image';
import closeIcon from '../../../../public/images/icons/close_icon.svg';
import './filtersidebar.scss';

const FilterSidebar = ({ isOpen, setShowSideBar }) => {
	return (
		<div className="sidebar_container">
			{isOpen && <div className="full_screen_blur"></div>}
			<div
				className={`fixed top-0 right-0 h-full bg-[var(--background-color)] text-white sidebar_width transorm ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} transition-transform duration-300 ease-in-out z-40 tabs_content_container`}>
				{/* Fixed Header Section */}
				<div className="tabs_content_header_container flex justify-between items-center p-4">
					<h2 className="text-lg font-semibold flex items-center">
						<Image
							src="/images/filter-icon-big.svg"
							alt="Filter Icon"
							width={24}
							height={24}
							className="mr-2"
						/>
						Filter
					</h2>
					<button onClick={() => setShowSideBar(false)}>
						<Image src={closeIcon} alt="Close Icon" />
					</button>
				</div>
				<div className="filter_header_separator"></div>

				{/* Sync Status & Type of Event */}
				<div className="tab_content_section">
					<div className="filter_row">
						<div className="filter_column">
							<label className="filter_label">Sync Status</label>
							<select className="filter_select">
								<option value="synced">Synced</option>
								<option value="sync-in-progress">Sync In Progress</option>
							</select>
						</div>

						<div className="filter_column">
							<label className="filter_label">Type of Event</label>
							<select className="filter_select">
								<option value="d0">D0</option>
								<option value="d1">D1</option>
							</select>
						</div>
					</div>

					{/* Separator Below Sync Status & Event Type */}
					<div className="filter_header_separator"></div>

					{/* Date Range */}
					<div className="filter_section">
						<label className="filter_label">Occurrence Date Range</label>
						<div className="flex gap-2">
							<div className="filter_date_column">
								<label className="filter_date_label">From</label>
								<input type="date" className="filter_date_input" />
							</div>
							<div className="filter_date_column">
								<label className="filter_date_label">To</label>
								<input type="date" className="filter_date_input" />
							</div>
						</div>
					</div>
					<div className="filter_header_separator"></div>
					{/* Buttons */}
					<div className="filter_buttons">
						<button className="clear_button">Clear All</button>
						<button className="apply_button">Apply</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterSidebar;
