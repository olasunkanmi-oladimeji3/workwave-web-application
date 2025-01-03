import type { Metadata } from "next";
import "./globals.css";
import TopNav from "./shared/top-nav";
import Footer from "./shared/footer";
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="en">
      <body>
      <TopNav />
              <main >
                {children}
             
              </main>
              <Toaster />
       <Footer/>
      </body>
    </html>
  );
}
