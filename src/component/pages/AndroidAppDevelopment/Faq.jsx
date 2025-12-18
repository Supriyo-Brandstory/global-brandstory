import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How much does a custom Android app cost?",
            description: "Costs depend on complexity, features, and timeline. We provide a detailed, transparent quote after a discovery call to understand your needs."
        },
        {
            title: "How long does an app development project take?",
            description: "A simple app may take a few months, while a complex, feature-rich platform can take over a year. We provide a clear project timeline with milestones."
        },
        {
            title: "Do you offer post-launch support?",
            description: "Yes, we offer comprehensive maintenance and optimization services to keep your app secure, updated, and high-performing."
        },
        {
            title: "What’s the difference between native and cross-platform development?",
            description: "Native apps (our specialty) deliver superior performance, a better UX, and full access to device features. Cross-platform apps can run on multiple devices but may sacrifice performance and native functionality."
        }
    ];

    return <FAQs data={data} />;
};