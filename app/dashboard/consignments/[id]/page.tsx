"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
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
import { getApi } from "../../../../functions/API";
import toast from "react-hot-toast";
import Link from "next/link";
import Loader from "../../../components/common/Loader";

export default function Parcel() {
  const { id } = useParams();
  const [data, setData] = useState();
  // console.log(data);
  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await getApi(`/apis/user/add-parcel?trackingId=${id}`);

        setData(response.data);
      } catch (error) {
        console.log(error.response.data.error);
        toast.error(`${error.response.data.error}`);
      }
    };

    fetchPackageData();
  }, []);
  if (!data) {
    return <Loader></Loader>;
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName={`Parcel Id: ${id}`} />
      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark grid md:grid-cols-2 grid-cols-1">
            <div>
              <h3 className="font-medium text-black dark:text-white">
                Parcel Information
              </h3>
              <p className="font-semibold text-lg my-1">
                Invoice:{" "}
                <span className="font-thin">{data?.invoiceNumber}</span>
              </p>
              <p className="font-semibold text-lg my-1">
                Weight: <span className="font-thin">{data?.weight} Kg</span>
              </p>
              <p className="font-semibold text-lg my-1">
                COD: <span className="font-thin">{data?.amount} BDT</span>
              </p>
              <p className="font-semibold text-lg my-1">
                Status:{" "}
                <span className="font-thin text-yellow-600">
                  {data?.status}
                </span>
              </p>
              <Link
                href="/pages/track-parcel"
                className="bg-green-600 text-white px-3 py-1 rounded-sm my-3"
              >
                Track Now
              </Link>
            </div>
            <div>
              <h3 className="font-medium text-black dark:text-white">
                Receiver Information
              </h3>
              <p className="font-semibold text-lg my-1">
                Name: <span className="font-thin">{data?.name}</span>
              </p>
              <p className="font-semibold text-lg my-1">
                Address: <span className="font-thin">{data?.address}</span>
              </p>
              {/* <p className="font-semibold text-lg my-1">
                Police Station:{" "}
                <span className="font-thin">Farmgate, Dhaka</span>
              </p> */}
              <p className="font-semibold text-lg my-1">
                Phone Number:{" "}
                <span className="font-thin ">{data?.phoneNumber}</span>
              </p>
              <button className="bg-red-600 text-white px-3 py-1 rounded-sm my-3">
                Cancel Now
              </button>
            </div>
          </div>
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <div className="text-center font-semibold text-lg my-4">Note</div>
            <div className="text-center max-w-[80%] mx-auto">{data?.note}</div>
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
    </DefaultLayout>
  );
}
