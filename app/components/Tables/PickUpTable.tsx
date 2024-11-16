"use client";
import { useState, useEffect } from "react";
import ResponsivePagination from "react-responsive-pagination";
import Modal from "../Modals";
import SelectGroupOne from "../SelectGroup/SelectGroupOne";
import toast from "react-hot-toast";
import { getApi } from "../../../functions/API";
import Loader from "../common/Loader";

const PickUpTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [packageData, addPackageData] = useState([]);
  const [sort, setSort] = useState("all");
  const [isModalOpen, setModalOpen] = useState(false);
  const itemsPerPage = 10;
  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await getApi("/apis/admin/all-consignment");
        addPackageData(response.data.result);
      } catch (error) {
        toast.error(`${error.response.data.error}`);
      }
    };

    fetchPackageData();
  }, []);
  // Calculate the total number of pages
  const totalPages = Math.ceil(packageData.length / itemsPerPage);

  // Get the items for the current page
  const currentData = packageData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  if (!packageData) {
    return <p className="text-center my-6">No data found</p>;
  }
  if (packageData?.length <= 0) {
    return <Loader></Loader>;
  }

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
                Phone & Address
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
            {currentData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5  dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                  <p className="text-sm">${packageItem.amount}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5  dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.phoneNumber}
                  </h5>
                  <p className="text-sm">{packageItem.address}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {new Date(packageItem.date).toDateString()}
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
                      onClick={() => setModalOpen(true)}
                      className="hover:text-primary flex items-center gap-1"
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.73999 9.50475C4.74016 7.10029 6.43879 5.0308 8.79705 4.56187C11.1553 4.09295 13.5164 5.35519 14.4364 7.57666C15.3565 9.79815 14.5792 12.3601 12.5799 13.6959C10.5806 15.0316 7.91611 14.769 6.21599 13.0687C5.27083 12.1235 4.7399 10.8415 4.73999 9.50475Z"
                          className="stroke-current"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.26001 9.50468L8.93977 11.1844L12.3 7.82495"
                          className="stroke-current"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Mark as Done
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ResponsivePagination
        total={totalPages}
        current={currentPage}
        onPageChange={setCurrentPage}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Select Rider"
        onAction={() => {}}
      >
        <div className="mt-5">
          <SelectGroupOne />
        </div>
      </Modal>
    </div>
  );
};

export default PickUpTable;
