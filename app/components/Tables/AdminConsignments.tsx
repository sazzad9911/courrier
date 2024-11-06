"use client";
import { useState } from "react";
import { Package } from "../../types/package";
import ResponsivePagination from "react-responsive-pagination";
import { useRouter } from "next/navigation";

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

const AdminConsignmentsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [sort, setSort] = useState("all");
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full mb-2 overflow-x-auto">
        <div className="mb-4 flex items-center gap-4">
          <div
            onClick={() => setSort("all")}
            className={`w-[120px] h-[40px] flex justify-center cursor-pointer items-center border text-black-2 hover:opacity-80 border-primary rounded-3xl ${
              sort === "all" ? "bg-primary" : ""
            }`}
          >
            All
          </div>
          <div
            onClick={() => setSort("pending")}
            className={`w-[120px] h-[40px] flex justify-center cursor-pointer items-center border text-black-2 hover:opacity-80 border-primary rounded-3xl ${
              sort === "pending" ? "bg-primary" : ""
            }`}
          >
            Pending
          </div>
          <div
            onClick={() => setSort("accepted")}
            className={`w-[120px] h-[40px] flex justify-center cursor-pointer items-center border text-black-2 hover:opacity-80 border-primary rounded-3xl ${
              sort === "accepted" ? "bg-primary" : ""
            }`}
          >
            Accepted
          </div>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Customer Name & Payment
              </th>
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Id & Charge
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Date
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Status
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
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                  <p className="text-sm">${packageItem.price}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5  dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                  <p className="text-sm">${packageItem.price}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.invoiceDate}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      packageItem.status === "Paid"
                        ? "bg-success text-success"
                        : packageItem.status === "Unpaid"
                        ? "bg-danger text-danger"
                        : "bg-warning text-warning"
                    }`}
                  >
                    {packageItem.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button
                      onClick={() =>
                        router.push("/moderator/consignments/54352")
                      }
                      className="hover:text-primary"
                    >
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                          fill=""
                        />
                        <path
                          d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <button className="hover:text-primary">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 16.3125C4.96125 16.3125 1.6875 13.0387 1.6875 9C1.6875 4.96125 4.96125 1.6875 9 1.6875C13.0387 1.6875 16.3125 4.96125 16.3125 9C16.3125 13.0387 13.0387 16.3125 9 16.3125ZM12.3531 6.86756C12.4903 6.73031 12.4903 6.507 12.3531 6.36975L11.6061 5.62331C11.4688 5.48606 11.2455 5.48606 11.1082 5.62331L8.99269 7.73888L6.87712 5.62331C6.73987 5.48606 6.51656 5.48606 6.37931 5.62331L5.63231 6.36975C5.49506 6.507 5.49506 6.73031 5.63231 6.86756L7.74844 8.98369L5.63231 11.0987C5.49506 11.2359 5.49506 11.4592 5.63231 11.5965L6.37931 12.3435C6.51656 12.4808 6.73987 12.4808 6.87712 12.3435L8.99269 10.2274L11.1082 12.3435C11.2455 12.4808 11.4688 12.4808 11.6061 12.3435L12.3531 11.5965C12.4903 11.4592 12.4903 11.2359 12.3531 11.0987L10.2369 8.98369L12.3531 6.86756Z"
                          className="fill-current"
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

export default AdminConsignmentsTable;
