import CommonAccordion2 from '../common/CommonAccordion2';

export const FirstSteps = () => {
  const accordionData = [
    {
      title: "Digital Maturity Assessment",
      content:
        "Utilize advanced technology and data analytics to gain deep insights into consumer behavior and preferences, informing your marketing decisions.",
    },
    {
      title: "Strategic Roadmapping",
      content:
        "Craft compelling narratives that resonate with your audience on an emotional level, building brand loyalty and driving sales.",
    },
    {
      title: "Agile Implementation at Scale",
      content:
        "Design and execute campaigns optimized to convert leads into customers, with a focus on clear calls-to-action and streamlined user journeys.",
    },
    {
      title: "Outcome Measurement and Optimization",
      content:
        "Partner with key influencers and build a strong brand community to amplify your message and foster organic growth through trusted voices.",
    },
  ];

  return (
    <CommonAccordion2
      title="From First Steps to Full Scale — How We Make It Happen"
      description="At Brandstory, we offer digital transformation consulting services that bridge the gap between “where you are” and “where your business needs to go”.</br></br>Our approach goes beyond surface-level change — we deliver structured, high-impact transformation that’s tailored to your industry, operational model, and growth goals.</br></br><span class='highlited-text'>Here’s how we make transformation work:</span>"
      items={accordionData}
    />
  );
};
