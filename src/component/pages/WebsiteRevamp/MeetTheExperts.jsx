import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const MeetTheExperts = () => {
  const title = "Meet the Experts Behind Our Website Revamp Services";
  const desc = "Our team brings together strategists, designers, and developers with deep experience in enterprise websites, digital marketing, and UX design. Each project is approached collaboratively, ensuring every element, from wireframes to content, is meticulously executed."; 

  const options = [
    {
      heading: "UX Designers",
      description:
        "Our UX Designers Focus On Creating Intuitive, Frictionless Journeys That Make Every Interaction Enjoyable. By Understanding User Behavior And Anticipating Needs, They Ensure Visitors Can Navigate Your Website Effortlessly, Boosting Engagement And Satisfaction."
    },
    {
      heading: "Visual Designers",
      description:
        "Visual designers turn your brand story into a compelling, modern aesthetic. From color schemes to layouts, every design element is crafted to resonate with your audience, convey your values, and leave a lasting impression."
    },
    {
      heading: "Developers",
      description:
        "Our developers build websites that are not only visually stunning but also fast, secure, and reliable. They ensure seamless functionality across devices, integrating performance and scalability to support your business growth."
    },
    {
      heading: "Digital Strategists",
      description:
        "Digital strategists bridge creativity and data. They ensure every design decision, feature update, and content change aligns with measurable business goals, driving traffic, conversions, and long-term growth."
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