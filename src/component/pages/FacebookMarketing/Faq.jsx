import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How much budget do I need for Facebook Ads?",
            description: "You can start with as little as ₹5,000 per month. We help you use that budget smartly and optimize campaigns to get the best results for your goals."
        },
        {
            title: "How soon can I see results?",
            description: "Most clients start seeing momentum in 7–10 days. Full results and deeper ROI usually show up by week 3 or 4, depending on your campaign."
        },
        {
            title: "What if my ads don’t work?",
            description: "We keep testing and improving your ads. We try new creatives, targeting options, and messages until the campaigns start performing well."
        },
        {
            title: "Is ad design included?",
            description: "Yes. Every plan includes ad creatives designed to get results. You don’t need to worry about making your own ads."
        },
        {
            title: "Can I run Instagram ads too?",
            description: "Yes! We can run ads on both Facebook and Instagram using Meta Ads Manager. Your campaigns work together across both platforms for better reach."
        }
    ];

    return <FAQs data={data} />;
};