import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "Which marketplaces do you advertise on?",
            description: "We run ads across Amazon, Flipkart, Etsy, eBay, Walmart, and several niche platforms—tailored to where your customers actually shop."
        },
        {
            title: "What’s The Minimum Budget To Start?",
            description: "You can get started with as little as $500 per month, per platform—perfect for testing before scaling."
        },
        {
            title: "Do You Help With Listing Optimization Too?",
            description: "Yes. Every package includes end-to-end product listing optimization to improve visibility, conversions, and compliance."
        },
        {
            title: "How Do You Measure ROI From Ads?",
            description: "We track key metrics like RoAS, ACoS, conversions, and total sales uplift to show you what’s working—and what to scale."
        },
        {
            title: "Can You Manage Ads For Multiple Marketplaces At Once?",
            description: "Absolutely. We build unified cross-platform strategies that keep your messaging consistent and your spend efficient."
        },
        {
            title: "How Long Before I See Results?",
            description: "Most brands start seeing traction within 2 to 4 weeks—often faster, depending on product type and platform activity."
        }
    ];

    return <FAQs data={data} />;
};