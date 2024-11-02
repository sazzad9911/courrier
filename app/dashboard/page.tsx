
import { Metadata } from "next";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import ECommerce from "../components/Dashboard/E-commerce";


export const metadata: Metadata = {
  title:
    "Green Bangla | Merchant Dashboard",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
