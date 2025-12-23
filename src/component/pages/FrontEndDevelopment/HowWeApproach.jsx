import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const HowWeApproach = () => {
  const title = "How We Approach Front-End<br/>Development Projects";
  const desc = "Our approach is structured yet flexible, focusing on delivering high-quality,<br/>sustainable digital solutions:"; 

  const options = [
    {
      heading: "Discovery & Planning",
      description:
        "We start by gaining a comprehensive understanding of your business, target audience, and objectives. This phase allows us to define a clear project roadmap, set measurable goals, and identify opportunities to create a website that delivers both impact and results."
    },
    {
      heading: "UX/UI Design",
      description:
        "Our designers craft intuitive and visually appealing interfaces that guide users seamlessly through your site. Every interaction is thoughtfully designed to enhance usability, improve engagement, and ensure a memorable digital experience."
    },
    {
      heading: "Development & Quality Assurance",
      description:
        "We build clean, modular, and scalable websites using modern frameworks, ensuring reliable and future-ready performance. Every project undergoes rigorous, cross-device quality testing to identify and resolve issues early, guaranteeing a flawless, responsive experience for all users."
    },
    {
      heading: "Launch & Optimization",
      description:
        "Launching your website is just the beginning. We provide continuous monitoring, performance tuning, and iterative improvements to keep your site fast, secure, and capable of scaling with your growing business needs."
    }
  ];

  return (
    <CommonOptionSelector2
      title={title}
      description={desc}
      options={options}
    />
  );
};