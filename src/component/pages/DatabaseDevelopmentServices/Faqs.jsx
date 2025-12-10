import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much do your services cost?",
            description: "Pricing is highly customized, dependent on project complexity, scope, and technologies. We provide a transparent, detailed proposal after a discovery session."
        },
        {
            title: "How long does a typical database development project take?",
            description: "Timelines vary. Small projects may take a few weeks, while complex enterprise solutions can take several months. We provide a phased, clear timeline upfront."
        },
        {
            title: "Do you offer support after deployment?",
            description: "Yes. We provide maintenance and support to keep your database secure, optimized, and performing at its best."
        },
        {
            title: "What is the difference between SQL and NoSQL databases?",
            description: "<ul><li><b>SQL:</b>Table-based, structured, and ideal for relational data.</li><li><b>NoSQL:</b> Flexible, schema-less, and suitable for unstructured or high-volume data.</li></ul>"
        }
    ];

    return <FAQs data={data} />;
};