'use client';

import React, { useState, useRef, useEffect } from 'react';
import ArrowDownIcon from '../../../../public/images/icons/down-arrow.svg';
import X from '../../../../public/images/icons/clear-x.svg';
import SearchIcon from '../../../../public/images/icons/search.svg';
import './dropdown.scss';
import Image from 'next/image';

const Dropdown = ({
	options = [],
	label,
	searchable = true,
	searchPlaceholder = 'Search', // New prop for custom placeholder
	defaultOption,
	onOptionSelect,
	multiSelect,
	Model = 'Select an option',
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState(
		multiSelect ? defaultOption || [] : defaultOption || null,
	);
	const [searchTerm, setSearchTerm] = useState('');

	const dropdownRef = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleSelect = (option) => {
		if (multiSelect) {
			setSelectedOptions((prev) => {
				const selectedArray = Array.isArray(prev) ? prev : [];
				const alreadySelected = selectedArray.some(
					(item) => item.value === option.value,
				);

				return alreadySelected
					? selectedArray.filter((item) => item.value !== option.value)
					: [...selectedArray, option];
			});
		} else {
			setSelectedOptions(option);
			setIsOpen(false);
		}
		setSearchTerm('');
		if (onOptionSelect) {
			onOptionSelect(option);
		}
		// Reset search term after selection
	};

	const handleRemoveOption = (option) => {
		setSelectedOptions((prev) =>
			prev.filter((item) => item.value !== option.value),
		);
	};

	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const renderSelectedOptions = () => {
		if (multiSelect) {
			if (!selectedOptions.length) {
				return 'Select options';
			}
			return (
				<div className="flex flex-wrap gap-1">
					{selectedOptions.map((option) => (
						<span
							key={option.value}
							className="flex items-center px-2 py-1 rounded-lg text-xs">
							{option.label}
							<Image
								src={X}
								alt="Remove"
								width={12}
								height={12}
								className="ml-1 cursor-pointer"
								onClick={(e) => {
									e.stopPropagation();
									handleRemoveOption(option);
								}}
							/>
						</span>
					))}
				</div>
			);
		}

		if (!selectedOptions) {
			return Model;
		}

		return (
			<span className="flex items-center">
				{selectedOptions?.icon && (
					<Image
						src={selectedOptions.icon}
						alt="icon"
						width={16}
						height={16}
						className="mr-3"
					/>
				)}
				{selectedOptions.label}
			</span>
		);
	};

	return (
		<div
			className="relative-dropdown dropdown_container text-sm"
			ref={dropdownRef}>
			{/* Label */}
			{label && <label className="block font-medium mb-2">{label}</label>}

			{/* Dropdown button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="size-full selected_option_button flex items-center px-4 py-2 rounded-lg"
				style={{ justifyContent: 'space-between', fontSize: '14px' }} //inline style to override existing style
			>
				<span className="flex items-center gap-2">
					{renderSelectedOptions()}
				</span>
				<Image
					src={ArrowDownIcon}
					alt="icon"
					width={16}
					height={16}
					className="ml-1"
				/>
			</button>

			{/* Dropdown options */}
			{isOpen && (
				<div className="absolute-dropdown mt-2 w-full shadow-lg rounded-lg z-10">
					{/* Search input */}
					{searchable && (
						<div className="relative rounded-t-lg w-full pb-1">
							<Image
								src={SearchIcon}
								alt="Search"
								width={20}
								height={20}
								className="absolute left-3 top-1/2 -translate-y-1/2"
							/>
							<input
								type="text"
								placeholder={searchPlaceholder}
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full px-4 py-2 text-[var(--text-color)] [&::placeholder]:text-[var(--text-color-header)] bg-[var(--gradient-color-1)] focus:outline-none pl-10"
								style={{
									background: 'var(--gradient-color-1)',
									color: 'var(--text-color)',
								}}
							/>
						</div>
					)}

					{/* Options */}
					<ul>
						{filteredOptions.map((option) => (
							<li
								key={option.value}
								onClick={() => handleSelect(option)}
								className={`px-4 py-2 text-sm cursor-pointer hover:bg-[var(--color-2)] ${
									multiSelect &&
									Array.isArray(selectedOptions) &&
									selectedOptions.some((item) => item.value === option.value)
										? 'bg-blue-100'
										: ''
								}
								${selectedOptions.value === option.value ? 'list-selected' : ''}
								`}>
								{option.label}
							</li>
						))}
						{filteredOptions.length === 0 && (
							<li className="px-4 py-2 text-sm text-gray-500">
								No options found
							</li>
						)}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
