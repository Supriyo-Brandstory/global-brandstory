import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    // FAQs related to Content Creation, based on the provided text.
    const data = [
        {
            title: "What is content creation?",
            description: "It is producing written, visual, or multimedia materials designed to communicate your brand story and achieve business objectives."
        },
        {
            title: "What types of content do you deliver?",
            description: "Blogs, videos, graphics, social media assets, case studies, interactive tools, and more."
        },
        {
            title: "Can you handle content for my industry?",
            description: "Yes. We create customized content strategies for a wide range of industries."
        },
        {
            title: "How do you ensure quality?",
            description: "Multi-step editing, senior editor reviews, and fact-checking maintain high standards."
        },
        {
            title: "Is your content SEO-optimized?",
            description: "All content is written and structured for visibility, engagement, and conversions."
        },
        {
            title: "What is the typical turnaround time?",
            description: "1–3 weeks for first drafts, depending on project size and complexity."
        },
        {
            title: "Can I review content before publishing?",
            description: "Yes. Drafts are shared at every stage for your approval."
        },
        {
            title: "How is pricing determined?",
            description: "Pricing is customized based on content type, volume, and complexity."
        }
    ];

    return <FAQs data={data} />;
};