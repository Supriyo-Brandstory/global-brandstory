import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much does a custom front-end development project cost?",
            description: "Costs vary based on project complexity, features, and integrations. We provide a detailed, transparent quote after a discovery session."
        },
        {
            title: "How long does a typical project take?",
            description: "Small websites can take a few weeks, while complex web applications may take several months. Timelines are defined clearly with milestones."
        },
        {
            title: "What is the difference between front-end and back-end development?",
            description: "Front-end is what users interact with—the interface, visuals, and experience. Back-end handles server logic, databases, and APIs. We specialize in the front-end for flawless user experiences."
        },
        {
            title: "Do you offer post-launch maintenance and support?",
            description: "Yes, we provide ongoing support, performance monitoring, and updates to ensure your application remains secure and high-performing."
        }
    ];

    return <FAQs data={data} />;
};