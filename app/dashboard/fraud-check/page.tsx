"use client";

import React, { FormEvent, useState } from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import toast from "react-hot-toast";
import { postApi } from "../../../functions/API";
export default function FraudCheck() {
  const [search, setSearch] = useState("");
  const [report, setReport] = useState(null);

  const myPromise = () => {
    return postApi("/apis/user/fraud-check", {
      number: search,
    });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Check if search value is empty or only contains whitespace
    if (!search.trim()) {
      toast.error("Please enter a phone number to search.");
      return;
    }

    toast.promise(myPromise(), {
      loading: "Checking...",
      success: (data) => {
        setReport(data);
        console.log("Report received:", data);
        return "Check completed successfully!";
      },
      error: (err) => {
        console.error("Error fetching data:", err);
        return "An error occurred while checking.";
      },
    });
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Fraud Check" />

      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <form onSubmit={onSubmit}>
          <div className="w-full flex rounded-lg border-[1.5px] overflow-hidden  h-12  text-black  focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
            <input
              className="h-full w-full outline-none transition mx-3"
              type="text"
              placeholder="Search by phone number"
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
            />
            <button className="w-[150px] bg-primary h-full">Search</button>
          </div>
        </form>
        <div className="flex flex-wrap justify-center items-center my-10">
          {report ? (
            <div>
              {report.data?.message ? (
                <p>{report.data.message}</p>
              ) : Array.isArray(report.data) && report.data.length > 0 ? (
                report.data.map((item, index) => (
                  <div key={index} className=" flex-row gap-3 flex">
                    <p>Name: {item.name}</p>
                    <p>Phone: {item.phone}</p>
                    <p>Address: {item.address}</p>
                    <p>Business Name: {item.businessName}</p>
                    <p>
                      Parceles :{" "}
                      {item.Addparcel.map((data, index) => (
                        <div
                          key={index}
                          className=" flex flex-row border-b border-red-200 gap-3"
                        >
                          <p>Amount {data.amount} </p>
                          <p>Weight {data.weight} </p>
                          <p>category {data.category} </p>
                          <p>serviceType {data.serviceType} </p>
                        </div>
                      ))}
                    </p>
                    {/* Add more fields as needed */}
                  </div>
                ))
              ) : (
                <p>No data available</p>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <img
                className="w-1/2"
                src="/images/cover/fraud.png"
                alt="Fraud Check Cover"
              />
              <p className="text-center mt-4">Check fraud search by number</p>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}
