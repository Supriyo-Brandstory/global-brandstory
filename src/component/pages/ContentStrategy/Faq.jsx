import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "What is a content strategy, and why do I need one?",
            description: "A content strategy is a plan for creating and managing content that aligns with your business goals. It ensures every post, article, or campaign reaches the right audience and drives measurable results."
        },
        {
            title: "How is content strategy different from content marketing?",
            description: "Content strategy is the planning and organization of your content, while content marketing is the execution—publishing, promoting, and distributing it to achieve results."
        },
        {
            title: "What steps are involved in creating a content strategy?",
            description: "We audit existing content, research your audience, set objectives, plan topics and channels, and track performance to ensure every piece contributes to your goals."
        },
        {
            title: "When will I see results from a content strategy?",
            description: "Clients typically notice improved engagement, traffic, and leads within 3–6 months, depending on campaign scope and consistency."
        },
        {
            title: "Do you provide strategies for both B2B and B2C brands?",
            description: "Yes. Our strategies are tailored to the specific needs of B2B and B2C businesses, ensuring relevance and impact for your target audience."
        },
        {
            title: "How do you measure if the strategy is working?",
            description: "We track key metrics like website traffic, engagement, leads, conversions, and ROI, using data to continuously refine the strategy."
        },
        {
            title: "Will we be involved in the strategy process?",
            description: "Absolutely. We collaborate with your team at every stage to align the strategy with your goals, brand voice, and audience needs."
        }
    ];

    return <FAQs data={data} />;
};