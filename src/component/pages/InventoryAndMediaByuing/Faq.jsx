import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "What’s the difference between programmatic and direct media buying?",
            description: "Programmatic uses automated bidding and real-time targeting. Direct buying secures fixed placements through publisher relationships."
        },
        {
            title: "Do you offer platform-specific buying like Meta or Amazon DSP?",
            description: "Yes. We support platform-specific inventory buying through DSPs and partner platforms."
        },
        {
            title: "What’s the minimum budget for inventory buying?",
            description: "We recommend a starting budget of $2,000–$5,000 depending on the channel and scope."
        },
        {
            title: "Can you guarantee ad placement visibility?",
            description: "We ensure high-quality, brand-safe inventory and provide full transparency on where your ads appear."
        },
        {
            title: "Do you provide real-time campaign data and dashboards?",
            description: "Absolutely. Our campaign reporting tools offer live access to key metrics, pacing, and results."
        }
    ];

    return <FAQs data={data} />;
};