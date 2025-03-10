import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for styling
import './date-picker.scss';

const CustomDateRangePicker = ({
	withTime = false, // Enable time selection
	rangePicker = true, // Enable from-to date selection
	dateFormat = 'dd/MM/yyyy', // Default format
	placeholderText = 'Select date', // Placeholder
}) => {
	const [selectedDate, setSelectedDate] = useState(
		rangePicker ? [null, null] : null,
	);

	const handleDateChange = (date) => {
		if (rangePicker) {
			setSelectedDate(date); // For range, set both start and end dates
		} else {
			setSelectedDate(date); // For single date, set selected date
		}
	};

	const dynamicPlaceholder = rangePicker
		? 'Select date range' // Placeholder for range picker
		: placeholderText; // Use custom placeholder for single date picker

	return (
		<div className="date_picker_container">
			<DatePicker
				id="date-picker"
				selected={rangePicker ? selectedDate[0] : selectedDate} // For range, use the start date
				onChange={handleDateChange}
				startDate={rangePicker ? selectedDate[0] : null}
				endDate={rangePicker ? selectedDate[1] : null}
				selectsRange={rangePicker} // Enable range selection if true
				showTimeSelect={withTime} // Show time picker if true
				timeIntervals={15} // Time intervals for selection
				timeCaption="Time"
				dateFormat={withTime ? 'MMMM d, yyyy h:mm aa' : dateFormat}
				placeholderText={dynamicPlaceholder} // Set dynamic placeholder based on selection
			/>
		</div>
	);
};

export default CustomDateRangePicker;
