"use client";
import { useEffect, useState } from "react";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import { getApi, putApi } from "../../../../functions/API";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Edit = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const [formData, setFormData] = useState({
    riderName: "",
    riderNumber: "",
    riderNid: "",
    riderPassword: "",
  });

  useEffect(() => {
    const fetchRiderDetails = async () => {
      try {
        const response = await getApi(`/apis/admin/get-single-rider?id=${id}`);
        const { name, phone, nid } = response.data;
        setFormData({
          riderName: name || "",
          riderNumber: phone || "",
          riderNid: nid || "",
          riderPassword: "",
        });
      } catch (error) {
        console.error("Failed to fetch hub details:", error);
        toast.error("Unable to fetch hub details.");
      }
    };
    fetchRiderDetails();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await putApi(`/apis/admin/rider?id=${id}`, {
        riderName: formData.riderName,
        riderNID: formData.riderNid,
        riderNumber: formData.riderNumber,
        riderPassword: formData.riderPassword,
      });
      toast.success("Rider info updated successfully");
      router.replace("/moderator/rider");
    } catch (error) {
      toast(`${error.response.data.error}`);
    }
  };

  return (
    <AdminLayout>
      <Breadcrumb pageName="Edit Rider" />

      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Rider Form
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Rider Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your hub name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formData.riderName}
                      onChange={(e) =>
                        setFormData({ ...formData, riderName: e.target.value })
                      }
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Rider Number <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your hub number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formData.riderNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          riderNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Rider NID <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your hub name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formData.riderNid}
                      onChange={(e) =>
                        setFormData({ ...formData, riderNid: e.target.value })
                      }
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Rider Password <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your hub number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={formData.riderPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          riderPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-black hover:bg-opacity-90">
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

export default Edit;
