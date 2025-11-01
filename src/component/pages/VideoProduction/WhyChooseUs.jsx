import CommonAccordion2 from '../common/CommonAccordion2';

export const WhyChooseUs = () => {
  const accordionData = [
    {
      title: "Award-Winning Creativity Backed by Measurable Performance",
      content:
        "",
    },
    {
      title: "End-to-End Project Management from Ideation to Delivery",
      content:
        "",
    },
    {
      title: "Fast Turnaround Times Without Compromising Quality",
      content:
        "",
    },
    {
      title: "Transparent Pricing, Milestone-Based Billing, and Zero Hidden Charges",
      content:
        "",
    },
  ];

  return (
    <CommonAccordion2
      title="Why Choose Us"
      description="Working with Brandstory means partnering with a team of thinkers, creators, and strategists committed to making your vision come alive on screen. As a leading creative video agency, we combine originality with execution to deliver measurable business outcomes.<br/><br/>As a professional video production partner, we are committed to delivering creative work with consistency, clarity, and collaboration. Our approach makes Brandstory not just a vendor but your trusted video partner in long-term brand growth."
      items={accordionData}
    />
  );
};