import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "Can TikTok work for B2B?",
            description: "Yes. TikTok is effective for B2B when used for employer branding, recruitment campaigns, and thought leadership content—especially in sectors like EdTech, SaaS, and finance."
        },
        {
            title: "What is the average campaign length?",
            description: "We recommend running campaigns for at least 6 weeks to capture trends, analyze performance, and optimize content for maximum impact."
        },
        {
            title: "Will I get help with content ideas?",
            description: "Absolutely. Our team supports ideation, trend spotting, scripting, and creating detailed briefs for creators."
        },
        {
            title: "Can you track conversions from TikTok ads?",
            description: "Yes. We implement TikTok Pixel and UTM tracking to monitor traffic, leads, sales, and other key actions from every campaign."
        },
        {
            title: "Do you work with micro Ji-influencers?",
            description: "Definitely. We collaborate with creators across all tiers—micro, mid-tier, and macro—to match your audience, niche, and budget."
        },
        {
            title: "Is TikTok marketing right for my industry?",
            description: "Yes. We’ve run successful campaigns across beauty, D2C, fitness, EdTech, and more, tailoring strategies to fit the specific needs of each sector."
        }
    ];

    return <FAQs data={data} title="FAQs" />;
};