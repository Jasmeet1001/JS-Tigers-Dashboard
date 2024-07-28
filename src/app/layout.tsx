import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JS Tigers",
  description: "By Jasmeet Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex h-full'>
          <Sidebar />

          <div className='flex-1 h-full overflow-y-auto'>{children}</div>
        </main>
      </body>
    </html>
  );
}
