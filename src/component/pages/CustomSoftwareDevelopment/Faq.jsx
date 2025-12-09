import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How much does custom software development cost?",
            description: "Costs vary depending on project complexity, required features, technology stack, and timeline. We provide a detailed, transparent quote after a discovery call to ensure there are no surprises."
        },
        {
            title: "How long does a project take?",
            description: "Timelines depend on the scope. An MVP can typically be delivered within a few months, while complex enterprise solutions may take a year or more. We provide clear, phased timelines upfront so you know what to expect at every stage."
        },
        {
            title: "Do I own the source code?",
            description: "Yes. All intellectual property, including the source code, belongs to you upon project completion and final payment."
        },
        {
            title: "How do you ensure security and reliability?",
            description: "We follow rigorous quality assurance processes, including manual and automated testing, code reviews, and security audits, to deliver a robust, secure, and reliable product."
        }
    ];

    return <FAQs data={data} />;
};