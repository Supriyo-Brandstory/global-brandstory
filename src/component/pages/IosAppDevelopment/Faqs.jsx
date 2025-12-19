import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much does a custom iOS app cost?",
            description: "Cost varies based on complexity, features, and project scope. We provide a transparent quote after a thorough discovery call."
        },
        {
            title: "How long does a typical app development project take?",
            description: "Simple apps may take a few months; complex, feature-rich platforms can exceed a year. Clear milestones are established upfront."
        },
        {
            title: "Do you offer post-launch maintenance and support?",
            description: "Yes. We offer comprehensive maintenance packages to ensure your app remains secure, updated, and high-performing."
        },
        {
            title: "What is the difference between native and cross-platform development?",
            description: "Native development uses Swift for iOS, delivering superior performance, UX, and access to device features. Cross-platform builds a single app for multiple platforms, which can compromise performance and native functionality."
        }
    ];

    return <FAQs data={data} />;
};