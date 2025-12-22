import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "What is App Maintenance and Support Services?",
            description: "It is the process of keeping applications secure, updated, and high performing while fixing bugs and ensuring smooth user experience."
        },
        {
            title: "How do you handle downtime on an application?",
            description: "We monitor systems 24/7 and provide quick fixes or backups to minimize disruption and restore uptime fast."
        },
        {
            title: "What is the difference between Application Maintenance and Support?",
            description: "Maintenance focuses on updates, upgrades, and bug fixes. Support helps resolve issues users face in real time."
        },
        {
            title: "What does extended support mean?",
            description: "It refers to continued updates, security patches, and troubleshooting even after the standard service period ends."
        },
        {
            title: "Why is Application Maintenance important?",
            description: "It ensures stability, security, and performance. It helps businesses avoid downtime and deliver smooth digital experiences."
        }
    ];

    return <FAQs data={data} />;
};