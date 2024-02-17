import React from "react";
import Footer from "@/components/layout/footer";
import "./globals.css";
import ResponsiveAppBar from "@/components/layout/navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="hide-scrollbar">
            <header>
              <ResponsiveAppBar/>
            </header>
            <main className="font-poppins">{children}</main>
            <footer>
              <Footer />
            </footer>
      </body>
    </html>
  );
}