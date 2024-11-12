"use client";
import { useState } from "react";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import { postApi } from "../../../../functions/API";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Add = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    riderName: "",
    riderNumber: "",
    riderNid: "",
    riderPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const res = await postApi("/apis/admin/rider", {
        riderName: formData.riderName,
        riderNID: formData.riderNid,
        riderNumber: formData.riderNumber,
        riderPassword: formData.riderPassword,
      });
      console.log(res);
      toast.success("Rider account creation successful");
      router.replace("/moderator/rider");
    } catch (error) {
      toast(`${error.response.data.error}`);
    }
  };

  return (
    <AdminLayout>
      <Breadcrumb pageName="Add Rider" />

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
                      placeholder="Enter your rider name"
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
                      placeholder="Enter your rider number"
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
                      placeholder="Enter your rider NID"
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
                      placeholder="Enter your rider password"
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

export default Add;
