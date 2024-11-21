import { Metadata } from "next";
import ECommerceAdmin from "../components/Dashboard/E-commerceAdmin";
import AdminLayout from "../components/Layouts/AdminLayout";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <AdminLayout>
        <ECommerceAdmin />
      </AdminLayout>
    </>
  );
}
