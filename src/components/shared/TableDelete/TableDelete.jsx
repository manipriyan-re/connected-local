'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SyncUpIcon from '../../../../public/images/icons/sync-up.svg';
import DownloadIcon from '../../../../public/images/icons/download.svg';
import DeleteIcon from '../../../../public/images/icons/delete.svg';
import CameraIcon from '../../../../public/images/icons/camera.svg';
import ArrowDownIcon from '../../../../public/images/icons/down-arrow.svg';
import ArrowUpIcon from '../../../../public/images/icons/right-arrow.svg';
import editIcon from '../../../../public/images/icons/edit_icon.svg';
import './table-delete.scss';
import Search from '../SearchComponent/SearchComponent';
import FilterSidebar from '@/components/shared/Sidebar/FilterSidebar';
import DownloadBlackIcon from '../../../../public/images/icons/download-black.svg';

const TableDelete = ({
	data,
	showDelete,
	accordion,
	showAccordionDelete,
	showActions,
	showDownloadAction,
	dynamicKeys = [],
	stickyFirstColumn = false,
	showFilteredRecords,
	showTableSearch,
	showDownloadFilter,
	pageName,
	showFilterIcon,
}) => {
	const { tableData, headerData } = data;
	const [visibleRows, setVisibleRows] = useState(5);
	const [rowsToShow, setRowsToShow] = useState(5);
	const [sortConfig, setSortConfig] = useState({
		key: headerData[0],
		direction: 'asc',
	});
	const [expandedRows, setExpandedRows] = useState(accordion ? [0] : []);
	const [showFilterSidebar, setShowFilterSidebar] = useState(false);
	const sortedData = React.useMemo(() => {
		return [...tableData].sort((a, b) => {
			if (!sortConfig.key) return 0;
			const aValue = a[sortConfig.key];
			const bValue = b[sortConfig.key];
			if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
			if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
			return 0;
		});
	}, [tableData, sortConfig]);

	const handleLoadMore = () => {
		setVisibleRows((prev) => Math.min(prev + rowsToShow, tableData.length));
	};

	const handleRowsToShowChange = (event) => {
		const value = parseInt(event.target.value, 10);
		setRowsToShow(value);
		setVisibleRows(value);
	};

	const handleSort = (key) => {
		setSortConfig((prevConfig) => {
			if (prevConfig.key === key) {
				return {
					key,
					direction: prevConfig.direction === 'asc' ? 'desc' : 'asc',
				};
			} else {
				return { key, direction: 'asc' };
			}
		});
	};

	const handleAccordionToggle = (rowIndex) => {
		setExpandedRows((prev) =>
			prev.includes(rowIndex)
				? prev.filter((index) => index !== rowIndex)
				: [...prev, rowIndex],
		);
	};

	const renderSortIcon = (header) => {
		if (sortConfig.key === header) {
			return sortConfig.direction === 'asc' ? (
				<span className="text-xl">↑</span>
			) : (
				<span className="text-xl">↓</span>
			);
		}
		return <span className="text-xl">↑</span>;
	};

	const renderCellContent = (key, value) => {
		if (key === 'syncStatus' || key === 'actionStatus') {
			return <span className="sync_status">{value}</span>;
		}

		switch (value) {
			case 'Idle':
				return (
					<div className="flex items-center gap-2">
						<span className="yellow_dot"></span>
						<span>{value}</span>
					</div>
				);
			case 'Running':
				return (
					<div className="flex items-center gap-2">
						<span className="green_dot"></span>
						<span>{value}</span>
					</div>
				);
			case 'Stopped':
				return (
					<div className="flex items-center gap-2">
						<span className="red_dot"></span>
						<span>{value}</span>
					</div>
				);
			default:
				return value;
		}
	};

	const renderHeader = () => (
		<thead className="top-0 sticky ">
			<tr>
				{/* Add empty header cell for arrow column */}
				{accordion && (
					<th
						className={`w-10 px-2 ${stickyFirstColumn ? 'sticky left-0 z-20' : ''}`}
						style={{ background: 'var(--gradient-color-1)' }}
					/>
				)}
				{headerData.map((header, index) => (
					<th
						key={header}
						className={`text-left px-3 py-6 text-sm cursor-pointer ${
							(stickyFirstColumn && index === 0 ? 'sticky left-0 z-20' : '',
							header === 'Sync Status' || header === 'Action'
								? 'text-center'
								: 'text-left')
						}`}
						onClick={() => handleSort(header)}
						style={{ background: 'var(--gradient-color-1)' }}>
						<div
							className={`flex items-center space-x-2 whitespace-nowrap ${
								header === 'Sync Status' || header === 'Action'
									? 'justify-center'
									: ''
							}`}>
							<span>{header}</span>
							{renderSortIcon(header)}
						</div>
					</th>
				))}
				{showDelete && <th className="w-20 px-2" />}
			</tr>
		</thead>
	);

	const renderRow = (row, index) => {
		return (
			<React.Fragment key={index}>
				<tr className="border-b">
					{/* Arrow column first */}
					{accordion && (
						<td
							className={`w-10 px-2 ${stickyFirstColumn ? 'sticky left-0 z-20' : ''}`}
							style={{ background: 'var(--background-color)' }}>
							<button
								onClick={() => handleAccordionToggle(index)}
								className="p-1 hover:bg-gray-700 rounded-full transition-colors">
								<div className="size-5 relative">
									<Image
										src={
											expandedRows.includes(index) ? ArrowUpIcon : ArrowDownIcon
										}
										alt={expandedRows.includes(index) ? 'Collapse' : 'Expand'}
										layout="fill"
										className="object-contain"
										priority
									/>
								</div>
							</button>
						</td>
					)}

					{/* Data columns from dynamicKeys */}
					{dynamicKeys.map((key, colIndex) => (
						<td key={key} className="px-2 py-6 text-sm">
							{renderCellContent(key, row[key])}
						</td>
					))}

					{/* Data columns from Object.keys(row) for other keys */}
					{Object.keys(row).map((key, idx) =>
						key === 'action' && pageName === 'VehicleManagement' ? (
							<td key={key}>
								<div className="flex">
									<Image
										src={editIcon}
										alt="Edit_Icon"
										className="action_icon size-5"
									/>
									<Image
										src={DeleteIcon}
										alt="Delete_Icon"
										className="action_icon icon size-5"
									/>
								</div>
							</td>
						) : (
							!dynamicKeys.includes(key) && (
								<td
									key={key}
									className={`px-2 py-6 text-sm ${
										stickyFirstColumn && idx === 0 ? 'sticky left-0 z-10' : ''
									}`}
									style={{ background: 'var(--background-color)' }}>
									{row[key]}
								</td>
							)
						),
					)}

					{showActions && (
						<td className="action_column">
							{showActions && (
								<div className="action_item">
									<Image
										src={SyncUpIcon}
										alt="Sync Up"
										className="action_icon"
									/>
									<span className="action_text">{showActions}</span>
								</div>
							)}
							{showActions && showDownloadAction && (
								<div className="vertical_divider"></div>
							)}
							{showDownloadAction && (
								<div className="action_item">
									<Image
										src={DownloadIcon}
										alt="Download"
										className="action_icon"
									/>
									<span className="action_text">Download</span>
								</div>
							)}
						</td>
					)}

					{/* Action buttons at the end */}
					{showDelete && (
						<td className="flex justify-center items-center space-x-4 p-2">
							<button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-700">
								<Image
									src={DeleteIcon}
									alt="Delete icon"
									width={24}
									height={24}
									className="object-contain"
								/>
							</button>
							<button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-700">
								<Image
									src={CameraIcon}
									alt="Camera icon"
									width={24}
									height={24}
									className="object-contain"
								/>
							</button>
						</td>
					)}
				</tr>

				{accordion &&
					expandedRows.includes(index) &&
					renderAccordionContent(row)}
			</React.Fragment>
		);
	};

	const renderAccordionContent = (row) => (
		<tr>
			<td
				colSpan={
					headerData.length +
					(showAccordionDelete ? 1 : 0) +
					(accordion ? 1 : 0)
				}>
				<div className="p-2 text-gray-300">
					<table className="w-full max-w-full mx-auto border-collapse table-auto ml-8">
						<thead>
							<tr>
								{headerData.map((header, idx) => (
									<th
										key={header}
										className="text-left p-2 text-xs"
										onClick={() => handleSort(header)}>
										<div className="flex items-center space-x-2 whitespace-nowrap">
											<span>{header}</span>
											{renderSortIcon(header)}
										</div>
									</th>
								))}
								{showAccordionDelete && (
									<th className="w-20 p-2 text-xs">
										{/* Space for delete and camera icons */}
									</th>
								)}
							</tr>
						</thead>
						<tbody>
							<tr>
								{Object.keys(row).map((key, idx) => (
									<td key={key} className=" p-2 text-xs">
										{row[key]}
									</td>
								))}
								{showAccordionDelete && (
									<td className="flex justify-center items-center space-x-4 p-2">
										<button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-700">
											<Image
												src={DeleteIcon}
												alt="Delete icon"
												width={24}
												height={24}
												className="object-contain"
											/>
										</button>
										<button className="flex items-center justify-center size-8 rounded-full hover:bg-gray-700">
											<Image
												src={CameraIcon}
												alt="Camera icon"
												width={24}
												height={24}
												className="object-contain"
											/>
										</button>
									</td>
								)}
							</tr>
						</tbody>
					</table>
				</div>
			</td>
		</tr>
	);

	return (
		<section className="delete_table_container">
			<div className="flex justify-between items-center w-full mb-6">
				{/* Left Side */}
				{showFilteredRecords && (
					<div className="flex items-center gap-2">
						<span className="text-[16px] text-[var(--text-color-header)]">
							Filtered Record:
						</span>
						<span className="text-[16px] text-[var(--text-color)]">
							ME3J3E5FMR2000041
						</span>
					</div>
				)}

				{/* Right Side */}
				<div className="flex items-center gap-2">
					{showTableSearch && <Search showIcon={true} />}
					{showDownloadFilter && (
						<button className="w-[158px] h-[40px] p-[12px_16px] gap-2 rounded-tl-[8px] bg-[var(--Button-Styles-Primary-BG,#FBFBFB)] text-[var(--Button-Styles-Primary-Label,#262626)] flex items-center justify-center transition-opacity duration-300 hover:opacity-100 hover:bg-[var(--Button-Styles-Primary-BG,#FBFBFB)] hover:text-[var(--Button-Styles-Primary-Label,#262626)]">
							<Image
								src={DownloadBlackIcon}
								alt="Download"
								width={16}
								height={16}
							/>
							Download
						</button>
					)}
					{showFilterIcon && (
						<button
							className="filter-icon-wrapper"
							onClick={() => setShowFilterSidebar(true)}>
							<Image
								src="/images/filter-Icon-alert.svg"
								alt="Filter Icon"
								width={50}
								height={50}
							/>
						</button>
					)}
				</div>
			</div>
			<FilterSidebar
				isOpen={showFilterSidebar}
				setShowSideBar={setShowFilterSidebar}
			/>
			<div className="table_wrapper overflow-x-auto max-h-96">
				<table className="w-full border-collapse table-auto">
					{renderHeader()}
					<tbody>
						{sortedData
							.slice(0, visibleRows)
							.map((row, index) => renderRow(row, index))}
					</tbody>
				</table>
			</div>
			<div className="table_controls flex justify-between items-center mt-2">
				<div className="record_info text-sm">
					<span>
						# Records {1}-{Math.min(visibleRows, tableData.length)} of{' '}
						{tableData.length}
					</span>
				</div>
				<button
					onClick={handleLoadMore}
					className="load_more_button border border-white text-white px-4 py-2 text-xs rounded hover:bg-white hover:text-gray-700 disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-transparent"
					disabled={visibleRows >= tableData.length}>
					Load More
				</button>
				<div className="records_dropdown flex items-center gap-2">
					<label htmlFor="recordsToShow" className="text-sm">
						# Records show
					</label>
					<select
						id="recordsToShow"
						value={rowsToShow}
						onChange={handleRowsToShowChange}
						className="bg-transparent text-sm px-2 py-1 border-none rounded">
						<option value={5}>5</option>
						<option value={10}>10</option>
						<option value={15}>15</option>
						<option value={20}>20</option>
					</select>
				</div>
			</div>
		</section>
	);
};

export default TableDelete;
