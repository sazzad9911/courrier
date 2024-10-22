import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./providers";

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
        <Header></Header>
        <Providers>{children}</Providers>
        <Footer></Footer>
      </body>
    </html>
  );
}
