import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "What’s the minimum budget to start Google Ads?",
            description:
                "A starting budget of $500–$1000/month is recommended. This allows for controlled testing and enough click/conversion data to make meaningful optimizations before scaling."
        },
        {
            title: "How soon can I see results?",
            description:
                "Initial insights appear within 7–10 days. Most campaigns reach optimized performance in 30–45 days under structured Google Ads management."
        },
        {
            title: "Do you handle Performance Max campaigns?",
            description:
                "Yes. We fully manage Performance Max campaigns, optimizing product feeds, creative assets, and audience signals to ensure meaningful contributions to conversions and ROAS."
        },
        {
            title: "Can you manage international Google Ads campaigns?",
            description:
                "Absolutely. We manage global campaigns across North America, MENA, Southeast Asia, and Europe, including localization, currency alignment, policy compliance, and timezone-specific delivery."
        },
        {
            title: "Do you offer landing page optimization too?",
            description:
                "Yes. Landing pages are optimized for message relevance, clarity, layout improvements, and stronger CTAs to increase conversion rates."
        },
        {
            title: "How do you ensure ROI?",
            description:
                "ROI is built from day one using precise tracking, attribution, creative testing, and smart budget allocation to prioritize high-return opportunities."
        }
    ];

    return <FAQs data={data} />;
};
