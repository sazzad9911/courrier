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
    } else {
      if (!userData.isAdmin) {
        router.replace("/dashboard");
      }
    }
  }, [userData]);
  if (!Cookies.get("token")) return;
  if (!userData.isAdmin) return;
  return <div>{children}</div>;
}
