"use client";
import { useEffect, useState, useRef } from "react";
import "./dropdown.scss";
import Image from "next/image";
import ArrowDownIcon from "../../../../public/images/icons/down-arrow.svg";
import X from "../../../../public/images/icons/clear-x.svg";

export default function Dropdown({
    options,
    onOptionSelect,
    showFlag,
    defaultOption,
    multiSelect = false,
    showSearchOption = true
}) {
    const [inputValue, setInputValue] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedSingleOption, setSelectedSingleOption] = useState(null);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        if (defaultOption) {
            if (multiSelect) {
                if (Array.isArray(defaultOption)) {
                    setSelectedOptions(defaultOption);
                } else {
                    console.warn("defaultOption for multiSelect must be an array.");
                }
            } else {
                setSelectedSingleOption(defaultOption);
                setSelectedOptions([defaultOption]);
            }
        }
    }, [defaultOption,multiSelect]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    function handleOptionClick(option) {
        if (multiSelect) {
            const isSelected = selectedOptions.some((selected) => selected.value === option.value);
            if (isSelected) {
                setSelectedOptions(selectedOptions.filter((selected) => selected.value !== option.value));
            } else {
                setSelectedOptions([...selectedOptions, option]);
            }
        } else {
            setSelectedSingleOption(option);
            setSelectedOptions([option]);
            setOpen(false);
        }
    }

    useEffect(() => {
        if (onOptionSelect) {
            if (multiSelect) {
                onOptionSelect(selectedOptions);
            } else {
                onOptionSelect(selectedSingleOption);
            }
        }
    }, [selectedOptions, selectedSingleOption, onOptionSelect, multiSelect]);

    function renderSelectedOptions() {
        if (multiSelect) {
            if (selectedOptions.length > 0) {
                return (
                    <div className="flex items-center gap-2 flex-wrap">
                        {selectedOptions.map((option) => (
                            <div key={option.value} className="chip">
                                {showFlag && option.img}
                                {option.label}
                                <span
                                    className="remove-chip"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleOptionClick(option);
                                    }}
                                >
                                    <Image src={X} alt="Remove" width={12} height={12} />
                                </span>
                            </div>
                        ))}
                    </div>
                );
            }
            return "Select options";
        }
        if (selectedSingleOption) {
            return (
                <div className="flex items-center gap-2">
                    {showFlag && selectedSingleOption.img}
                    {selectedSingleOption.label}
                </div>
            );
        }
        return "Select option";
    }

    return (
        <div className="dropdown .dropdown_container" ref={dropdownRef}>
            <div onClick={() => setOpen(!open)} className="selected">
                {renderSelectedOptions()}
                <Image
                    src={ArrowDownIcon}
                    width={15}
                    height={15}
                    alt="down-arrow"
                    className={`icon ${open ? "rotate-180" : ""}`}
                />
            </div>

            {open && (
                <ul className="dropdown-list no-scrollbar">
                    {showSearchOption && (
                        <div className="search-bar">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                                placeholder="Search"
                            />
                        </div>
                    )}

                    {options.map((option) => {
                        const isVisible = option.label.toLowerCase().includes(inputValue);
                        const isActive = selectedOptions.some((selected) => selected.value === option.value);

                        return (
                            isVisible && (
                                <li
                                    key={option.value}
                                    className={`dropdown-item ${isActive ? "active" : ""}`}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    <div className="flex gap-2">
                                        {showFlag && option.img}
                                        {option.label}
                                    </div>
                                </li>
                            )
                        );
                    })}
                </ul>
            )}
        </div>
    );
}