import React from "react";
import AdminLayout from "../../components/Layouts/AdminLayout";
import AddBreadcrumb from "../../components/Breadcrumbs/AddBreadcrumb";
import RiderListTable from "../../components/Tables/RiderListTable";

export default function Hub() {
  return (
    <AdminLayout>
      <AddBreadcrumb link="/moderator/rider/add" pageName="Rider List" />

      <div className=" ">
        <RiderListTable />
      </div>
    </AdminLayout>
  );
}
