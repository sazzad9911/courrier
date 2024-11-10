"use client";

import React, { useEffect, useState } from "react";
import SelectForPricing from "../../components/SelectGroup/SelectForPricing";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { getApi, postApi } from "../../../functions/API";

import toast from "react-hot-toast";

export default function Pricing() {
  const [districts, setDistricts] = useState<string[]>([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [category, setCategory] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [weight, setWeight] = useState("");
  const [pickUp, setPickUp] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await getApi("/apis/district");
        setDistricts(response.data);
      } catch (error) {
        console.log(error.response.data.error);
        toast.error(`${error.response.data.error}`);
      }
    };

    fetchDistricts();
  }, []);

  // Trigger API call when form is submitted and dependencies change
  const handleSubmit = async () => {
    if (!from || !to || !category || !serviceType) {
      toast("Please fill in all required fields.");
      return;
    }

    const data = {
      from,
      to,
      category,
      serviceType,
      weight: weight || null,
      pickUp,
    };
    try {
      const response = await postApi("/apis/user/pricing", data);
      setResponseData(response);
      // console.log("API Response:", response);
      // Display response in UI if needed
    } catch (error) {
      toast.error(`${error.response.data.error}`);
    }
  };

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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="p-6.5">
                {/* From and To Selection */}
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <SelectForPricing
                    label="From"
                    selectedValue={from}
                    onSelect={setFrom}
                    options={districts}
                  />
                  <SelectForPricing
                    label="To"
                    selectedValue={to}
                    onSelect={setTo}
                    options={districts}
                  />
                </div>

                {/* Category and Service Type Selection */}
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <SelectForPricing
                    label="Category"
                    selectedValue={category}
                    onSelect={setCategory}
                    options={["Regular", "Express"]}
                  />
                  <SelectForPricing
                    label="Service Type"
                    selectedValue={serviceType}
                    onSelect={setServiceType}
                    options={["Home Delivery", "Point Delivery"]}
                  />
                </div>

                {/* Weight Input */}
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Weight
                    </label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="Type your weight"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <SelectForPricing
                    label="Pick Up"
                    selectedValue={pickUp}
                    onSelect={setPickUp}
                    options={["Home", "Hub"]}
                  />
                </div>
                {responseData && (
                  <div className="flex justify-center">
                    <div className="lg:w-[4vw] lg:h-[1.5vw] w-[14vw] h-[8vw] bg-red-500 text-yellow-50 rounded-lg flex justify-center items-center">
                      {responseData.data}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-[100px] flex justify-center items-center h-[100px] bg-gray-200 rounded-full mx-auto my-5"
                >
                  Calculate Price
                </button>
              </div>
            </form>
            {/* <div className="">
              <div className="w-[100px] flex justify-center items-center h-[100px] bg-gray-200 rounded-full mx-auto my-5">
                50 BDT
              </div>
            </div> */}
            <CheckBox text="১% ক্যাশ অন ডেলিভারি ও রিস্ক ম্যানেজমেন্ট চার্জ প্রযোজ্য" />
            <CheckBox text="পার্সেল সাইজের কারণে ডেলিভারি মাশুল পরিবর্তিত হতে পারে" />
            <CheckBox text="উক্ত চার্জসমূহ ভ্যাট ও ট্যাক্স ব্যাতিত" />
            <CheckBox text="অনাকাঙ্ক্ষিত কারণবশত ডেলিভারি সময়ের পরিবর্তন হতে পারে" />
            <div className="mb-10"></div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
const CheckBox = ({ text }: { text: string }) => {
  return (
    <div className="px-6.5 flex gap-2 items-center py-2">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="20" height="20" fill="url(#pattern0_4844_270)" />
        <defs>
          <pattern
            id="pattern0_4844_270"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_4844_270" transform="scale(0.0111111)" />
          </pattern>
          <image
            id="image0_4844_270"
            width="90"
            height="90"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <p>{text}</p>
    </div>
  );
};
