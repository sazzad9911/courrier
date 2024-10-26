import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import  { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Green Bangla Courier Service | Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#091242]">
        <Providers>{children}</Providers>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{
            margin: 10,
          }}
          toastOptions={{
            className: "",

            style: {
              background: "#FFB82B",
              color: "#000",
            },
            success: {
              duration: 3000,
              
            },
            error: {
              duration: 5000,
             
            },
           
          }}
        />
      </body>
    </html>
  );
}
