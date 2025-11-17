import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How do you ensure LinkedIn content attracts senior decision-makers?",
            description: "We build personas using LinkedIn filters, analyze what C-levels engage with, and write content designed for relevance and authority."
        },
        {
            title: "What’s your process for integrating LinkedIn campaigns with ABM?",
            description: "We map ABM accounts from your CRM, serve personalized content by stage, and track account-level engagement for sales enablement."
        },
        {
            title: "How do you measure and improve lead quality?",
            description: "We use firmographic filters and sales feedback to refine campaigns toward higher-fit leads, not just high volume."
        },
        {
            title: "What strategies work best for long B2B sales cycles?",
            description: "Multi-touch journeys using retargeting, InMail, sequential content, and webinars to stay visible and build trust over time."
        },
        {
            title: "Do you ensure compliance with LinkedIn and global data laws?",
            description: "Yes. We follow GDPR, CCPA, and platform policies with full transparency on data usage, disclosures, and consent."
        },
        {
            title: "Can you handle technical or niche industries?",
            description: "We work with internal SMEs, conduct industry research, and craft messaging that resonates with specialized buyers."
        },
        {
            title: "How does content approval work?",
            description: "You get a shared review portal, with briefs, calendars, and full approval control before anything goes live."
        }
    ];

    return <FAQs data={data} title="FAQs" />;
};