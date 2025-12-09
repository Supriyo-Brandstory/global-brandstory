import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const OurExpertise = () => {
  const title = "Our Expertise Serving Multiple Sectors";
  const desc = "We provide architecture and wireframe services for a wide range of businesses:"; 

  const options = [
    {
      heading: "Startups",
      description:
        "We help emerging businesses launch scalable, secure products from day one, ensuring a strong foundation for rapid growth."
    },
    {
      heading: "Enterprises",
      description:
        "Our team modernizes complex legacy systems with minimal disruption, optimizing operations while enabling digital transformation."
    },
    {
      heading: "High-Demand Platforms",
      description:
        "We design and optimize applications for maximum performance, reliability, and scalability, ensuring they can handle heavy traffic and evolving user needs."
    }
  ];

  return (
    <CommonOptionSelector2
      title={title}
      description={desc}
      options={options}
      footer="No matter the industry or size, our approach ensures your software is ready for growth and success."
    />
  );
};