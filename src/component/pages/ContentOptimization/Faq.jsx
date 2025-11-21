import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How does your content optimization process work?",
            description:
                "We start with an audit, identify opportunities, integrate strategic keywords, improve on-page elements, and enhance user experience. Every step is designed to increase traffic and conversions."
        },
        {
            title: "Can you optimize existing content, or only create new content?",
            description:
                "We do both. Existing content is carefully refined to perform better, while new content is created to support your business goals and audience needs."
        },
        {
            title: "When will I see results?",
            description:
                "Most clients notice improvements in rankings, engagement, and leads within one to three months, depending on the scope of work and competitive landscape."
        },
        {
            title: "Which tools do you use?",
            description:
                "We rely on analytics platforms, SEO software, and workflow tools to gather insights, track performance, and make data-driven decisions, all without overcomplicating the process."
        },
        {
            title: "Is content optimization a one-time service?",
            description:
                "Ongoing optimization is recommended. Search trends and user behavior evolve constantly, so we monitor performance and refresh content periodically to maintain results."
        },
        {
            title: "How do you measure success?",
            description:
                "We track metrics like organic traffic, keyword rankings, engagement, conversions, and ROI. Regular reports ensure you always know the impact of your content."
        },
        {
            title: "Which industries do you serve?",
            description:
                "We work across technology, healthcare, finance, retail, and more, providing strategies tailored for both B2B and B2C businesses."
        }
    ];

    return <FAQs data={data} />;
};
