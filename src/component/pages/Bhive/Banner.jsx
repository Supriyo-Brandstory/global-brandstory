import React from "react";
import { CommonBanner4 } from "../common/CommonBanner4";

export const Banner = () => {
  const bannerData = {
    heading: "Driving 7X Growth in Coworking <span>Lead Generation Strategy</span>",
    tags: [
      { icon: "Globe", text: "Coworking / Managed Offices" },
      { icon: "Target", text: "Lead Generation" },
      { icon: "Briefcase", text: "B2B" },
      { icon: "Share2", text: "Google · Meta · LinkedIn" },
      { icon: "Calendar", text: "₹5L - ₹15L / month" },
      { icon: "Clock", text: "Multi-phase campaign" },
    ],
    googleLogo: "/images/commonBanner4/google-logo.png"
  };

  return (
    <>
      <CommonBanner4 {...bannerData} />
    </>
  );
};
