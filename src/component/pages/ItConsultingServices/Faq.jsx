import FAQs from '@/component/pages/common/CommonFAQ'

export const Faq = () => {
    const data = [
        {
            title: "What do IT consulting services include?",
            description: "The timeline for B2C marketing results can vary. Initial awareness and engagement metrics often improve within the first 1-3 months, but significant, measurable ROI and sales lift usually require 6 to 12 months of consistent campaign execution and optimization."
        },
        {
            title: "How are IT consulting and IT services different?",
            description: "Yes, we implement integrated marketing strategies. Depending on your target audience and goals, our campaigns can include both online tactics (social media, search ads) and offline activities (in-store promotions, experiential events, print media, or OOH)."
        },
        {
            title: "What industries benefit from IT consultancy services?",   
            description: "Absolutely. We specialize in end-to-end product launch support, including market research, defining the go-to-market strategy, crafting compelling messaging, and executing a multi-channel campaign to maximize awareness and initial sales."
        },
        {
            title: "How do you deliver IT strategy and roadmapping?",   
            description: "Effectiveness is determined by your specific audience. We conduct a thorough analysis to identify where your target consumers spend their time—whether it's on specific social media channels (Meta, TikTok), search engines (Google), or other media—to ensure budget efficiency."
        },
        {
            title: "Can I hire consultants for short-term needs?",   
            description: "Success is measured against pre-defined KPIs, which often include sales conversion rates, lead generation, customer acquisition cost (CAC), return on ad spend (ROAS), and key engagement metrics like click-through rates and website traffic."
        },
        {
            title: "What makes you a top-tier IT consulting partner?",   
            description: "Success is measured against pre-defined KPIs, which often include sales conversion rates, lead generation, customer acquisition cost (CAC), return on ad spend (ROAS), and key engagement metrics like click-through rates and website traffic."
        },
    ];

    return (
        <FAQs data={data}/>
    )
}