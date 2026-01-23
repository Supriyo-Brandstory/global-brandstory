import CommonArrowGrid from "@/component/pages/common/CommonArrowGrid";

export const SDArrow = () => {
  // Updated Heading and Description based on the screenshot
  const heading = "Complete Software Development Services";
  const description =
    "We provide end-to-end software solutions tailored to your business needs. Our services include:";

  const boxesData = [
    {
      // 01. Software Development Services
      title: "Software Consulting Services",
      description:
        "Expert guidance to help you plan, strategize, and choose the right technology for your business.",
      theme: "light", // Assuming the light background box from the screenshot is 'light'
      size: "sm", // Changed size to 'lg' to represent the large box 01
    },
    {
      // 02. UI/UX Design
      title: "Custom Software Development",
      description:
        "Building applications designed specifically for your workflows and goals.",
      theme: "dark", // Dark background
      size: "md", // Medium box 02
    },
    {
      // 03. Web App Development
      title: "Software Architecture & Wireframing",
      description:
        "Designing scalable, efficient structures and prototypes before development begins.",
      theme: "dark", // Dark background
      size: "sm",
    },
    {
      // 04. Website Design
      title: "Software Maintenance & Support",
      description:
        "Keeping your systems updated, secure, and performing smoothly.",
      theme: "dark", // Dark background
      size: "sm",
    },
    {
      // 05. Full Stack Development
      title: "Database Development",
      description:
        "Creating reliable databases that ensure seamless data management and accessibility.",
      theme: "dark", // Dark background
      size: "sm",
    },
    {
      title: "Enterprise Software Development Services",
      description:
        "Delivering large-scale, secure, and scalable solutions for growing businesses.",
      theme: "dark",
      size: "lg",
    },
  ];

  return (
    <CommonArrowGrid
      boxes={boxesData}
      heading={heading}
      descripton={description}
    />
  );
};
