import { CommonBwThreeCard } from "../common/CommonBwThreeCard";

export const Innovation = () => {
  // Content updated based on "The Talent Behind the Tech" screenshot
  const title = "Innovation at Enterprise Scale Begins with the Right Partner";
  const description =
    "Our role goes beyond implementation. We become an extension of your leadership and engineering teams, aligning transformation goals with measurable outcomes. Through our collaborations with global enterprises and other forward thinking digital transformation services companies, we have helped businesses reimagine what’s possible — and make it real.</br></br>We focus on three pillars that power enterprise scale transformation:";
  const footer =
    "This is a transformation that touches every layer of the enterprise — from core infrastructure to customer experience.";

  const data = [
    {
      title: "We contact clieEnterprise automation",
      description: `
                Streamline operations, reduce manual dependencies, and enable faster, data-driven decisions with intelligent automation frameworks tailored to your workflows.
            `,
    },
    {
      title: "Business process</br>digitization",
      description: `
                Replace outdated processes with digital-first experiences that drive agility, efficiency, and improved stakeholder engagement.
            `,
    },
    {
      title: "Cloud-native innovation",
      description: `
                Build and scale with cloud-native architectures that support continuous deployment, modular upgrades, and platform-agnostic flexibility.
            `,
    },
  ];
  return (
    <CommonBwThreeCard
      title={title}
      description={description}
      footer={footer}
      cardData={data}
      rightPadding="50px"
    />
  );
};
