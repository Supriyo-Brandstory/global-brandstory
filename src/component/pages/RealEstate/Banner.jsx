import { CommonBanner3 } from "../common/CommonBanner3";

export const Banner = () => {
  return (
    <CommonBanner3
      heading="Digital Growth Solutions for<br/>Real Estate"
    //   meta={[
    //     { title: "Industry", value: "Logistics Technology" },
    //     { title: "Market / Geography", value: "India + Middle East" },
    //     { title: "Business Model", value: "B2B SaaS" },
    //     { title: "Services Delivered", value: "Web Strategy · UX/UI Design · CRO" },
    //   ]}
      description="Real estate growth demands precision across targeting, creative storytelling, landing page experience, and lead qualification.<br/> Integrated strategy, marketing, technology, and analytics create predictable site visits and faster sales velocity."
    //   stats={[
    //     { value: "93%", label: "Increase In Organic traffic" },
    //     { value: "76%", label: "Increase In Dwell Time Organic traffic" },
    //     { value: "2", label: "Ranking in The first page" },
    //   ]}
      highlights={[
    "Drive Qualified Site Visits",
    "Reduce Cost per Lead",
    "Accelerate Inventory Movement",
  ]}
      primaryCtaText="Contact Us"
        secondaryCtaText="Our Works"
    />
  );
};
