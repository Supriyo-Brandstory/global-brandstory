import FAQs from '@/component/pages/common/CommonFAQ';

export const FAQ = () => {
  const data = [
    {
      title: "How soon will I see results from Instagram campaigns?",
      description: "Most brands notice increased engagement within 2–4 weeks. Sales or lead growth usually takes 4–8 weeks, depending on factors like budget, audience size, and industry. Early indicators like clicks, saves, and shares help us optimize campaigns quickly."
    },
    {
      title: "Do you offer both organic and paid Instagram strategies?",
      description: "Yes. We combine organic content, posts, Stories, and Reels, with targeted paid ads. This integrated approach ensures steady growth, higher visibility, and engagement while nurturing both new and existing audiences."
    },
    {
      title: "How do you measure success for Instagram marketing?",
      description: "We track key metrics such as ROAS, reach, engagement, clicks, and leads. Each week, you receive clear, actionable reports that show what’s performing, what needs adjustment, and how campaigns contribute to your business goals."
    },
    {
      title: "Can you help with influencer partnerships and user-generated content?",
      description: "Absolutely. We manage influencer campaigns from start to finish, from selecting creators to content approvals. We also integrate user-generated content to boost credibility, extend reach, and increase audience trust, making campaigns more authentic and effective."
    },
    {
      title: "What industries do you specialize in for Instagram marketing?",
      description: "We work with a wide range of industries, including ecommerce, real estate, beauty, events, education, SaaS, and more. Our strategies are tailored to each sector, ensuring messaging, visuals, and targeting resonate with the right audience."
    },
    {
      title: "How do you ensure content fits my brand style and messaging?",
      description: "We follow your brand guidelines closely and collaborate with you on every creative step, from concept to final approval. This ensures content stays true to your brand voice while remaining engaging and effective across Instagram."
    }
  ];

  return <FAQs data={data} />;
};