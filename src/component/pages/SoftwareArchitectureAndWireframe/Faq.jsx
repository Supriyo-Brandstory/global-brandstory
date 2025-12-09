import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How much do software architecture and wireframe services cost?",
            description: "Costs vary depending on project complexity, number of features, and documentation needs. We provide a transparent proposal after a discovery call."
        },
        {
            title: "What is the typical project timeline?",
            description: "Timelines range from a few weeks for basic wireframes to several months for complex enterprise solutions. We define milestones at the start to ensure clarity."
        },
        {
            title: "Can you work with our in-house development team?",
            description: "Absolutely. We provide a strategic blueprint and detailed documentation to empower your team to build efficiently."
        },
        {
            title: "What’s the difference between a wireframe and a mockup?",
            description: "Wireframes are low-fidelity layouts focusing on structure and functionality. Mockups are high-fidelity designs showing the final visual look."
        }
    ];

    return <FAQs data={data} />;
};