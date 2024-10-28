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
  if (params.includes("/dashboard") || params.includes("/auth")) {
    return (
      <AuthProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </AuthProvider>
    );
  }
  return (
    <Suspense>
      <AuthProvider>
        <ChakraProvider>
          <Header></Header>
          {children}
        </ChakraProvider>
        <Footer></Footer>
      </AuthProvider>
    </Suspense>
  );
}
