import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much does a hybrid app cost?",
            description: "Costs vary depending on complexity, features, and integrations. Generally, hybrid apps are more cost-effective than building two native apps. We provide a transparent quote after a discovery call."
        },
        {
            title: "How long does a typical project take?",
            description: "Development typically ranges from a few months to a year, depending on scope. Timelines are established with clear milestones."
        },
        {
            title: "Can hybrid apps perform as well as native apps?",
            description: "Yes. Modern frameworks like Flutter and React Native deliver near-native performance for most use cases."
        },
        {
            title: "What is the main difference between Flutter and React Native?",
            description: "Flutter uses Google’s Dart language to create visually rich apps. React Native, developed by Meta, uses JavaScript and React, making it familiar to web developers."
        }
    ];

    return <FAQs data={data} />;
};