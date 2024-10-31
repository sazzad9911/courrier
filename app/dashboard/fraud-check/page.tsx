import React from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

export default function FraudCheck() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Fraud Check" />

      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="w-full flex rounded-lg border-[1.5px] overflow-hidden  h-12  text-black  focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
          <input
            className="h-full w-full outline-none transition mx-3"
            type="text"
            placeholder="Search by phone number"
          />
          <button className="w-[150px] bg-primary h-full">Search</button>
        </div>
        <div className="flex flex-wrap justify-center items-center my-10">
          <img className="w-1/2" src="/images/cover/fraud.png"></img>
          <p className="text-center w-full">Check fraud search by number</p>
        </div>
      </div>
    </DefaultLayout>
  );
}
