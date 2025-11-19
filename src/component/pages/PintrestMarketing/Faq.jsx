import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "Is Pinterest good for my business?",
            description: "Yes! Especially for e-commerce, fashion, wellness, or home decor, Pinterest helps brands get discovered and drive meaningful traffic."
        },
        {
            title: "How is Pinterest different from other platforms?",
            description: "Pinterest is a **visual search engine**, not just a social app. Pins have a long shelf life and continue driving traffic long after they’re published."
        },
        {
            title: "Do I need paid ads to succeed?",
            description: "Not always. Organic growth works well, but combining it with **Pinterest advertising services** accelerates results and boosts visibility."
        },
        {
            title: "Can Pinterest help B2B companies too?",
            description: "Absolutely. **Infographics**, blogs, and **thought leadership pins** perform effectively for B2B brands on the platform."
        },
        {
            title: "How soon can I expect results?",
            description: "Typically within **four to six weeks** for noticeable improvements in traffic, engagement, and brand visibility."
        },
        {
            title: "Do you design pins and write captions too?",
            description: "Yes. We provide complete **Pinterest creative services** with keyword backed captions, scroll stopping visuals, and optimized pin content."
        }
    ];

    return (
        <FAQs data={data} />
    );
};