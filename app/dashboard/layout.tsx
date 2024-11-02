"use client";

import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userData } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!userData) {
      router.replace("/auth/signin");
    }
  }, [userData]);
  if (!Cookies.get("token")) return;
  return <div>{children}</div>;
}
