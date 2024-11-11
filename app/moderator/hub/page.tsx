import React from "react";
import AdminLayout from "../../components/Layouts/AdminLayout";
import HubListTable from "../../components/Tables/HubListTable";
import AddBreadcrumb from "../../components/Breadcrumbs/AddBreadcrumb";

export default function Hub() {
  return (
    <AdminLayout>
      <AddBreadcrumb link="/moderator/hub/add" pageName="Hub List" />

      <div className=" ">
        <HubListTable />
      </div>
    </AdminLayout>
  );
}
