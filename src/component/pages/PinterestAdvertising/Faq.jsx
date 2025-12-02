import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "What are Pinterest ad services?", 
            description: "Pinterest ads are paid pins shown to the right people to drive traffic, engagement, or sales. They help your brand reach people who are actively looking for ideas and products."
        },
        {
            title: "Is Pinterest good for ecommerce?", 
            description: "Yes. Pinterest is excellent for product discovery, especially for fashion, home décor, lifestyle, and wellness products. Users come to Pinterest looking for inspiration, which makes them more likely to take action."
        },
        {
            title: "What’s the ideal ad budget to start?", 
            description: "For testing and learning, a budget of $500–$1000 per month works well. This helps you understand what resonates with your audience before scaling."
        },
        {
            title: "Can I track Pinterest ad ROI?", 
            description: "Yes. Tools like Pinterest Tag and conversion tracking show how your ads perform, so you can measure traffic, clicks, and sales."
        },
        {
            title: "Which ad formats perform best?", 
            description: "Video pins and carousel ads usually get the most engagement because they are visually appealing and interactive."
        },
        {
            title: "How long before results appear?", 
            description: "With the right creative and audience targeting, most brands start seeing measurable results in 2–4 weeks."
        }
    ];

    return <FAQs data={data} />;
};