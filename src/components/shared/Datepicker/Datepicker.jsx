import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for styling
import './date-picker.scss';

const CustomDatePicker = ({ sendDate, selectedDate, type }) => {
	const handleDateChange = (date) => {
		sendDate(type, date);
	};

	const handleDateChangeRaw = (e) => {
		e.preventDefault();
	};

	return (
		<div className="date_picker_container">
			<DatePicker
				id="date-picker"
				selected={selectedDate}
				onChange={(date) => handleDateChange(date)}
				onChangeRaw={handleDateChangeRaw}
				showTimeSelect // To show time picker
				timeIntervals={15} // Select every 15 minutes
				timeFormat="HH:mm"
				dateFormat="dd/MM/yyyy h:mm aa" // Format of selected date and time
				// readOnly
				placeholderText="DD/MM/YYYY --:-- "
			/>
		</div>
	);
};

export default CustomDatePicker;
