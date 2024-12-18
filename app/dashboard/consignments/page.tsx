import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
// import TableOne from "../../components/Tables/TableOne";
// import TableThree from "../../components/Tables/TableThree";
// import TableTwo from "../../components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import ConsignmentTable from "../../components/Tables/ConsignmentTable";

export const metadata: Metadata = {
  title: "Green Bangla | Merchant Dashboard",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Consignments = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Consignments" />

      <div className=" ">
        <ConsignmentTable />
      </div>
    </DefaultLayout>
  );
};

export default Consignments;
