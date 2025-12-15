import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much does a custom landing page cost?",
            description: "The cost of a landing page depends on factors such as design complexity, integrations, functionality, and the number of variations needed. After a discovery call, we provide a detailed and transparent quote tailored to your project requirements."
        },
        {
            title: "How long does a typical landing page project take?",
            description: "Most projects are completed within 2–4 weeks. Timelines vary depending on the level of customization, A/B testing requirements, and the number of deliverables included."
        },
        {
            title: "Do you offer post-launch optimization services?",
            description: "Absolutely. Beyond launch, we provide ongoing A/B testing, heatmap analysis, and conversion rate optimization (CRO) services to continually refine performance and maximize ROI."
        },
        {
            title: "What is the difference between a landing page and a homepage?",
            description: "A landing page is highly focused, designed with a single objective—whether that’s capturing leads, driving sales, or promoting an event. A homepage, on the other hand, is broader in scope, serving as a gateway to multiple sections of your website and offering general business information."
        },
        {
            title: "Which platforms do you use for development?",
            description: "We work with a range of platforms, including WordPress, Webflow, Unbounce, Instapage, Leadpages, and fully custom-coded solutions. The choice depends on your goals, flexibility needs, and long-term scalability."
        }
    ];

    return <FAQs data={data} />;
};