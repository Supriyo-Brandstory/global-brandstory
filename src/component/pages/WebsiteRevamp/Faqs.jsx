import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much does a website revamp cost?",
            description: "The cost is customized based on complexity, scope, and technical requirements. We provide a transparent quote after a detailed audit."
        },
        {
            title: "How long does a typical website redesign project take?",
            description: "Projects range from a few weeks to several months, depending on page count, integrations, and content migration. We define a clear timeline with milestones."
        },
        {
            title: "Will my SEO rankings be affected by the redesign?",
            description: "We follow a careful SEO migration strategy, including 301 redirects and a new sitemap, to preserve and improve search rankings."
        },
        {
            title: "Will my website be mobile-friendly after the revamp?",
            description: "Yes. A mobile-first approach ensures your website performs flawlessly across all devices."
        }
    ];

    return <FAQs data={data} />;
};