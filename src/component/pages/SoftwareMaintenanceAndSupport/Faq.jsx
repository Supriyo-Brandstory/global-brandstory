import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How much do your services cost?",
            description: "Pricing is tailored based on the complexity of your software, technology stack, and project scope. After an initial audit, we provide a transparent proposal so you know exactly what to expect."
        },
        {
            title: "What’s the difference between software maintenance and support?",
            description: "Maintenance is proactive, focusing on enhancing performance, security, and stability. Support is reactive, assisting users when issues arise. Our services combine both approaches seamlessly to keep your software reliable."
        },
        {
            title: "Can you support legacy software?",
            description: "Absolutely. We specialize in modernizing and maintaining legacy applications while planning strategic transitions to ensure longevity and compliance."
        },
        {
            title: "What is your response time for critical issues?",
            description: "We offer customizable Service Level Agreements (SLAs), ranging from 24-hour response to immediate action for mission-critical systems, ensuring minimal disruption to your operations."
        }
    ];

    return <FAQs data={data} />;
};