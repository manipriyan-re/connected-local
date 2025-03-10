const VehicleStatus = ({ status, title, count, color, isActive }) => {
	return (
		<section
			className={`vehicle_status_text_container cursor-pointer ${isActive ? 'active' : ''}`}>
			<p className="status_title">
				{status && (
					<span
						className="status_indicator"
						style={{ backgroundColor: color }}></span>
				)}
				{title}
			</p>
			<p className="status_count">{count}</p>
		</section>
	);
};

export default VehicleStatus;
