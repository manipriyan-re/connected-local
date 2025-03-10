import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import tempIcon from '../../../../public/images/icons/temp-icon.svg';
import configInfoIcon from '../../../../public/images/icons/config-info-icon.svg';
import tripSumIcon from '../../../../public/images/icons/trip-sum-icon.svg';
import bikeTpmsIcon from '../../../../public/images/bike-tpms.svg';
import infoIcon from '../../../../public/images/icons/info-icon.svg';
import './overview.scss';
import '@/components/shared/Sidebar/sidebar.scss';
const OverView = () => {
	return (
		<section className="overview_container_details">
			{/* Vehicle Status Section */}
			<div className="vehicle_status_container">
				<div className="vehicle_status_top flex">
					<div className="vehicle_status_info">
						<h2 className="vehicle_name">Super Meteor 650</h2>
						<p className="vehicle_status connected">Connected</p>
					</div>
					<div className="vehicle_charge">67% Charging</div>
				</div>

				{/* Additional Details */}
				<div className="vehicle_details_container flex">
					<div className="odometer">
						<p>Odometer</p>
						<p>12,450 km</p>
					</div>
					<div className="vehicle_mode">
						<p>Vehicle Mode</p>
						<p>Eco</p>
					</div>
					<div className="ride_mode">
						<p>Ride Mode</p>
						<p>Tour</p>
					</div>
					<div className="ignition">
						<p>Ignition</p>
						<p>On</p>
					</div>
					<div className="vehicle_status">
						<p>Vehicle Status</p>
						<p>Active</p>
					</div>
				</div>
			</div>

			{/* Top Section */}
			<div className="overview_top_section_container flex">
				{/* Temperature Section */}
				<div className="overview_top_section_left_container">
					<div className="overview_top_overlay_container">
						<div className="header_overlay">
							<div className="header_overlay_title temperature">
								<Image
									src={tempIcon}
									alt="Temperature Icon"
									width={16}
									height={16}
								/>
								<span>TEMPERATURE</span>
							</div>
						</div>
						<div className="header_row flex">
							<div className="header_row_left">
								<p className="header_title">
									Motor Temp{' '}
									<Image
										src={infoIcon}
										alt="Info"
										width={14}
										height={14}
										className="info_icon"
										data-tooltip-id="motorTooltip"
									/>
									<Tooltip
										id="motorTooltip"
										place="top"
										content="Motor temperature details"
									/>
								</p>
								<p className="header_content">75°C</p>
							</div>
							<div className="header_row_right">
								<p className="header_title">
									Battery Temp{' '}
									<Image
										src={infoIcon}
										alt="Info"
										width={14}
										height={14}
										className="info_icon"
										data-tooltip-id="batteryTooltip"
									/>
									<Tooltip
										id="batteryTooltip"
										place="top"
										content="Battery temperature details"
									/>
								</p>
								<p className="header_content">68°C</p>
							</div>
						</div>
					</div>
				</div>

				{/* Trip Summary Section */}
				<div className="overview_top_section_right_container">
					<div className="overview_top_overlay_container">
						<div className="header_overlay">
							<div className="header_overlay_title trip_summary">
								<Image
									src={tripSumIcon}
									alt="Trip Summary Icon"
									width={16}
									height={16}
								/>
								<span>TRIP SUMMARY</span>
							</div>
						</div>
						<div className="header_row flex">
							<div className="header_row_left">
								<p className="header_title">
									Trip A{' '}
									<Image
										src={infoIcon}
										alt="Info"
										width={14}
										height={14}
										className="info_icon"
										data-tooltip-id="tripATooltip"
									/>
									<Tooltip
										id="tripATooltip"
										place="top"
										content="Distance covered in Trip A"
									/>
								</p>
								<p className="header_content">120 km</p>
							</div>
							<div className="header_row_right">
								<p className="header_title">
									Trip B{' '}
									<Image
										src={infoIcon}
										alt="Info"
										width={14}
										height={14}
										className="info_icon"
										data-tooltip-id="tripBTooltip"
									/>
									<Tooltip
										id="tripBTooltip"
										place="top"
										content="Distance covered in Trip B"
									/>
								</p>
								<p className="header_content">90 km</p>
							</div>
							<div className="header_row_right">
								<p className="header_title">
									Trip K{' '}
									<Image
										src={infoIcon}
										alt="Info"
										width={14}
										height={14}
										className="info_icon"
										data-tooltip-id="tripKTooltip"
									/>
									<Tooltip
										id="tripKTooltip"
										place="top"
										content="Distance covered in Trip K"
									/>
								</p>
								<p className="header_content">45 km</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Additional Containers */}
			<div className="overview_top_section_container flex">
				{/* Left Container with Bike TPMS Image */}
				<div className="overview_top_section_left_container">
					<div className="overview_top_overlay_container bike_tpms">
						<Image
							src={bikeTpmsIcon}
							alt="Bike TPMS Icon"
							width={263}
							height={213}
						/>
						{/* Pressure values */}
						<div className="pressure_values">
							<p>20 psi</p>
							<p>36 psi</p>
						</div>
					</div>
				</div>

				{/* Right Container with Configuration Info */}
				<div className="overview_top_section_right_container">
					<div className="overview_top_overlay_container configuration_info">
						<div className="header_overlay">
							<div className="header_overlay_title temperature">
								<Image
									src={configInfoIcon}
									alt="Configuration Icon"
									width={16}
									height={16}
								/>
								<span>CONFIGURATION INFO</span>
							</div>
						</div>
						<div className="header_row flex">
							<div className="header_row_left">
								<p className="header_title">Hill Mode</p>
							</div>
							<div className="header_row_right">
								<p className="header_content">Enabled</p>
							</div>
						</div>
						<div className="header_row flex">
							<div className="header_row_left">
								<p className="header_title">ABS Feature</p>
							</div>
							<div className="header_row_right">
								<p className="header_content">Enabled</p>
							</div>
						</div>
						<div className="header_row flex">
							<div className="header_row_left">
								<p className="header_title">Traction Control</p>
							</div>
							<div className="header_row_right">
								<p className="header_content">Enabled</p>
							</div>
						</div>
						<div className="header_row flex">
							<div className="header_row_left">
								<p className="header_title">Regen Level</p>
							</div>
							<div className="header_row_right">
								<p className="header_content">Enabled</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OverView;
