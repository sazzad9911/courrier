"use client";
import { useState, useEffect } from "react";
import ResponsivePagination from "react-responsive-pagination";
import Image from "next/image";
import { getApi } from "../../../functions/API";
import toast from "react-hot-toast";
import Loader from "../common/Loader";

const MerchantTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [merchants, setMerchants] = useState([]);
  const itemsPerPage = 10;

  const fetchRiderList = async () => {
    try {
      const response = await getApi("/apis/admin/merchant-list");
      setMerchants(response.data);
    } catch (error) {
      toast(`${error.response.data.error.message}`);
    }
  };
  useEffect(() => {
    fetchRiderList();
  }, []);

  const totalPages = Math.ceil(merchants.length / itemsPerPage);

  // Get the items for the current page
  const currentData = merchants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  if (!merchants) {
    return <p className="text-center my-6">No data found</p>;
  }
  if (merchants?.length <= 0) {
    return <Loader></Loader>;
  }

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
            {currentData.map((merchant, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5  dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {key + 1}{" "}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 flex items-center gap-4  dark:border-strokedark xl:pl-11">
                  {merchant.image ? (
                    <Image
                      src={merchant.image}
                      width={45}
                      height={45}
                      className="rounded-full"
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                      alt="profile"
                    />
                  ) : (
                    <Image
                      src={"/images/user/user.png"}
                      width={45}
                      height={45}
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                      alt="profile"
                    />
                  )}
                  <div>
                    <h5 className="font-medium text-black dark:text-white">
                      {merchant.name}
                    </h5>
                    <p>{merchant.businessName} </p>
                  </div>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">{merchant.phone}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white">
                    {merchant.address}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p>{merchant.balance} </p>
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
    </div>
  );
};

export default MerchantTable;
