import FAQs from '@/component/pages/common/CommonFAQ'

export const ContentMarketingFooter = () => {
  const data = [
    {
      title: "What Is Content Marketing And How Does It Work?",
      description: "Content marketing is a strategic approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience. It works by providing useful information that helps solve problems, educates, or entertains your target audience, ultimately driving profitable customer action through trust and relationship building."
    },
    {
      title: "What Industries Do You Specialize In?", 
      description: "We specialize in content marketing for B2B companies, e-commerce brands, SaaS platforms, healthcare providers, and real estate businesses. Each industry requires unique content strategies, tone, and approaches. Our team understands the specific challenges and opportunities within these sectors to create content that resonates with your target audience."
    },
    {
      title: "How Do You Measure ROI From Content Marketing?",
      description: "We measure content marketing ROI through multiple metrics including website traffic growth, lead generation, conversion rates, engagement metrics, brand awareness, and revenue attribution. We use advanced analytics tools to track the customer journey from initial content interaction to final purchase, providing clear data on content performance and business impact."
    },
    {
      title: "What Types Of Content Marketing Services Do You Offer?",
      description: "Our content marketing services include blog writing, case studies, whitepapers, social media content, video content, infographics, email campaigns, website copywriting, SEO content optimization, content strategy development, and distribution across multiple channels. We tailor our services to match your business goals and audience preferences."
    },
    {
      title: "Can You Handle Global Content Marketing?",
      description: "Yes, we have extensive experience with global content marketing campaigns. We can create content for multiple markets, handle localization and cultural adaptation, manage different time zones, and ensure your brand message remains consistent while being culturally relevant across different regions and languages."
    },
    {
      title: "How Experienced Is Your Content Marketing Team?",
      description: "Our content marketing team consists of experienced strategists, writers, designers, and analysts with years of experience across various industries. Our team members have worked with companies ranging from startups to Fortune 500 enterprises, bringing proven expertise in creating content that drives real business results."
    }
  ];

  return (
    <FAQs data={data}/>
  )
}
