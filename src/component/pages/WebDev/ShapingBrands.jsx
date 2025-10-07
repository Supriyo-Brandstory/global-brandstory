import CommonAccordion2 from '../common/CommonAccordion2';

export const ShapingBrands = () => {
  const accordionData = [
    {
      title: "E-Commerce Website – Retail Brand",
      content:
        "Utilize advanced technology and data analytics to gain deep insights into consumer behavior and preferences, informing your marketing decisions.",
    },
    {
      title: "Professional Services Website Revamp",
      content:
        "Craft compelling narratives that resonate with your audience on an emotional level, building brand loyalty and driving sales.",
    },
    {
      title: "Fintech Landing Pages",
      content:
        "Design and execute campaigns optimized to convert leads into customers, with a focus on clear calls-to-action and streamlined user journeys.",
    },
    {
      title: "Healthcare Platform Support",
      content:
        "Partner with key influencers and build a strong brand community to amplify your message and foster organic growth through trusted voices.",
    },
    {
      title: "Product Launch Microsite",
      content:
        "Partner with key influencers and build a strong brand community to amplify your message and foster organic growth through trusted voices.",
    },
  ];

  return (
    <CommonAccordion2
      title="Shaping Brands Through Web Development"
      description="We bring strategy, design, and technology together to create digital experiences that perform. While some of our work is under NDA, here’s a glimpse into the kind of solutions we’ve successfully delivered for clients across industries:"
      items={accordionData}
      button="View Portfolio"
      buttonLink=""
    />
  );
};
