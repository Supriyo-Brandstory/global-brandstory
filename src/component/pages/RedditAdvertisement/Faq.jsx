import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "Is Reddit Good For Advertising?",
            description: "Yes. Reddit is very good for showing ads to small groups of people who really care about the topic. It helps your brand start talks and connect with these communities. Ads feel natural when they match the group’s style."
        },
        {
            title: "How Much Does Reddit Advertising Cost?",
            description: "Ads usually start at $0.75–$2 per 1,000 views (CPM). The total budget can change depending on how many people you want to reach, which subreddits you pick, and how long you run the ads."
        },
        {
            title: "Can I Target Specific Subreddits?",
            description: "Yes. You can choose the communities where your audience spends time. This way, your ads reach the right people who are most interested in your brand."
        },
        {
            title: "How Is Reddit Advertising Different From Facebook Or Google?",
            description: "Reddit is all about communities. Ads work best when they match the culture, tone, and words the group uses. People notice ads more when they feel like part of the conversation."
        },
        {
            title: "What Industries Benefit Most From Reddit Ads?",
            description: "Brands in tech, crypto, gaming, fitness, education, and lifestyle get the best results. These groups love talking about these topics and are active in their communities."
        },
        {
            title: "Can I Track Conversions From Reddit Ads?",
            description: "Yes. You can use Reddit Pixel and tools like GA4 to see who clicks, buys, or takes action from your ads. This helps you know what works and make your campaigns better."
        }
    ];

    return <FAQs data={data} />;
};