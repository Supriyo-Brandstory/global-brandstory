import CommonAccordion2 from '../common/CommonAccordion2';

export const SMMSocialPartner = () =>{
    
    const accordionData = [
    {
      title: "1. Advanced Keyword Research",
      content:
        "Find search terms that match your audience’s intent and have the best chance of bringing in results.",
    },
    {
      title: "2. Content Creation Plans",
      content:
        "AI-powered content strategies designed to align with audience demand and search trends.",
    },
    {
      title: "3. Competitor Tracking",
      content:
        "Monitor competitors’ strategies and uncover gaps that you can leverage for better visibility.",
    },
    {
      title: "4. Predictive Insights",
      content:
        "Leverage AI forecasts to stay ahead of SEO trends and make proactive adjustments.",
    },
  ];

    return ( 
        <CommonAccordion2
        title="Why We’re the Social Media Partner Brands Rely On"
        description="We are chosen by brands because we simplify social media. We ensure that each ad and content adds value."
        items={accordionData} />
    )
}