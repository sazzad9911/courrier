import React from "react";
import SelectGroupOne from "../../components/SelectGroup/SelectGroupOne";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../components/Layouts/DefaultLayout";

export default function Pricing() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Calculate Price" />
      <div className="">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Information Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      From <span className="text-meta-1">*</span>
                    </label>
                    <SelectGroupOne />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      To <span className="text-meta-1">*</span>
                    </label>
                    <SelectGroupOne />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Category <span className="text-meta-1">*</span>
                    </label>
                    <SelectGroupOne />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Service Type <span className="text-meta-1">*</span>
                    </label>
                    <SelectGroupOne />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Weight
                    </label>
                    <input
                      type="number"
                      placeholder="Type your message"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    ></input>
                  </div>
                </div>
              </div>
            </form>
            <div className="">
              <div className="w-[100px] flex justify-center items-center h-[100px] bg-gray-200 rounded-full mx-auto my-5">
                50 BDT
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
