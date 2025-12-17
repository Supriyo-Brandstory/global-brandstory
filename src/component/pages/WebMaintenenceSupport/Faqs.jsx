import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much do your services cost?",
            description: "Our pricing is customized based on your website platform, complexity, and scope. We provide a detailed, transparent proposal after an initial audit."
        },
        {
            title: "What's the difference between software maintenance and support?",
            description: "Maintenance is proactive, focusing on improving your website’s performance and security over time. Support is reactive, helping users when issues arise. We offer a seamless blend of both."
        },
        {
            title: "Can you support our legacy website?",
            description: "Yes. We specialize in maintaining and securing legacy websites, ensuring they remain functional and secure while planning for a strategic modernization."
        },
        {
            title: "What is your response time for a critical issue?",
            description: "We offer customizable Service Level Agreements (SLAs) with guaranteed response times, ranging from 24-hour support to immediate action for mission-critical systems."
        }
    ];

    return <FAQs data={data} />;
};