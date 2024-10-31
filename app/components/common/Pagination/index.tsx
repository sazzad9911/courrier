import React from "react";

export default function Pagination({numberOfPages=1}:{numberOfPages:number}) {
  return (
    <div className="my-3 flex gap-1">

      <div className="border border-gray-300 w-7 h-7 flex justify-center items-center rounded-sm cursor-pointer bg-white hover:bg-yellow-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div className="border border-gray-300 w-7 h-7 flex justify-center items-center rounded-sm cursor-pointer bg-white hover:bg-yellow-50">
        1
      </div>
      <div className="border border-gray-300 w-7 h-7 flex justify-center items-center rounded-sm cursor-pointer bg-white hover:bg-yellow-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}
