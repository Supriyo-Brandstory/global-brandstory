import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much do your marketing video services cost?",
            description: "Costs are customized based on video length, style (animation vs. live-action), and complexity. We provide transparent, fixed-fee quotes after an initial strategic briefing."
        },
        {
            title: "How long does the production process take?",
            description: "Typically, 4–8 weeks from strategy session to final delivery, depending on scope and complexity."
        },
        {
            title: "Do you help with video distribution and promotion?",
            description: "Yes. We provide guidance on distribution, platform optimization, and repurposing content for maximum ROI."
        },
        {
            title: "What’s the optimal length for a marketing video?",
            description: "It depends on your goal and platform. Website hero videos usually run 60–90 seconds, while social media cuts range from 15–30 seconds for maximum engagement."
        }
    ];

    return <FAQs data={data} />;
};