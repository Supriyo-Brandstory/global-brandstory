import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How quickly can I expect YouTube marketing results?",
            description: "Most clients see early engagement and subscriber growth within 2–4 weeks; revenue and lead lift usually appear by month two."
        },
        {
            title: "What content types work best for my industry?",
            description: "We audit top-performing formats—tutorials, comparisons, testimonials—and tailor your content mix to achieve your goals."
        },
        {
            title: "How is YouTube SEO different from regular SEO?",
            description: "YouTube SEO focuses on watch time and engagement with keyword-rich titles, descriptions, tags, and optimized metadata."
        },
        {
            title: "Can you handle creative and paid promotions together?",
            description: "Yes. We deliver end-to-end campaigns, managing ideation, production, and paid/organic promotion in one workflow."
        },
        {
            title: "How do you measure campaign ROI?",
            description: "We track views, subscribers, watch time, clicks, and conversions, reporting against business objectives."
        },
        {
            title: "Can you integrate YouTube with my CRM or website?",
            description: "Absolutely. We set up tracking and conversion pixels to align YouTube traffic with your sales funnel."
        }
    ];

    return <FAQs data={data} title="FAQs" />;
};