"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import {
  FaBoxOpen,
  FaBusinessTime,
  FaCheckDouble,
  FaPhone,
  FaTruck,
} from "react-icons/fa";
import Image from "next/image";
import { LuPackageOpen } from "react-icons/lu";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import SelectGroupOne from "../../../components/SelectGroup/SelectGroupOne";

export default function Parcel() {
  const { id } = useParams();
  const [status, setStatus] = useState("packaging");
  return (
    <AdminLayout>
      <Breadcrumb pageName={`Parcel Id: ${id}`} />
      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark grid md:grid-cols-2 grid-cols-1">
            <div>
              <h3 className="font-medium text-black dark:text-white">
                Parcel Information
              </h3>
              <p className="font-semibold text-lg my-1">
                Invoice: <span className="font-thin">N/A</span>
              </p>
              <p className="font-semibold text-lg my-1">
                Weight: <span className="font-thin">1 Kg</span>
              </p>
              <p className="font-semibold text-lg my-1">
                COD: <span className="font-thin">2300 BDT</span>
              </p>
              <p className="font-semibold text-lg my-1">
                Status:{" "}
                <span className="font-thin text-yellow-600">PENDING</span>
              </p>
              {status === "pending" ? (
                <button className="bg-green-600 text-white px-3 py-1 rounded-sm my-3">
                  Mark as Processing
                </button>
              ) : status === "processing" ? (
                <button className="bg-green-600 text-white px-3 py-1 rounded-sm my-3">
                  Mark as Packaging
                </button>
              ) : status === "packaging" ? (
                <div className="w-10/12 flex flex-col gap-2">
                  <label>Select Delivery Person</label>
                  <SelectGroupOne />
                </div>
              ) : (
                <></>
              )}
            </div>
            <div>
              <h3 className="font-medium text-black dark:text-white">
                Receiver Information
              </h3>
              <p className="font-semibold text-lg my-1">
                Name: <span className="font-thin">Rasel Shekh</span>
              </p>
              <p className="font-semibold text-lg my-1">
                Address:{" "}
                <span className="font-thin">Kolabagan, Dhaka, Bangladesh</span>
              </p>
              <p className="font-semibold text-lg my-1">
                Police Station:{" "}
                <span className="font-thin">Farmgate, Dhaka</span>
              </p>
              <p className="font-semibold text-lg my-1">
                Phone Number: <span className="font-thin ">+8801633423423</span>
              </p>
              {status === "pending" ? (
                <button className="bg-red-600 text-white px-3 py-1 rounded-sm my-3">
                  Cancel Now
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <div className="text-center font-semibold text-lg my-4">Note</div>
            <div className="text-center max-w-[80%] mx-auto">
              ১% ক্যাশ অন ডেলিভারি এবং রিস্ক ম্যানেজমেন্ট চার্জ প্রযোজ্য হবে।
              অর্থাৎ, প্রোডাক্টের মূল্য + ডেলিভারি চার্জের উপর অতিরিক্ত ১% ক্যাশ
              অন ডেলিভারি এবং রিস্ক ম্যানেজমেন্ট ফি যোগ হবে, যা ক্রেতাকে প্রদান
              করতে হবে।
            </div>
          </div>
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark flex justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex justify-center items-center bg-yellow-300 rounded-full">
                <FaBusinessTime
                  size={30}
                  className="text-black"
                ></FaBusinessTime>
              </div>
              <p>Processing</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex justify-center items-center bg-yellow-300 rounded-full">
                <FaBoxOpen size={30} className="text-black"></FaBoxOpen>
              </div>
              <p>Packaging</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex justify-center items-center bg-yellow-300 rounded-full">
                <FaTruck size={30} className="text-black"></FaTruck>
              </div>
              <p>Shifting</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex justify-center items-center bg-yellow-300 rounded-full">
                <FaCheckDouble size={30} className="text-black"></FaCheckDouble>
              </div>
              <p>Delivered</p>
            </div>
          </div>
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Assigned To
            </h3>
            <div className="flex my-2 gap-4">
              <Image
                height={50}
                width={50}
                alt="image"
                src={"/images/user/user.png"}
              />
              <div>
                <p className="font-bold">MD Rasel Ali</p>
                <div className="flex items-center  gap-2">
                  <FaPhone />
                  01834324543
                </div>
              </div>
              <button
                onClick={() => (window.location.href = `tel:0173233223`)}
                className="bg-blue-600 text-white  px-6 rounded-md h-[40px]"
              >
                Call
              </button>
            </div>
          </div>
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Tracking Update
            </h3>
            <div className="flex items-center gap-4 my-3">
              <LuPackageOpen size={30} />
              <div>
                <div className="font-bold">Package is received</div>
                <div>11 Jun 2024 at 12:22 am</div>
              </div>
            </div>
            <div className="flex items-center gap-4 my-3">
              <LuPackageOpen size={30} />
              <div>
                <div className="font-bold">Package is received</div>
                <div>11 Jun 2024 at 12:22 am</div>
              </div>
            </div>
            <div className="flex items-center gap-4 my-3">
              <LuPackageOpen size={30} />
              <div>
                <div className="font-bold">Package is received</div>
                <div>11 Jun 2024 at 12:22 am</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
