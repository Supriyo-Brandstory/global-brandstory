import FAQs from '@/component/pages/common/CommonFAQ';

export const ESFaq = () => {
  const data = [
    {
      title: "What differentiates enterprise SEO from large-business SEO?",
      description: "Enterprise SEO focuses on scaling complex, multi-site environments with global reach, requiring specialized workflows, automation, and governance not typical of smaller-scale SEO efforts."
    },
    {
      title: "How quickly can we onboard and receive an audit?",
      description: "Onboarding is streamlined for rapid deployment, with initial comprehensive audit reports delivered within 48 hours post-engagement."
    },
    {
      title: "How do you integrate with our dev/IT teams?",
      description: "We collaborate closely through established communication protocols, API integrations, and project management tools to ensure seamless alignment and execution."
    },
    {
      title: "What KPIs and reporting cadence can we expect?",
      description: "Clients receive customized dashboards with key metrics tracked in real-time, supplemented by weekly sprint updates and quarterly strategic reviews."
    },
    {
      title: "Can you support multi-language, multi-region rollouts?",
      description: "Yes, our enterprise SEO frameworks include hreflang governance, geo-targeting strategies, and localization best practices to support global rollouts effectively."
    }
  ];

  return <FAQs data={data} />;
};