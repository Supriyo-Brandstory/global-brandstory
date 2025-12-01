import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How much budget do I need to start TikTok Ads?",
            description: "A starting budget of around $500/month is ideal for testing. This allows for creative variation, audience experimentation, and early data gathering. Once winning combinations are identified, budgets can be scaled strategically to maximize ROAS."
        },
        {
            title: "Can I target specific age groups or interests?",
            description: "Yes. TikTok Ads Manager enables highly granular targeting, including age, gender, location, interests, behaviors, and lookalike audiences. This ensures your ads reach the most relevant users at the right time."
        },
        {
            title: "How long before results show?",
            description: "Most campaigns begin generating measurable results within 7–14 days after initial optimization. This period allows for algorithm learning, creative testing, and early refinement."
        },
        {
            title: "Do I need new videos?",
            description: "Yes. TikTok rewards native, authentic short-form content that matches the platform’s style. Repurposing traditional ad creatives rarely works as well as producing TikTok-specific videos designed for engagement."
        },
        {
            title: "Is TikTok good for niche brands?",
            description: "Absolutely. Even highly specialized B2B brands can achieve strong engagement with precise targeting and tailored messaging. The platform’s algorithm helps niche content find its ideal audience."
        },
        {
            title: "Can I retarget viewers?",
            description: "Yes. With the TikTok Pixel and engagement-based retargeting, it’s possible to re-engage users who have watched your videos, clicked on ads, or interacted with your content in other ways, keeping your brand top of mind."
        }
    ];

    return <FAQs data={data} />;
};