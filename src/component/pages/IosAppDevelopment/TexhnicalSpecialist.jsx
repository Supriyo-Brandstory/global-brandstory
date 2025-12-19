import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const TexhnicalSpecialist = () => {
  const title = "Technical Specialists Maintaining<br/>Security, Performance, and Scalability";
  const desc = "Our team brings together designers, developers, strategists, and testers who live and breathe iOS<br/>technology. Each project is handled by specialists in:"; 

  const options = [
    {
      heading: "Swift Development Suite",
      description:
        "Expertise in Swift with architectures like MVC, MVVM, and Clean Architecture ensures scalable, maintainable, and high-performing apps."
    },
    {
      heading: "UI/UX Design",
      description:
        "We use Figma and Sketch to craft intuitive, visually compelling interfaces that enhance usability and engagement."
    },
    {
      heading: "Advanced Features",
      description:
        "Implement cutting-edge functionalities such as ARKit, Core ML, and real-time data integration for rich, interactive, and intelligent app experiences."
    },
    {
      heading: "Security & Compliance",
      description:
        "Enterprise-grade security protocols protect user data, while adherence to industry standards ensures compliance and long-term trust."
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