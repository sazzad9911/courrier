// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../providers/AuthProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const params = usePathname();
  if (
    params.includes("/dashboard") ||
    params.includes("/auth") ||
    params.includes("/moderator")
  ) {
    return (
      <Suspense>
        <AuthProvider>{children}</AuthProvider>
      </Suspense>
    );
  }
  return (
    <Suspense>
      <AuthProvider>
        <ChakraProvider>
          <div className="bg-[#091242]">
            <Header></Header>
            {children}
            <Footer></Footer>
          </div>
        </ChakraProvider>
      </AuthProvider>
    </Suspense>
  );
}
