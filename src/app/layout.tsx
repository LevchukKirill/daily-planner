import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideNav from "@/components/sideNav/SideNav";
import User from "@/components/user/User";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My beauty day planer",
  description: "All features free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <nav>
      <SideNav/>
      <User/>
      </nav>
        {children}

      </body>
    </html>
  );
}
