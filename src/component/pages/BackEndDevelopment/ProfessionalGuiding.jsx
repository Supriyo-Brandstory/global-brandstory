import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const ProfessionalGuiding = () => {
  const title = "Professionals Guiding Every Stage of<br/>Back-End Development";
  const desc = "Our back-end developers are skilled in multiple languages, frameworks, and database technologies:"; 
  const footerText = "We Pair Technical Expertise With Strategic Insight To Ensure Your Back-End Aligns With<br/>Your Business Goals.";

  const options = [
    {
      heading: "Languages & Runtimes",
      description:
        "We build robust, scalable applications using Node.js, Python, Java, Go, and PHP, selecting the best runtime for your project’s requirements, performance needs, and long-term maintainability."
    },
    {
      heading: "Frameworks",
      description:
        "Our developers leverage Express.js, Django, Spring, and Laravel to accelerate development, ensure best practices, and deliver secure, modular code tailored to your business logic."
    },
    {
      heading: "Databases",
      description:
        "We design and manage MongoDB, PostgreSQL, MySQL, and Redis databases for fast data retrieval, high integrity, and seamless scalability, whether your platform handles transactional systems or high-volume user interactions."
    },
    {
      heading: "Cloud & DevOps",
      description:
        "From AWS and Google Cloud to containerized solutions with Docker and Kubernetes, we ensure your back-end is highly available, fault-tolerant, and easy to deploy and manage, supporting continuous growth and operational efficiency."
    }
  ];

  return (
    <CommonOptionSelector2
      title={title}
      description={desc}
      options={options}
      footer={footerText}
    />
  );
};