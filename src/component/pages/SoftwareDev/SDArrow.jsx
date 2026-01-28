import CommonArrowGrid from "@/component/pages/common/CommonArrowGrid";

export const SDArrow = () => {
  
  const heading = "Complete Software Development Services";
  const description =
    "We provide end-to-end software solutions tailored to your business needs. Our services include:";

  const boxesData = [
    {
      
      title: "Software Consulting Services",
      description:
        "Expert guidance to help you plan, strategize, and choose the right technology for your business.",
      theme: "light", 
      size: "sm", 
    },
    {
      
      title: "Custom Software Development",
      description:
        "Building applications designed specifically for your workflows and goals.",
      theme: "dark", 
      size: "md", 
    },
    {
      
      title: "Software Architecture & Wireframing",
      description:
        "Designing scalable, efficient structures and prototypes before development begins.",
      theme: "dark", 
      size: "sm",
    },
    {
      
      title: "Software Maintenance & Support",
      description:
        "Keeping your systems updated, secure, and performing smoothly.",
      theme: "dark", 
      size: "sm",
    },
    {
      
      title: "Database Development",
      description:
        "Creating reliable databases that ensure seamless data management and accessibility.",
      theme: "dark", 
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
