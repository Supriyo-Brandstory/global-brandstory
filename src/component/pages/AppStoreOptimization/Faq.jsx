import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How long does it take to see ASO results?",
            description: "Initial keyword ranking improvements are visible in 2–4 weeks. Significant growth in organic downloads and conversion rates usually takes 2–3 months of consistent optimization."
        },
        {
            title: "How is ASO different from SEO?",
            description: "While both focus on organic visibility, ASO is specific to app stores. It relies heavily on visuals, ratings, reviews, and download velocity, which differ from website SEO."
        },
        {
            title: "How much do your ASO services cost?",
            description: "Pricing is customized based on your app’s complexity, target market, and scope of work. We provide a transparent, detailed quote after a strategic discovery call."
        },
        {
            title: "Do you work with both new and existing apps?",
            description: "Absolutely. We design pre-launch strategies for new apps and ongoing optimization plans for existing apps needing performance improvement."
        }
    ];

    return <FAQs data={data} />;
};