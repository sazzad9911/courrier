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

const MerchantTable = () => {
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
                Name & Business
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Phone
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Address
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Balance
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
                  <div>
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.name}
                    </h5>
                    <p>Scientistx Tech</p>
                  </div>
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
                  <p>12.77 BDT</p>
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

export default MerchantTable;
