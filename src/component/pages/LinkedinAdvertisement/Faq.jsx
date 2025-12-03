import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "What Is The Minimum LinkedIn Ad Budget?",
            description: "The minimum budget starts at ₹15,000 per month. This budget is enough to run campaigns that generate quality leads and show real results."
        },
        {
            title: "How Long Does It Take To See Results?",
            description: "Most campaigns start to show traction in 2–3 weeks. With continuous monitoring and optimization, results keep improving over time."
        },
        {
            title: "Is LinkedIn Good For Small B2B Brands?",
            description: "Yes! LinkedIn is perfect for small and niche B2B brands. It helps you reach the right audience and get leads from people who are ready to buy."
        },
        {
            title: "Can I Target Job Roles Or Company Size?",
            description: "Absolutely. LinkedIn allows you to target people by job title, industry, company size, seniority, and more. This ensures your ads reach the most relevant audience."
        },
        {
            title: "Do You Create Ad Creatives Too?",
            description: "Yes, we handle everything. We create ad copy, visuals, and test different calls-to-action to find what works best for your campaign."
        },
        {
            title: "How Do You Measure Campaign Success?",
            description: "We measure performance using CTR (click-through rate), CPL (cost per lead), conversion rate, and ROAS (return on ad spend). These metrics guide every decision to improve your campaigns."
        }
    ];

    return <FAQs data={data} />;
};