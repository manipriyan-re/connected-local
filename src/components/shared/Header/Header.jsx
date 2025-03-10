'use client';
import Dropdown from '../Dropdown/Dropdown';
import './header.scss';
import indiaFlag from '../../../../public/images/icons/india.svg';
import Image from 'next/image';

const Header = ({ headerTitle }) => {
	const regionOptions = [
		{ value: 'all', label: 'All Groups' },
		{ value: 'asia_pacific', label: 'Asia Pacific' },
		{ value: 'europe', label: 'Europe' },
		{ value: 'america', label: 'America' },
		{ value: 'middle_east_africa', label: 'Middle East and Africa' },
	];

	const countryOptions = [
		{ value: 'all', label: 'All Groups' },
		{ value: 'India', label: 'India', icon: indiaFlag },
		{ value: 'USA', label: 'Europe' },
		{ value: 'UAE', label: 'America' },
	];
	// const languages = [
	//   { value: "en", label: "English" },
	//   { value: "al", label: "German" },
	// ];

	return (
		<div className="dashboard_header flex items-center justify-between">
			<section className="vehilce_dashboard_header_left">
				<h1 className="page-title">{headerTitle}</h1>
			</section>
			<section className="vehilce_dashboard_header_right flex">
				<div className="region_container">
					<Dropdown options={regionOptions} defaultOption={regionOptions[1]} />
				</div>
				<div className="country_container">
					<Dropdown
						options={countryOptions}
						defaultOption={countryOptions[1]}
					/>
				</div>
				<div className="language_switcher_container dropdown_container h-[36px]">
					{/* <Dropdown options={languages} onOptionSelect={handleLanguageChange} /> */}
					<button className="flex items-center py-2 px-3 text-sm">
						<Image
							src="/images/language.svg"
							alt="language"
							width={20}
							height={20}
							className="mr-3"
						/>
						<span>EN/US</span>
					</button>
				</div>
			</section>
		</div>
	);
};

export default Header;
