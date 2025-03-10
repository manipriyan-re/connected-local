'use client';
import './alertToast.scss';
import { useDispatch } from 'react-redux';
import { closeToast } from '../../../store/slice/toastSlice';

const AlertToast = ({ alertType = 'info', alertMessage = 'NA' }) => {
	const dispatch = useDispatch();

	const type = alertType;
	const message = alertMessage;
	// const icon =
	//   type == "success"
	//     ? "check_circle"
	//     : type == "danger"
	//       ? "warning"
	//       : type == "info"
	//         ? "info"
	//         : "info";
	// let iconColor = type == 'success' ? '#22943c' : type == 'danger' ? 'white' : type == 'info' ? '#303030' : 'black'
	const closrList = {
		success: '#0a3622',
		danger: 'white',
		info: '#303030',
	};

	const textColor = closrList[type] || 'black';

	const closeAlert = () => {
		dispatch(closeToast());
	};
	return (
		<div className={`flex items-center custom-alert ${type}`}>
			<div className="flex items-center">
				{/* icon will be placed later as per the library we choose or if needed */}
				{/* <i className='material-icons mr-4' style={{color: iconColor}}>{icon}</i> */}
				<p className="cv-toast-content mb-0" style={{ color: textColor }}>
					{' '}
					{message}
				</p>
			</div>
			<i
				className="material-icons close-toast-btn"
				style={{ color: textColor }}
				onClick={closeAlert}>
				close
			</i>
		</div>
	);
};

export default AlertToast;
