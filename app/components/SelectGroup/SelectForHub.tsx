"use client";
import React from "react";

interface SelectGroupOneProps {
  label: string;
  onSelect: (value) => void;
  options: string[];
}

const SelectForHub: React.FC<SelectGroupOneProps> = ({
  label,
  onSelect,
  options,
}) => {



  return (
    <div className="mb-4.5">
      
      <div className="relative z-20 bg-transparent dark:bg-form-input">
        <select
          onChange={(e) => {
            const selectedValue = e.target.value ? JSON.parse(e.target.value) : null;
            onSelect(selectedValue);
          }}
          className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        >
          <option>
            Select your {label.toLowerCase()}
          </option>
          {options?.map((option) => (
            <option key={option?.id} value={JSON.stringify(option)}>
              {option?.name}
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

export default SelectForHub;
