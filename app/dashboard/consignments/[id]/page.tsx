"use client";
import { useParams } from "next/navigation";
import React from "react";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";

export default function Parcel() {
  const { id } = useParams();
  return (
    <DefaultLayout>
        <Breadcrumb pageName={`Parcel Id: ${id}`}/>
      <div>{id}</div>
    </DefaultLayout>
  );
}
