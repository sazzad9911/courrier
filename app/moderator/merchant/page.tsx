import React from "react";
import AdminLayout from "../../components/Layouts/AdminLayout";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import MerchantTable from "../../components/Tables/MerchantTable";

export default function Merchant() {
  return (
    <AdminLayout>
      <Breadcrumb pageName="Merchant List" />
      <MerchantTable/>
    </AdminLayout>
  );
}
