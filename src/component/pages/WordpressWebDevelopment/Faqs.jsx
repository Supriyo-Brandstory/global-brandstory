import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much does custom WordPress development cost?",
            description: "Costs vary depending on the project’s complexity, features, and pages. We provide a transparent quote after a thorough discovery call to understand your needs."
        },
        {
            title: "How long does a typical project take?",
            description: "Simple sites can take a few weeks. Complex, custom-coded platforms may require several months. We set a phased timeline upfront for clear expectations."
        },
        {
            title: "Do you offer post-launch maintenance and support?",
            description: "Yes. Our WordPress maintenance services include updates, performance monitoring, security, and SEO optimization to ensure long-term site success."
        },
        {
            title: "What is a headless WordPress website?",
            description: "Headless WordPress separates the front-end from the back-end, allowing lightning-fast performance, enhanced security, and modern frameworks while still using WordPress as the CMS."
        }
    ];

    return <FAQs data={data} />;
};