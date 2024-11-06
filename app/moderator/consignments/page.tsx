import React from "react";
import AdminLayout from "../../components/Layouts/AdminLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import AdminConsignmentsTable from "../../components/Tables/AdminConsignments";

export default function Consignments() {
  return (
    <AdminLayout>
      <Breadcrumb pageName="Consignments" />

      <div className=" ">
        <AdminConsignmentsTable />
      </div>
    </AdminLayout>
  );
}
