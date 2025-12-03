import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const FlexibleLinkedin = () => {
    const title = "Flexible LinkedIn Ad Plans Built for Results";
    const description = "Choose A Plan That Fits Your Goals:";
    const footer = "Each Package Is Designed To Deliver Measurable Leads And Performance Insights.";
    const data = [
        {
            "title": "Starter – ₹30,000/month",
            "description": `
                This plan helps you start showing ads and getting basic leads.
            `
        },
        {
            "title": "Growth – ₹70,000/month",
            "description": `
               This plan gives you ads plus creative pictures and words, and it helps you understand how well your ads are working.
            `
        },
        {
            "title": "Enterprise – Custom",
            "description": `
               This plan gives you everything: full strategies, showing ads again to interested people, and making sure your ads work their best.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
    );
}