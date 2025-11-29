import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "What is performance marketing?",
            description: "Performance marketing is a results-driven digital strategy where you pay only for specific actions—like clicks, leads, or purchases—rather than general visibility."
        },
        {
            title: "Is performance marketing suitable for startups?",
            description: "Absolutely. It’s ideal for startups looking to grow efficiently, as it offers real-time tracking, budget control, and measurable ROI from day one."
        },
        {
            title: "How is performance marketing different from digital marketing?",
            description: "Digital marketing covers a broad range of tactics, including brand awareness. Performance marketing focuses strictly on measurable outcomes and return on ad spend (ROAS)."
        },
        {
            title: "How do you measure success in performance marketing?",
            description: "Success is tracked using key metrics like ROAS (Return on Ad Spend), CTR (Click-Through Rate), CAC (Customer Acquisition Cost), and overall conversions."
        },
        {
            title: "Do you run multi-channel performance campaigns?",
            description: "Yes. We execute integrated campaigns across platforms like Google Ads, Meta (Facebook & Instagram), LinkedIn, and various programmatic networks."
        },
        {
            title: "When can I expect to see results?",
            description: "Most clients start seeing early performance insights within 2–4 weeks, depending on ad spend, industry, and platform maturity."
        }
    ];

    return <FAQs data={data} />;
};