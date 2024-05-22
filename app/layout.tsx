import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar/page";

export const metadata: Metadata = {
  title: "Predictify Pro.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="global.css"></link>
      </head>

      <body style={{height: 4000, overflowX: "hidden"}} className="w-screen h-screen">
      <div className='w-screen h-screen z-40'>
          <div className='h-24'>
              <Navbar />
          </div>
          <div className='h-[calc(100vh-6rem)]'>{children}</div>
        </div>
      </body>
    </html>
  );
}