import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much does a custom back-end development project cost?",
            description: "Costs vary based on complexity, features, and integrations. After a discovery call, we provide a transparent, detailed quote."
        },
        {
            title: "How long does a typical project take?",
            description: "Small apps may take a few weeks; complex enterprise platforms can take several months. We provide clear timelines with milestones."
        },
        {
            title: "What is the difference between front-end and back-end development?",
            description: "Front-end is what users see and interact with. Back-end powers the application behind the scenes—databases, APIs, and server logic."
        },
        {
            title: "Do you offer post-launch maintenance and support?",
            description: "Yes. We provide ongoing maintenance, monitoring, and optimization to keep your back-end secure and high-performing."
        }
    ];

    return <FAQs data={data} />;
};