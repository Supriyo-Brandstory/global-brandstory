import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const OurSpecialists = () => {
  const title = "Our Specialists in Landing Page Development";
  const desc = "Our team combines creativity, technical expertise, and industry knowledge:";

  const options = [
    {
      heading: "UI/UX Designers",
      description:
        "Our designers craft intuitive interfaces that make shopping seamless, enhancing user engagement and driving conversions."
    },
    {
      heading: "Full-Stack Developers",
      description:
        "They build fast, secure, and scalable e-commerce platforms, ensuring smooth functionality across all devices and a reliable shopping experience."
    },
    {
      heading: "E-commerce Strategists",
      description:
        "Our strategists map customer journeys and conversion funnels, aligning every element of your store with business goals and user behavior."
    },
    {
      heading: "QA & Support Specialists",
      description:
        "We rigorously test your platform and provide ongoing support to guarantee flawless performance, from launch and beyond."
    }
  ];

  return (
    <CommonOptionSelector2
      title={title}
      description={desc}
      options={options}
      footer="We Work Collaboratively With You At Every Stage, Turning Your Vision Into A High-Performing Online Store."
    />
  );
};