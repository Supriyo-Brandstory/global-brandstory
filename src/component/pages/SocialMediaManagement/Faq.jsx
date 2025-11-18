import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "What does a social media management company do?",
            description: "We plan, create, post, and manage content across your social platforms to grow your brand and engagement."
        },
        {
            title: "Which platforms should my brand be on?",
            description: "It depends on your audience—Instagram, LinkedIn, Facebook, X, YouTube, and TikTok are the most common."
        },
        {
            title: "Can you handle both content and engagement?",
            description: "Yes. We manage content creation, scheduling, DMs, and real-time interactions."
        },
        {
            title: "How do you measure social media success?",
            description: "We track reach, engagement, clicks, growth, and conversions using live dashboards."
        },
        {
            title: "Do you offer support for paid campaigns?",
            description: "Yes, integrated campaigns on Meta, LinkedIn, TikTok, and Instagram are included."
        },
        {
            title: "How soon will we see results?",
            description: "Engagement grows within 4–6 weeks. Strong brand impact develops over 3 months."
        }
    ];

    return <FAQs data={data} />;
};