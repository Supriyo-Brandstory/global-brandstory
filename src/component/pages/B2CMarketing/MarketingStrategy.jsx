import CommonAccordion2 from '../common/CommonAccordion2';

export const MarketingStrategy = () => {
  const accordionData = [
    {
      title: "Tech Data-Driven Consumer Insights",
      content:
        "Utilize advanced technology and data analytics to gain deep insights into consumer behavior and preferences, informing your marketing decisions.",
    },
    {
      title: "Emotional Storytelling That Sells",
      content:
        "Craft compelling narratives that resonate with your audience on an emotional level, building brand loyalty and driving sales.",
    },
    {
      title: "Conversion-Focused Campaigns",
      content:
        "Design and execute campaigns optimized to convert leads into customers, with a focus on clear calls-to-action and streamlined user journeys.",
    },
    {
      title: "Influencer & Community Marketing",
      content:
        "Partner with key influencers and build a strong brand community to amplify your message and foster organic growth through trusted voices.",
    },
  ];

  return (
    <CommonAccordion2
      title="B2C Marketing Strategies That Drive Growth"
      description=""
      items={accordionData}
    />
  );
};
