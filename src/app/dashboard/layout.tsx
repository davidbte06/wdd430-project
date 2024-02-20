import React from "react";
import Footer from "@/components/layout/footer";
import "../globals.css";
import ResponsiveAppBar from "@/components/layout/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <header>
        <ResponsiveAppBar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
