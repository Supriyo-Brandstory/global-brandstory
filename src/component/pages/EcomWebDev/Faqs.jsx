import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much does a custom ecommerce website cost?",
            description: "Pricing depends on platform, features, and complexity. We provide a transparent quote after a discovery call to understand your specific needs."
        },
        {
            title: "How long does a typical ecommerce project take?",
            description: "Small to medium stores take 8–12 weeks. Large, complex platforms may take several months. We provide a clear timeline with milestones."
        },
        {
            title: "Do you offer post-launch maintenance and support?",
            description: "Yes, we offer ongoing maintenance, updates, and performance monitoring to ensure your site remains secure and high-performing."
        },
        {
            title: "Is mobile responsiveness included in your services?",
            description: "Absolutely. All our sites are built mobile-first to deliver a seamless shopping experience across all devices."
        }
    ];

    return <FAQs data={data} />;
};