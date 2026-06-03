"use client";
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "../../_components/AppHeader";

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-10 md:px-28 lg:px-36 xl:px-48">
      <AppHeader />
      {children}
    </div>
  );
};

export default DashboardProvider;
