import React from "react";
import AdminLayout from "../../components/Layouts/AdminLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import PickUpTable from "../../components/Tables/PickUpTable";

export default function PickUp() {
  return (
    <AdminLayout>
      <Breadcrumb pageName="Pick Up Requests" />

      <div className=" ">
        <PickUpTable />
      </div>
    </AdminLayout>
  );
}
