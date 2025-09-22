import FAQs from '@/component/pages/common/CommonFAQ'
export const MarketingAutomationFAQ = () =>{
    const data = [
  {
    title: "What's Included In Your Marketing Automation Services?",
    description: "Our services include strategic planning, platform setup, workflow creation for email and WhatsApp campaigns, lead nurturing, and performance analysis to optimize your marketing efforts and increase conversions."
  },
  {
    title: "Do You Help Choose The Right Platform?",
    description: "Yes, we work with you to understand your business needs and recommend the best marketing automation platform (e.g., HubSpot, Mailchimp, Marketo) that aligns with your goals and budget."
  },
  {
    title: "Can I Automate Both Emails And WhatsApp Messages?",
    description: "Absolutely. Our services are designed to create a seamless customer journey across multiple channels, allowing you to automate both email and WhatsApp messaging to engage with your audience effectively."
  },
  {
    title: "Are Your Tools B2B Ready?",
    description: "Yes, our automation tools and strategies are specifically tailored to meet the unique needs of B2B businesses, focusing on lead generation, nurturing, and sales funnel optimization."
  },
  {
    title: "What Tools Do You Use For Automation?",
    description: "We work with a variety of industry-leading marketing automation platforms, including but not limited to HubSpot, Marketo, and ActiveCampaign, based on the specific requirements of your business."
  }
];


return (
    <FAQs data={data}/>
)
}