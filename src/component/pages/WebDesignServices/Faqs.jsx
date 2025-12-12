import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much does a custom website cost?",
            description: "Pricing varies based on the project’s complexity, features, and number of pages. After a discovery call, we provide a detailed, transparent quote tailored to your needs."
        },
        {
            title: "How long does a typical web design project take?",
            description: "The timeline depends on the project size. Small websites usually take 4–6 weeks, while large e-commerce platforms may take several months. We define clear milestones upfront so you always know the progress."
        },
        {
            title: "Do you offer post-launch maintenance and support?",
            description: "Yes. We provide ongoing maintenance and support to ensure your website stays secure, up-to-date, and performs at its best."
        },
        {
            title: "Is responsive design included?",
            description: "Absolutely. Every website is built mobile-first, guaranteeing flawless functionality and a seamless user experience across desktops, tablets, and smartphones."
        }
    ];

    return <FAQs data={data} />;
};