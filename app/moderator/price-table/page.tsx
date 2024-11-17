"use client";

import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Layouts/AdminLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { getApi, putApi } from "../../../functions/API";
import toast from "react-hot-toast";

interface Pricing {
  dhakadhaka: number;
  dhakaalloverbangladesh: number;
  weight: number;
  regular: number;
  express: number;
  homeDelivery: number;
  pointDelivery: number;
  pickAnddrop: number;
  pickUpHome: number;
}

export default function PriceTable() {
  const [prices, setPrices] = useState<Pricing | null>(null);
  const [formData, setFormData] = useState({
    sameDivision: undefined,
    anotherDivision: undefined,
    weight: undefined,
    pickAndDrop: undefined,
    regularDelivery: undefined,
    expressDelivery: undefined,
    homeDelivery: undefined,
    pointDelivery: undefined,
    pickUpHome: undefined,
  });

  const getPrice = async () => {
    try {
      const response = await getApi("/apis/admin/add-pricing");
      setPrices(response.data);
    } catch (error) {
      toast(`${error.response.data.error}`);
    }
  };
  useEffect(() => {
    getPrice();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await putApi("/apis/admin/add-pricing", {
        dhakaToDhaka: formData.sameDivision,
        dhakaAllOverBangladesh: formData.anotherDivision,
        oneKgWeight: formData.weight,
        regular: formData.regularDelivery,
        express: formData.expressDelivery,
        homeDelivery: formData.homeDelivery,
        pointDelivery: formData.pointDelivery,
        pickUpHome: formData.pickUpHome,
        pickUpAndDrop: formData.pickAndDrop,
      });

      toast.success(`${response.data.message}`);
      getPrice();
    } catch (error) {
      toast(`${error.response.date.error}`);
    }
  };

  if (!prices) {
    // Display loading state or placeholder content
    return (
      <AdminLayout>
        <Breadcrumb pageName="Price Table" />
        <div className="text-center py-10">Loading pricing data...</div>
      </AdminLayout>
    );
  }
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
                Same Division:{" "}
                <span className="text-primary">{prices.dhakadhaka} BDT</span>
              </div>
              <div className="font-medium text-lg my-2">
                One Division To Another:{" "}
                <span className="text-primary">
                  {prices.dhakaalloverbangladesh} BDT
                </span>
              </div>
              <div className="font-medium text-lg my-2">
                Weight:{" "}
                <span className="text-primary">{prices.weight} BDT/Kg</span>
              </div>
              <div className="font-medium text-lg my-2">
                Regular Delivery (24H):{" "}
                <span className="text-primary">{prices.regular} BDT</span>
              </div>
              <div className="font-medium text-lg my-2">
                Express Delivery (8H):{" "}
                <span className="text-primary">{prices.express} BDT</span>
              </div>
              <div className="font-medium text-lg my-2">
                Home Delivery :{" "}
                <span className="text-primary">{prices.homeDelivery} BDT</span>
              </div>
              <div className="font-medium text-lg my-2">
                Point Delivery :{" "}
                <span className="text-primary">{prices.pointDelivery} BDT</span>
              </div>
              <div className="font-medium text-lg my-2">
                Pick & Drop :{" "}
                <span className="text-primary">{prices.pickAnddrop} BDT</span>
              </div>
              <div className="font-medium text-lg my-2">
                PickUp Home :{" "}
                <span className="text-primary">{prices.pickUpHome} BDT</span>
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
            <form onSubmit={handleSubmit}>
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
                      value={formData.sameDivision}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sameDivision: Number(e.target.value),
                        })
                      }
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
                      value={formData.anotherDivision}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          anotherDivision: Number(e.target.value),
                        })
                      }
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
                      value={formData.weight}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          weight: Number(e.target.value),
                        })
                      }
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
                      value={formData.pickAndDrop}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pickAndDrop: Number(e.target.value),
                        })
                      }
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
                      value={formData.regularDelivery}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          regularDelivery: Number(e.target.value),
                        })
                      }
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
                      value={formData.expressDelivery}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          expressDelivery: Number(e.target.value),
                        })
                      }
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
                      value={formData.homeDelivery}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          homeDelivery: Number(e.target.value),
                        })
                      }
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
                      value={formData.pointDelivery}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pointDelivery: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Pick-Up Home
                    </label>
                    <input
                      type="number"
                      placeholder="Enter point delivery price"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formData.pickUpHome}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pickUpHome: Number(e.target.value),
                        })
                      }
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
