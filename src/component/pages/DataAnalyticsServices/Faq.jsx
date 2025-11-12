import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "What are data analytics services?",
            description: "Data analytics services help your business collect, organize, and understand data so you can make informed decisions. Whether it’s customer behavior, sales trends, or internal performance, these services turn raw information into insights you can act on."
        },
        {
            title: "How is big data analytics different from regular analytics?",
            description: "Big data analytics services are built for speed and scale. They work on huge volumes of fast-moving data from multiple sources—think millions of records in real time. Traditional analytics usually focuses on smaller, structured datasets that are easier to manage but slower to update."
        },
        {
            title: "What is DAaaS (Data Analytics as a Service)?",
            description: "Data analytics as a service (DAaaS) means you get a full analytics setup, tools, reports, and insights without having to hire a team or build systems yourself. It’s a flexible, cloud-based model that gives you access to experts and results, on demand."
        },
        {
            title: "What tools do you use for analytics?",
            description: "We work with a range of popular and powerful platforms like Power BI, Tableau, Google Data Studio, Snowflake, and more. We choose tools based on what fits best for your goals, data sources, and team skills."
        },
        {
            title: "Can you support my industry?",
            description: "Absolutely. Our team has experience across industries including retail, healthcare, SaaS, finance, e-commerce, and manufacturing. We build custom solutions that fit your specific workflows, data needs, and KPIs."
        },
        {
            title: "How long does it take to get everything set up?",
            description: "It depends on the size and complexity of your systems. Most projects take between 4 to 12 weeks from planning and integration to full reporting. We always share a clear timeline before starting."
        }
    ];

    return <FAQs data={data} />;
};