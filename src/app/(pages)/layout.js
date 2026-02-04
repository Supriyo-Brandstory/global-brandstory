import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/partial/Header";
import Footer from "@/component/partial/Footer";



export const metadata = {
  title: "BrandStory Global",
  description:
    "BrandStory Global is a full-service digital marketing and technology agency delivering growth-focused strategies, campaigns, and development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
         <Header/>
        {children}
         <Footer/>
      </body>
     
    </html>
  );
}
