import CommonAccordion2 from '../common/CommonAccordion2';

export const WhyUs = () => {
  const accordionData = [
    {
      title: "Proven ROI Across Verticals",
      content:
        "",
    },
    {
      title: "Elite Execution + Clear Communication",
      content:
        "",
    },
    {
      title: "A People-First Team With Results on Repeat",
      content:
        "",
    },
  ];

  return (
    <CommonAccordion2
      title="Why Us? Because<br/>We Don’t Just<br/>Consult — We<br/>Deliver Outcomes"
      description="There are hundreds of IT consulting services company pages online.  Here’s why brands choose us again and again:"
      items={accordionData}
    />
  );
};