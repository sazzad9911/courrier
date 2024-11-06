"use client";
import { useRef, useState } from "react";
import { Package } from "../../types/package";
import ResponsivePagination from "react-responsive-pagination";
import { useRouter } from "next/navigation";
import Image from "next/image";

const packageData: Package[] = [
  {
    name: "Free package",
    price: 0.0,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
  },
  {
    name: "Business Package",
    price: 99.0,
    invoiceDate: `Jan 13,2023`,
    status: "Unpaid",
  },
  {
    name: "Standard Package",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Pending",
  },
];

const RiderListTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full mb-2 overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className=" px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                No
              </th>
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Name
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                NID
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Phone
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5  dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">01</h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 flex items-center gap-4  dark:border-strokedark xl:pl-11">
                  <Image
                    height={50}
                    width={50}
                    alt="profile"
                    src={"/images/user/user.png"}
                  />
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.invoiceDate}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <ImageUpload />
                    <button
                      onClick={() => router.push("/moderator/rider/54352")}
                      className="hover:text-primary"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_5110_14)">
                          <path
                            d="M16.9167 4.85454L9.76171 12.0095C9.04921 12.722 6.93419 13.052 6.46169 12.5795C5.98919 12.107 6.31169 9.99201 7.02419 9.27951L14.1867 2.11702C14.3633 1.92431 14.5772 1.76941 14.8154 1.66163C15.0535 1.55386 15.311 1.49544 15.5724 1.48993C15.8337 1.48443 16.0935 1.53194 16.336 1.6296C16.5785 1.72725 16.7987 1.87305 16.9832 2.05815C17.1678 2.24325 17.313 2.46383 17.41 2.70657C17.507 2.94932 17.5538 3.2092 17.5476 3.47054C17.5414 3.73187 17.4822 3.98927 17.3738 4.22713C17.2654 4.46499 17.1099 4.67844 16.9167 4.85454Z"
                            className="stroke-current"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.20679 3.05444H5.45679C4.66113 3.05444 3.89812 3.37051 3.33551 3.93312C2.7729 4.49573 2.45679 5.25879 2.45679 6.05444V13.5544C2.45679 14.3501 2.7729 15.1132 3.33551 15.6757C3.89812 16.2384 4.66113 16.5544 5.45679 16.5544H13.7068C15.3643 16.5544 15.9568 15.2044 15.9568 13.5544V9.80444"
                            className="stroke-current"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_5110_14">
                            <rect
                              width="18"
                              height="18"
                              fill="white"
                              transform="translate(0.956787 0.0544434)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                          fill=""
                        />
                        <path
                          d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                          fill=""
                        />
                        <path
                          d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                          fill=""
                        />
                        <path
                          d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ResponsivePagination
        total={10}
        current={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RiderListTable;


const ImageUpload = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref.current?.click();
  };

  return (
    <div>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        className="w-0 h-0"
        style={{ display: "none" }} // Ensures input is hidden
      />
      <button onClick={handleClick} className="hover:text-primary">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M2.25 11.25C2.25 13.3713 2.25 14.4319 2.90901 15.091C3.56802 15.75 4.62868 15.75 6.75 15.75H11.25C13.3713 15.75 14.4319 15.75 15.091 15.091C15.75 14.4319 15.75 13.3713 15.75 11.25"
            className="stroke-current"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12V2.25M9 2.25L12 5.53125M9 2.25L6 5.53125"
            className="stroke-current"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

