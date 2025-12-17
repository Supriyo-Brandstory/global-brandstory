import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How much does a custom Shopify store cost?",
            description: "The cost depends on features, complexity, and page count. After a discovery call, we provide a detailed, transparent quote."
        },
        {
            title: "How long does a Shopify development project take?",
            description: "A simple store takes 8–12 weeks. Complex Shopify Plus projects may take several months. We share clear timelines upfront."
        },
        {
            title: "Do you provide post-launch maintenance and support?",
            description: "Yes. We offer ongoing support, SEO optimization, and performance monitoring to keep your store secure and competitive."
        },
        {
            title: "What’s the difference between a custom theme and a pre-made theme?",
            description: "Pre-made themes are generic, with limited flexibility. A custom Shopify theme is coded from scratch to match your brand, offer better performance, and deliver a unique customer experience."
        }
    ];

    return <FAQs data={data} />;
};