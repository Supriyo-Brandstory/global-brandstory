import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How much does a custom Magento store cost?",
            description: "Pricing depends on project complexity, features, and integrations. We provide transparent quotes after a discovery call."
        },
        {
            title: "How long does a typical Magento development project take?",
            description: "A standard store can take a few months, while complex enterprise platforms may take a year or more. We provide a clear timeline with milestones."
        },
        {
            title: "Do you offer ongoing maintenance and support?",
            description: "Yes, we offer comprehensive Magento maintenance and support packages to keep your store secure, updated, and high-performing."
        },
        {
            title: "Why choose Magento over platforms like Shopify?",
            description: "Magento offers unmatched flexibility and customization for complex catalogs, B2B logic, and deep integrations, ideal for businesses aiming for growth without compromise."
        }
    ];

    return <FAQs data={data} />;
};