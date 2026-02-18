import { CommonBanner3 } from "../common/CommonBanner3";

export const Banner = () => {
  return (
    <CommonBanner3
      heading="Website Redesign Helped a B2B<br/>Logistics Brand Increase Demo"
      meta={[
        { title: "Industry", value: "Logistics Technology" },
        { title: "Market / Geography", value: "India + Middle East" },
        { title: "Business Model", value: "B2B SaaS" },
        { title: "Services Delivered", value: "Web Strategy · UX/UI Design · CRO" },
      ]}
      description="Discover what all changes happened for the company, the strategic approach you can apply for the growth of your business."
      stats={[
        { value: "93%", label: "Increase In Organic traffic" },
        { value: "76%", label: "Increase In Dwell Time Organic traffic" },
        { value: "2", label: "Ranking in The first page" },
      ]}
    />
  );
};
