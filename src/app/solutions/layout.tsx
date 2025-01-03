import type { Metadata } from "next";


import SideNav from "../shared/side-nav";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Workwave",
  description: "Business management SaaS platform by TaskNet Solutions Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
 
   <>

   <SidebarProvider>
    <SideNav userRole="admin"/>
    </SidebarProvider>

   </>
  );
}
