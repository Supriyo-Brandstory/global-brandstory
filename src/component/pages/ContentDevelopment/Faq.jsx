import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "What is content development?",
            description: "Content development is the complete process of researching, creating, editing, optimizing, and publishing content. The goal is not just to create material but to ensure it aligns with your business objectives and delivers real value to your audience."
        },
        {
            title: "How is it different from content marketing?",
            description: "Content development focuses on producing the actual content—blogs, videos, graphics, etc. Content marketing, on the other hand, is about promoting that content to the right audience through campaigns, ads, or distribution strategies."
        },
        {
            title: "What types of content can you produce?",
            description: "We work across formats including blogs, articles, website copy, videos, infographics, social media posts, email campaigns, whitepapers, and more, tailored to your audience and goals."
        },
        {
            title: "How long does content development take?",
            description: "The timeline depends on project size and complexity. However, most projects see their first deliverables within 2–4 weeks, with larger campaigns requiring more time for research and production."
        },
        {
            title: "Do you provide SEO optimization?",
            description: "Yes. Every piece of content is optimized for search engines while staying engaging for readers. We use keyword research, readability checks, and SEO best practices to improve visibility and reach."
        },
        {
            title: "Can you develop content for my industry?",
            description: "Absolutely. We’ve delivered tailored content strategies for industries like healthcare, finance, SaaS, retail, and beyond. No matter your sector, we adapt to your brand voice and audience needs."
        },
        {
            title: "How do you ensure content quality?",
            description: "Each piece of content goes through multiple levels of editing and quality checks. This includes proofreading, fact-checking, tone alignment, and ensuring consistency with your brand guidelines."
        },
        {
            title: "What does content development cost?",
            description: "There’s no one-size-fits-all cost. Pricing depends on project scope, type of content, and delivery timelines. After a free consultation, we provide a transparent custom quote that fits your needs."
        }
    ];

    return <FAQs data={data} />;
};