'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import './MGDstyle.scss';

const MultiSelectDropdown = ({
	optionsList,
	dropLabel = 'Search',
	onSelect,
}) => {
	// Default label
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(null); // Initialize to null

	useEffect(() => {
		if (onSelect) {
			// Check if the prop exists before using it
			onSelect(selectedValue); // Pass the selected value to the parent
		}
	}, [selectedValue, onSelect]); // Add onSelect to dependency array

	const openList = (index) => {
		const dropListAll = document.getElementsByClassName(`msd-list`);
		const listArrowAll = document.getElementsByClassName(`msd-list-arrow`);
		const dropList = document.getElementsByClassName(`msd-list-${index}`)[0];
		const listArrow = document.getElementsByClassName(
			`msd-list-arrow-${index}`,
		)[0];

		for (let i = 0; i < dropListAll.length; i++) {
			if (i !== index) {
				dropListAll[i].classList.add('hidden');
				listArrowAll[i].classList.remove('reverse-arrow-rotated');
			}
		}

		dropList.classList.toggle('hidden');
		listArrow.classList.toggle('reverse-arrow-rotated');
	};

	const selectOption = (option) => {
		// Pass whole option object
		setSelectedValue(option);
		setIsOpen(false);
	};

	const displayValue = selectedValue ? selectedValue.value : dropLabel; // Display value or label

	return (
		<div id="multi-dropdown" className="relative z-10">
			{' '}
			{/* Removed unnecessary name attribute */}
			<div
				className="msd-box subtitle-16 h-[36px] flex items-center px-3 cursor-pointer"
				style={{ minWidth: '20rem' }}
				onClick={() => setIsOpen(!isOpen)}>
				<p className="mr-4 msd-truncate w-full">{displayValue}</p>{' '}
				{/* truncate long values */}
				<div className="flex items-center">
					{selectedValue ? (
						<Image
							src="/images/close_red.svg"
							onClick={(e) => {
								e.stopPropagation();
								setSelectedValue(null); // Clear to null
							}}
							width={'15'}
							height={'15'}
							alt="close"
							className="mr-1"
						/>
					) : (
						<div className="w-[15px]"></div>
					)}
					<Image
						src="/images/icons/down-arrow.svg"
						width={'15'}
						height={'15'}
						className={`reverse-arrow ${isOpen ? 'reverse-arrow-rotated' : ''}`}
						alt="arrow"
					/>
				</div>
			</div>
			{isOpen && (
				<div className="msd-box mt-2 multi-drop-options absolute w-full max-h-80 overflow-y-auto default-scroll-5">
					{Object.entries(optionsList).map((list, i) => (
						<section key={list[0]} className="mt-2">
							<div
								className="flex items-center justify-between py-4 px-3 cursor-pointer"
								onClick={() => openList(i)}>
								<h3 style={{ textTransform: 'capitalize' }}>{list[0]}</h3>
								<Image
									width={'15'}
									height={'15'}
									alt="arrow"
									className={`msd-list-arrow msd-list-arrow-${i} reverse-arrow`}
									src="/images/icons/down-arrow.svg"
								/>
							</div>
							<ul
								className={`msd-list msd-list-${i} hidden max-h-40 overflow-y-auto default-scroll-5`}>
								{list[1].map((option) => (
									<li
										key={option.value}
										className="p-3 cursor-pointer"
										onClick={() => selectOption(option)}>
										{' '}
										{/* Pass the whole option */}
										{option.value}
									</li>
								))}
							</ul>
						</section>
					))}
				</div>
			)}
		</div>
	);
};

export default MultiSelectDropdown;
