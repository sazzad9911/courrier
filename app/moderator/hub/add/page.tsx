"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import { postApi } from "../../../../functions/API";

const AddHub = () => {
  const router = useRouter();

  // Form data state
  const [formData, setFormData] = useState({
    hubName: "",
    hubNumber: "",
    hubAddress: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postApi("/apis/admin/add-hub", {
        name: formData.hubName,
        phone: formData.hubNumber,
        address: formData.hubAddress,
      });

      toast.success("Hub details added successfully");
      router.replace("/moderator/hub"); // Navigate to the hub list page
    } catch (error) {
      console.error("Failed to add hub details:", error);
      toast.error("Failed to add hub details");
    }
  };

  return (
    <AdminLayout>
      <Breadcrumb pageName="Add Hub" />

      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Hub Form
              </h3>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Hub Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="hubName"
                      placeholder="Enter hub name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formData.hubName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Hub Number <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="hubNumber"
                      placeholder="Enter hub number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formData.hubNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Hub Address <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="hubAddress"
                    placeholder="Enter hub address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={formData.hubAddress}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-white hover:bg-opacity-90"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddHub;
