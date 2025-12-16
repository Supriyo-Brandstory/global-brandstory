import { CommonOptionSelector2 } from "../common/CommonOptionSelector2";

export const TechStack = () => {
  const title = "Technology Stack Designed to Support Scalable and Efficient Websites";
  const desc = "We leverage the latest tools to ensure your website is modern, secure, and high-performing:"; 

  const options = [
    {
      heading: "WordPress CMS",
      description:
        "We provide intuitive content management systems that empower non-technical teams to update and manage content effortlessly. This ensures your website remains dynamic and up to date without relying on developers for every change."
    },
    {
      heading: "Custom Plugins & APIs",
      description:
        "When standard solutions fall short, we create custom plugins and APIs that extend your website’s functionality precisely to match your business needs. These integrations are seamless, reliable, and tailored for scalability."
    },
    {
      heading: "Performance Monitoring Tools",
      description:
        "We use advanced monitoring tools to track site speed, uptime, and errors in real time. This proactive approach allows us to resolve issues before they affect your users or conversions."
    },
    {
      heading: "Headless Frameworks",
      description:
        "For cutting-edge performance, we leverage headless frameworks like React or Vue.js. Decoupled architectures deliver lightning-fast front-end experiences while maintaining full WordPress functionality on the back end."
    }
  ];

  return (
    <CommonOptionSelector2
      title={title}
      description={desc}
      options={options}
      // The image does not provide a specific footer, leaving the footer component prop empty or omitted if possible in CommonOptionSelector2.
    />
  );
};