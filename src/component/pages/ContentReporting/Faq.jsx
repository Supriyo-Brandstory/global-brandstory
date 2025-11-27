import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "What is content reporting and why do I need it?",
            description: "Content reporting tracks and analyzes your content's performance across channels. This helps you make data-driven decisions to improve marketing results."
        },
        {
            title: "Which metrics are included in your content reports?",
            description: "Our reports include key metrics like page views, engagement, conversions, source of traffic, and custom KPIs tailored to your goals."
        },
        {
            title: "How often do you provide content performance reports?",
            description: "We typically deliver reports monthly, but can adjust the schedule for weekly or quarterly depending on your requirements."
        },
        {
            title: "Can you customize reports for my business needs?",
            description: "Yes, every report is tailored to highlight metrics that align with your specific objectives and preferred content channels."
        },
        {
            title: "What does a sample content report look like?",
            description: "A typical report includes clear charts, breakdowns by channel and content type, and concise recommendations for action."
        },
        {
            title: "How do I get started with your content reporting services?",
            description: "Simply request a demo or schedule a call and our team will walk you through the setup and reporting process."
        }
    ];

    return <FAQs data={data} />;
};