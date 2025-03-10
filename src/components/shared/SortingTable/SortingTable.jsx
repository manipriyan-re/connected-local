import React, { useState } from 'react';
import './sorting-table.scss';

const CustomTable = ({ getSelectedVehicle, initialData = [] }) => {
	// State to manage selected checkboxes
	const [selectedRows, setSelectedRows] = useState([]);
	const [isAllChecked, setIsAllChecked] = useState(false);

	// Handle checkbox change for individual rows
	const handleRowCheckboxChange = (id) => {
		const newSelectedRows = selectedRows.includes(id)
			? selectedRows.filter((rowId) => rowId !== id)
			: [...selectedRows, id];
		setSelectedRows(newSelectedRows);
	};

	// Handle select/deselect all checkboxes
	const handleSelectAllCheckboxChange = () => {
		if (isAllChecked) {
			setSelectedRows([]); // Deselect all
		} else {
			setSelectedRows(initialData.map((row) => row.id)); // Select all
		}
		setIsAllChecked(!isAllChecked);
	};

	return (
		<div className="overflow-x-auto custom_tabel_container">
			<table className="min-w-full ">
				<thead>
					<tr className="border-b">
						{/* Select/Deselect All checkbox */}
						<th className="p-3 text-left">
							<input
								type="checkbox"
								checked={isAllChecked}
								onChange={handleSelectAllCheckboxChange}
								className="size-4"
							/>
						</th>
						<th className="p-3 text-left">
							<p>Title</p>
						</th>
						<th className="p-3 text-right">
							<p>Last tracked</p>
						</th>
					</tr>
				</thead>
				<tbody className="tabel_body">
					{initialData.map((row) => (
						<tr key={row.id} className="custom-row-border">
							<td className="p-3">
								<input
									type="checkbox"
									checked={selectedRows.includes(row.id)}
									onChange={() => handleRowCheckboxChange(row.id)}
									className="size-4"
								/>
							</td>
							<td
								className="p-3 vehicle_details"
								onClick={() => getSelectedVehicle(row.title)}>
								<p className="vehicle_title">{row.title}</p>
								<p>
									<span className="vehicle_description">{row.description}</span>
									<span className="vehicle_variant">{row.variant}</span>
								</p>
							</td>
							<td className="p-3 updated_time">
								<p>{row.time}</p>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CustomTable;
