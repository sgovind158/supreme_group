import Header from "@/components/client/Header/Header";
import Toast from "@/components/Toast/Toast";
import Footer from "@/components/client/Footer/Footer";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Supreme Group",
  description: "Supreme Group - Your one-stop solution for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
       <Toast />

      </body>
    </html>
  );
}
