"use client";
import React from "react";

interface SelectGroupOneProps {
  label: string;
  selectedValue: string;
  onSelect: (value: string) => void;
  options: string[];
}

const SelectForDistrict: React.FC<SelectGroupOneProps> = ({
  label,
  selectedValue,
  onSelect,
  options,
}) => {
  return (
    <div className="mb-4.5">
      
      <div className="relative z-20 bg-transparent dark:bg-form-input">
        <select
          value={selectedValue}
          onChange={(e) => onSelect(e.target.value)}
          className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        >
          <option value="" disabled>
            Select your {label.toLowerCase()}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
          {/* Dropdown Arrow SVG */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SelectForDistrict;
