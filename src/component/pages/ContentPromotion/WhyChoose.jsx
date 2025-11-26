import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const WhyChoose = () => {
    // These match the main heading and subheading text in the image.
    const title = "Why Choose Our Approach to<br/>Content Promotion?";
    const description = "We Don’t Just Push Content Out, We Ensure It Creates Measurable Business Impact By Blending The Best Of Organic And Paid Strategies.";
    const footer = "";
    
    // The data array is updated to match the three cards in the image.
    const data = [
        {
            "title": "Organic Tactics",
            "description": `
                SEO-driven blogs, social posts, and community engagement that build long-term visibility and brand trust.
            `
        },
        {
            "title": "Proven Impact",
            "description": `
                A B2B SaaS client doubled qualified leads in three months by combining thought-leadership blogs with LinkedIn sponsored posts aimed at C-level executives.
            `
        },
        {
            "title": "Continuous Optimization",
            "description": `
                Real-time monitoring allows us to refine strategies, maximizing both reach and returns.
            `
        }
    ];
    
    return (
        <>
            <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
        </>
    );
}