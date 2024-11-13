"use client";
import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import AdminLayout from "../../components/Layouts/AdminLayout";
import { postApi } from "../../../functions/API";
import toast from "react-hot-toast";

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    retypePassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postApi("/apis/admin/reset-password", {
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
        retypePassword: formData.retypePassword,
      });
      if (res.data.error) {
        toast.error(`${res.data.error}`);
      } else {
        toast.success(`${res.data.message}`);
      }
      // toast.success("Password reset successful");
      console.log(res);
    } catch (error) {
      toast(`${error.response.data.error}`);
    }
  };
  return (
    <AdminLayout>
      <Breadcrumb pageName="Password Change" />
      <div className="flex flex-col gap-9">
        {/* <!-- Sign Up Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Password & Security
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Old Password
                </label>
                <input
                  type="text"
                  placeholder="Enter your old password"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  value={formData.oldPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, oldPassword: e.target.value })
                  }
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your new password"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  value={formData.newPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, newPassword: e.target.value })
                  }
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Re Type Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password again"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  value={formData.retypePassword}
                  onChange={(e) =>
                    setFormData({ ...formData, retypePassword: e.target.value })
                  }
                />
              </div>

              <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-black hover:bg-opacity-90">
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
