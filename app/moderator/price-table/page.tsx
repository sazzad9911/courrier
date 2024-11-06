import React from "react";
import AdminLayout from "../../components/Layouts/AdminLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Link from "next/link";

export default function PriceTable() {
  return (
    <AdminLayout>
      <Breadcrumb pageName="Price Table" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-9 my-8 mx-6">
          {/* <!-- Sign In Form --> */}
          <div className=" md:col-span-2 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Delivery Costs
              </h3>
            </div>
            <div className="px-6.5 py-2">
              <div className="font-medium text-lg my-2">
                Same Division: <span className="text-primary">100 BDT</span>
              </div>
              <div className="font-medium text-lg my-2">
                One Division To Another:{" "}
                <span className="text-primary">130 BDT</span>
              </div>
              <div className="font-medium text-lg my-2">
                Weight: <span className="text-primary">20 BDT/Kg</span>
              </div>
              <div className="font-medium text-lg my-2">
                Regular Delivery (24H):{" "}
                <span className="text-primary">10 BDT</span>
              </div>
              <div className="font-medium text-lg my-2">
                Express Delivery (8H):{" "}
                <span className="text-primary">10 BDT</span>
              </div>
              <div className="font-medium text-lg my-2">
                Home Delivery : <span className="text-primary">30 BDT</span>
              </div>
              <div className="font-medium text-lg my-2">
                Point Delivery : <span className="text-primary">30 BDT</span>
              </div>
              <div className="font-medium text-lg my-2">
                Pick & Drop : <span className="text-primary">30 BDT</span>
              </div>
            </div>
          </div>

          {/* <!-- Sign Up Form --> */}
          <div className="rounded-sm border md:col-span-3 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Update Price
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Same Division
                    </label>
                    <input
                      type="number"
                      placeholder="Enter same division price"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Another Division
                    </label>
                    <input
                      type="number"
                      placeholder="Enter another division price"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Weight/KG
                    </label>
                    <input
                      type="number"
                      placeholder="Enter per kg weight price"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Pick & Drop
                    </label>
                    <input
                      type="number"
                      placeholder="Enter pick & drop price"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Regular Delivery
                    </label>
                    <input
                      type="number"
                      placeholder="Enter regular delivery price"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Express Delivery
                    </label>
                    <input
                      type="number"
                      placeholder="Enter express delivery price"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Home Delivery
                    </label>
                    <input
                      type="number"
                      placeholder="Enter home delivery price"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Point Delivery
                    </label>
                    <input
                      type="number"
                      placeholder="Enter point delivery price"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-black hover:bg-opacity-90">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
