import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much does enterprise software development cost?",
            description: "Costs vary based on complexity, features, and timeline. We provide transparent, detailed quotes after a discovery call."
        },
        {
            title: "How long does a project typically take?",
            description: "Timelines range from a few months for MVPs to over a year for large-scale solutions. We define clear phases upfront."
        },
        {
            title: "Do you offer post-launch maintenance and support?",
            description: "Yes. Our team ensures your application stays secure, updated, and optimized long after launch."
        },
        {
            title: "What is the difference between enterprise software and regular software?",
            description: "Enterprise software supports large-scale operations, integrates multiple workflows, and addresses complex organizational needs, unlike regular software which is built for smaller, individual tasks."
        }
    ];

    return <FAQs data={data} />;
};