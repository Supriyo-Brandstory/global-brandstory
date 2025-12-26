import FAQs from '@/component/pages/common/CommonFAQ';

export const Faqs = () => {
    const data = [
        {
            title: "How much does an animated video cost?",
            description: "Costs depend on video length, style, and complexity. We provide transparent, fixed-fee quotes after an initial strategy session."
        },
        {
            title: "How long does the animation process take?",
            description: "A 60–90 second explainer video usually takes 6–10 weeks from concept to delivery, depending on revisions."
        },
        {
            title: "Do you handle scriptwriting and voiceovers?",
            description: "Yes. We manage the entire process, including professional voiceover casting and recording."
        },
        {
            title: "Can you match our brand colors and style?",
            description: "Absolutely. We ensure every element—from characters to motion graphics—aligns with your brand guidelines."
        }
    ];

    return <FAQs data={data} />;
};