import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "What makes Local SEO different from general SEO?",
            description: "Local SEO helps your business appear in results when people search for services in a specific area. It focuses on Google Maps, “near me” queries, and local directories."
        },
        {
            title: "How soon can I expect results?",
            description: "Most clients start seeing improvement within 2–3 months. Local SEO builds steadily, and we aim for consistent growth over time."
        },
        {
            title: "Can you manage multiple business locations?",
            description: "Yes. We build individual location strategies to ensure each branch is optimized, ranked, and managed consistently."
        },
        {
            title: "What do I need to provide to get started?",
            description: "We’ll need access to your Google Business Profile (if already created), website login (if content needs updates), and basic business info to build citations."
        },
        {
            title: "What reporting will I receive?",
            description: "You’ll get clear, monthly reports showing local keyword rankings, profile performance, citation status, and recommendations."
        }
    ];

    return <FAQs data={data} />;
};