import CommonAccordion2 from '../common/CommonAccordion2';

export const Technologies = () => {
  const accordionData = [
    {
      title: "AI & Machine Learning",
      content:
        "Integrate predictive analytics, personalized recommendations, and sophisticated data processing directly into your mobile application.",
    },
    {
      title: "Computer Vision",
      content:
        "Implement image recognition, object tracking, and augmented reality features for advanced user interactions and data capture.",
    },
    {
      title: "Cloud Architecture",
      content:
        "Develop highly scalable and secure backend solutions using platforms like AWS, Azure, and Google Cloud, ensuring high availability and performance.",
    },
    {
      title: "AR/VR Capabilities",
      content:
        "Build immersive and interactive experiences, from virtual product try-ons to gamified training modules, transforming user engagement.",
    },
    {
      title: "IoT Integration",
      content:
        "Connect your mobile app seamlessly with smart devices, wearables, and sensors for remote control, data collection, and automation.",
    },
    {
      title: "Blockchain",
      content:
        "Utilize decentralized ledger technology for secure transactions, verifiable digital identity, and transparent supply chain tracking.",
    },
    {
      title: "Metaverse-Ready Experiences",
      content:
        "Design applications with features and functionalities ready to bridge into 3D virtual spaces and emerging mixed-reality environments.",
    },
  ];

  return (
    <CommonAccordion2
      title="Technologies We Use for Mobile App Development"
      description="From Startups To Enterprises, Today’s Mobile Apps Need To Be Smart, Adaptive, And Future-Ready. Our Builds Integrate:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};