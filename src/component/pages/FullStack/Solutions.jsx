import CommonAccordion2 from '../common/CommonAccordion2';

export const Solutions = () => {
  // New accordion data based on the screenshot titles
  const accordionData = [
    {
      title: "Front-End Development",
      content:
        "We build fast, responsive, and intuitive user interfaces (UIs) using modern frameworks like React, Angular, or Vue.js, ensuring an excellent user experience across all devices.",
    },
    {
      title: "Back-End Development",
      content:
        "Our team designs and develops robust server-side logic, APIs, and scalable architecture (Node.js, Python, Java) to handle complex business rules and high-traffic loads reliably.",
    },
    {
      title: "AI/ML Integration",
      content:
        "Integrate intelligent features like predictive analytics, personalized recommendations, and sophisticated data processing to make your application smarter and more adaptive.",
    },
    {
      title: "API Integration",
      content:
        "Seamlessly connect your application with third-party services, payment gateways, and external data sources using secure and efficient RESTful or GraphQL APIs.",
    },
    {
      title: "Database Configuration",
      content:
        "We handle the selection, setup, and optimization of relational (e.g., PostgreSQL, MySQL) and NoSQL (e.g., MongoDB) databases to ensure fast, scalable, and secure data storage.",
    },
    {
      title: "MEAN Stack Development",
      content:
        "Leverage the power of MongoDB, Express.js, Angular, and Node.js for rapid, full-stack, JavaScript-based development, ideal for building dynamic web applications.",
    },
    {
      title: "DevOps Enablement",
      content:
        "Implement continuous integration and continuous deployment (CI/CD) pipelines, automated testing, and infrastructure-as-code (IaC) to speed up development and ensure reliable releases.",
    },
    {
      title: "UI/UX Design",
      content:
        "Our design process focuses on user-centric research, wireframing, and high-fidelity prototyping to create beautiful interfaces that are both engaging and easy to navigate.",
    },
  ];

  return (
    <CommonAccordion2
      // Title and Description updated to match the style and content of the screenshot
      title="Solutions That Work as Hard as You Do"
      description="You Have Goals. We Have The Stack To Get You There."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};