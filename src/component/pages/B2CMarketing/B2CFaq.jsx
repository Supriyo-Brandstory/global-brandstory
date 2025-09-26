import FAQs from '@/component/pages/common/CommonFAQ'

export const B2CFaq = () => {
    const data = [
        {
            // Title from the image
            title: "How Long Does It Take For B2C Marketing To Show Results?",
            // Placeholder description - you will need to add the actual answer content here
            description: "The timeline for B2C marketing results can vary. Initial awareness and engagement metrics often improve within the first 1-3 months, but significant, measurable ROI and sales lift usually require 6 to 12 months of consistent campaign execution and optimization."
        },
        {
            // Title from the image
            title: "Do You Conduct Consumer Campaigns Offline As Well As Online?",
            // Placeholder description
            description: "Yes, we implement integrated marketing strategies. Depending on your target audience and goals, our campaigns can include both online tactics (social media, search ads) and offline activities (in-store promotions, experiential events, print media, or OOH)."
        },
        {
            // Title from the image
            title: "Can You Assist With A New Product's Launch?",
            // Placeholder description
            description: "Absolutely. We specialize in end-to-end product launch support, including market research, defining the go-to-market strategy, crafting compelling messaging, and executing a multi-channel campaign to maximize awareness and initial sales."
        },
        {
            // Title from the image
            title: "Which Platforms Are Most Effective For My Target Audience?",
            // Placeholder description
            description: "Effectiveness is determined by your specific audience. We conduct a thorough analysis to identify where your target consumers spend their time—whether it's on specific social media channels (Meta, TikTok), search engines (Google), or other media—to ensure budget efficiency."
        },
        {
            // Title from the image
            title: "How Is The Success Of A Campaign Measured?",
            // Placeholder description
            description: "Success is measured against pre-defined KPIs, which often include sales conversion rates, lead generation, customer acquisition cost (CAC), return on ad spend (ROAS), and key engagement metrics like click-through rates and website traffic."
        },
    ];

    return (
        <FAQs data={data}/>
    )
}