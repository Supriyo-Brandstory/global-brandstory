import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "What is content promotion?",
            description: "Content promotion means strategically sharing your content across multiple channels to reach a broader audience. This helps increase your brand’s visibility and attract more qualified traffic."
        },
        {
            title: "Which channels do you use to promote content?",
            description: "We utilize social media, email marketing, influencer partnerships, syndication, and paid advertising to ensure your content gets seen by the right audience."
        },
        {
            title: "How quickly will I see results from content promotion?",
            description: "Most clients notice an increase in reach and engagement within a few weeks of starting a promotion campaign. Results may vary depending on the channels and strategy used."
        },
        {
            title: "Do you provide both organic and paid content promotion?",
            description: "Yes, we offer a mix of organic strategies like social and SEO, as well as targeted paid campaigns for even greater exposure."
        },
        {
            title: "How do you measure the effectiveness of your promotion efforts?",
            description: "We track key metrics such as website traffic, engagement rates, shares, conversions, and overall ROI, providing clear reports on campaign performance."
        },
        {
            title: "What industries and content types do you support?",
            description: "We promote content for a diverse range of industries including technology, healthcare, e-commerce, and more, working with formats like blogs, videos, and infographics."
        }
    ];

    return <FAQs data={data} />;
};