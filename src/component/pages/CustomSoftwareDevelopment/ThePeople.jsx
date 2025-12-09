import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const ThePeople = () => {
  const title = "The People Powering Custom Software Development";
  const desc = "Our team brings a mix of technical expertise and strategic insight:"; 

  const options = [
    {
      heading: "Software Architects",
      description:
        "Design scalable, secure, and robust systems that can grow with your business and handle complex technical requirements."
    },
    {
      heading: "UX/UI Designers",
      description:
        "Craft intuitive and user-friendly interfaces, ensuring seamless interactions that enhance engagement and satisfaction."
    },
    {
      heading: "Agile Developers",
      description:
        "Deliver high-quality, iterative builds that allow for continuous feedback, adaptability, and alignment with your evolving needs."
    },
    {
      heading: "Project Managers",
      description:
        "Oversee the entire project lifecycle, keeping timelines on track, ensuring goals are met, and maintaining clear communication with stakeholders throughout."
    }
  ];

  return (
    <CommonOptionSelector2
      title={title}
      description={desc}
      options={options}
      footer="Together, they create software that is efficient, secure, and aligned with your business vision."
    />
  );
};