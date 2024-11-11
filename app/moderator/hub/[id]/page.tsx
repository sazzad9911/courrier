// Ensure this line is at the very top of the file
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import from 'next/navigation' instead of 'next/router'
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import { getApi, putApi } from "../../../../functions/API";
import toast from "react-hot-toast";

const EditHub = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  // State to manage form inputs
  const [formData, setFormData] = useState({
    hubName: "",
    hubNumber: "",
    hubAddress: "",
  });

  // Fetch hub details on component mount
  useEffect(() => {
    const fetchHubDetails = async () => {
      try {
        const response = await getApi(`/apis/admin/get-single-hub?id=${id}`);
        const { name, phone, address } = response.data;

        setFormData({
          hubName: name || "",
          hubNumber: phone || "",
          hubAddress: address || "",
        });
      } catch (error) {
        console.error("Failed to fetch hub details:", error);
        toast.error("Unable to fetch hub details.");
      }
    };

    fetchHubDetails();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await putApi(`/apis/admin/add-hub?id=${id}`, {
        name: formData.hubName,
        phone: formData.hubNumber,
        address: formData.hubAddress,
      });
      toast.success("Hub details updated successfully.");
      router.replace("/moderator/hub");
    } catch (error) {
      console.error("Failed to update hub details:", error);
      toast.error("Failed to update hub details.");
    }
  };

  return (
    <AdminLayout>
      <Breadcrumb pageName="Edit Hub" />

      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Hub Form
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="p-6.5">
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
                    onChange={(e) =>
                      setFormData({ ...formData, hubName: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, hubNumber: e.target.value })
                    }
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
                  onChange={(e) =>
                    setFormData({ ...formData, hubAddress: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-white hover:bg-opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default EditHub;
