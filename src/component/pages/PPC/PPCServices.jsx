import CommonArrowGrid from "@/component/pages/common/CommonArrowGrid";

export const PPCServices = () => {
  const heading = "Our Full Range of PPC Services";
  const description =
    "We provide a wide range of PPC services to support the online expansion of your company:";

  const boxesData = [
    {
      title: "Performance Marketing",
      description:
        "Campaigns centered on quantifiable outcomes that increase leads, sales, and return on investment.",
      theme: "light",
      size: "sm",
    },
    {
      title: "PPC Strategy & Planning",
      description:
        "Personalized approaches based on your objectives, target market, and sector.",
      theme: "dark",
      size: "md",
    },
    {
      title: "Meta Advertising Services",
      description:
        "Facebook and Instagram ads that are specifically targeted to the proper audience.",
      theme: "dark",
      size: "sm",
    },
    {
      title: "Google Ads Management",
      description:
        "To attract high-intent traffic through search, display, and retail campaigns.",
      theme: "dark",
      size: "md",
    },
  ];

  return (
    <CommonArrowGrid
      heading={heading}
      descripton={description}
      boxes={boxesData}
    />
  );
};
