import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const Pricing = () => {
    const title = "Pricing & Custom Packages";
    const description = "We Offer Flexible Media Buying Packages To Fit Your Marketing Objectives And Budget Structure:";
    const footer = "Our Transparent Media Buying Pricing And Flexible Ad Spend Models Ensure Every Dollar Is Tracked To Impact.";
    const data = [
        {
            "title": "Monthly Retainers",
            "description": `
                Consistent access to our team and tools for long-term campaigns.
            `
        },
        {
            "title": "% of Ad Spend",
            "description": `
               Ideal for performance-focused brands that want scale-based pricing.
            `
        },
        {
            "title": "Custom Packages by Channel/Platform",
            "description": `
               Personalized mixes based on goals, formats, and vertical needs.
            `
        }
    ];
    return (
        <>
            <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
        </>
    );
}