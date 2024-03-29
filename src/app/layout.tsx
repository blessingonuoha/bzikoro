import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { heebo } from "../utils/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${heebo.className} h-screen flex`}>
        <Sidebar></Sidebar>
        <div className="flex-1">
          <Topbar></Topbar>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
