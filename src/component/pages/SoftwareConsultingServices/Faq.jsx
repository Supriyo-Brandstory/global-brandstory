import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How much do your software consulting services cost?",
            description: "Every project is unique. Costs depend on scope, expertise, and duration. After a discovery call, we provide a transparent, tailored proposal."
        },
        {
            title: "How long does a consulting engagement take?",
            description: "Smaller roadmaps may take a few weeks, while full-scale digital transformations can span several months. We establish clear timelines and milestones upfront."
        },
        {
            title: "Do you cover specific technologies like AI or Cloud?",
            description: "Yes. Our consultants specialize in AI, Cloud, Data Analytics, Automation, and custom software development. We tailor solutions to your stack and goals."
        },
        {
            title: "What happens after the consulting engagement ends?",
            description: "We don’t leave you with a plan and walk away. We provide post-engagement support, training, and governance models. If needed, we can also assist with development and implementation."
        }
    ];

    return <FAQs data={data} />;
};