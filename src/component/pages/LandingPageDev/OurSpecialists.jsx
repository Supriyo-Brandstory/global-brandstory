import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const OurSpecialists = () => {
  const title = "Our Specialists in Landing<br/>Page Development";
  const desc = "Our success is powered by specialists across disciplines:"; 

  const options = [
    {
      heading: "UX Designers",
      description:
        "Specialists in creating intuitive, user-friendly journeys that guide visitors seamlessly from entry to conversion. Every design decision is rooted in user behavior and psychology."
    },
    {
      heading: "CRO Specialists",
      description:
        "Dedicated to boosting conversions through strategic testing, heatmap analysis, and optimization techniques. They ensure every element of your page drives measurable results."
    },
    {
      heading: "Copywriters",
      description:
        "Experts in crafting compelling, benefit-driven copy that resonates with your audience. Their words inspire trust, reduce friction, and motivate users to take action."
    },
    {
      heading: "Developers",
      description:
        "Proficient in platforms like WordPress, Webflow, Unbounce, Instapage, and custom coding. They bring designs to life with responsive, high-performing, and scalable builds."
    }
  ];

  return (
    <CommonOptionSelector2
      title={title}
      description={desc}
      options={options}
      footer="Every Project Benefits From This Multi-Disciplinary Collaboration."
    />
  );
};