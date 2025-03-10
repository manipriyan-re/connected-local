import React, { useState, useRef, useEffect } from 'react';
import ArrowDownIcon from '../../../../public/images/icons/down-arrow.svg';
import X from '../../../../public/images/icons/clear-x.svg';
import SearchIcon from '../../../../public/images/icons/search.svg';
import AddIcon from '../../../../public/images/icons/Add_Symbol.svg';
import './dropdown.scss';
import Image from 'next/image';

const DropdownWhiteBackground = ({
  options = [],
  label,
  searchable = true,
  searchPlaceholder = 'Search',
  defaultOption,
  multiSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    multiSelect ? defaultOption || [] : defaultOption || null
  );
  const [searchTerm, setSearchTerm] = useState('');

  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle item selection
  const handleSelect = (option) => {
    if (multiSelect) {
      setSelectedOptions((prev) => {
        const selectedArray = Array.isArray(prev) ? prev : [];
        const alreadySelected = selectedArray.some(
          (item) => item.value === option.value
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
  };

  // Remove selected option in multi-select mode
  const handleRemoveOption = (option) => {
    setSelectedOptions((prev) =>
      prev.filter((item) => item.value !== option.value)
    );
  };

  // Filter options based on search term
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render selected options
  const renderSelectedOptions = () => {
    if (multiSelect) {
      return (
        <div className="flex flex-wrap gap-1">
          {selectedOptions.length > 0
            ? selectedOptions.map((option) => (
                <span
                  key={option.value}
                  className="flex items-center px-2 py-1 rounded text-xs"
                >
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
              ))
            : 'Select options'}
        </div>
      );
    }

    if (selectedOptions) {
      return (
        <span className="flex items-center">
          {selectedOptions.label}
          {selectedOptions?.icon && (
            <Image
              src={selectedOptions?.icon}
              alt="icon"
              width={16}
              height={16}
              className="ml-1"
            />
          )}
        </span>
      );
    }

    return 'Select an option';
  };

  return (
    <div className="relative-dropdown dropdown_container_white" ref={dropdownRef}>
      {/* Label */}
      {label && <label className="block text-sm font-medium mb-2">{label}</label>}

      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown_container_white w-max selected_option_button flex justify-between items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Image src={AddIcon} alt="icon" width={16} height={16} className="ml-1" />
        <span className="flex items-center gap-2">{renderSelectedOptions()}</span>
        <Image src={ArrowDownIcon} alt="icon" width={16} height={16} className="ml-1" />
      </button>

      {/* Dropdown options */}
      {isOpen && (
        <div className="absolute-dropdown mt-2 w-full bg-white shadow-lg rounded-md border border-gray-200 z-10">
          {/* Search input */}
          {searchable && (
            <div className="relative w-full">
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
                className="w-full px-4 py-2 text-sm text-[var(--text-color)] [&::placeholder]:text-[var(--text-color-header)] bg-[var(--gradient-color-1)] border-2 border-gray-200 focus:outline-none pl-10"
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
                className={`px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-[var(--color-2)] ${
                  multiSelect &&
                  Array.isArray(selectedOptions) &&
                  selectedOptions.some((item) => item.value === option.value)
                    ? 'bg-blue-100'
                    : ''
                }`}
              >
                {option.label}
              </li>
            ))}
            {filteredOptions.length === 0 && (
              <li className="px-4 py-2 text-sm text-gray-500">No options found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownWhiteBackground;
