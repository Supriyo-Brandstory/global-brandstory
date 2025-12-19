import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much does a cross-platform app cost?",
            description: "Costs depend on app complexity, features, and integrations. Typically, cross-platform apps are more cost-effective than two separate native apps. We provide a detailed, transparent quote after a discovery call."
        },
        {
            title: "How long does a typical project take?",
            description: "Timelines vary by complexity but are generally shorter than building separate native apps—from a few months to a year. Milestones and schedules are shared upfront."
        },
        {
            title: "Can cross-platform apps perform as well as native apps?",
            description: "Yes. Frameworks like Flutter and React Native deliver near-native performance and user experience. For most use cases, users won’t notice the difference."
        },
        {
            title: "What is the main difference between Flutter and React Native?",
            description: "<ul><li>Flutter: Uses Dart, offers high-performance UI and smooth animations.</li><li>React Native: Uses JavaScript and React, ideal for teams with web development expertise.</li><ul>"
        }
    ];

    return <FAQs data={data} />;
};