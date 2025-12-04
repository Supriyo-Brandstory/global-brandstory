import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const FlexibleReddit = () => {
    const title = "Flexible Reddit Ad Plans That Fit Your Goals";
    const description = "";
    const footer = "";
    const data = [
        {
            "title": "Starter",
            "description": `
                $1,000–$5,000 per month. This plan includes full strategy, creative ideas, and management to get your ads started.
            `
        },
        {
            "title": "Growth",
            "description": `
               $5,000–$15,000 per month. Includes complete strategy, fun and engaging creative, and hands-on management to help your campaigns grow.
            `
        },
        {
            "title": "Scale",
            "description": `
               $15,000+ per month. Includes advanced strategy, creative content, and expert management to scale your campaigns for maximum impact.
            `
        }
    ];
    return (
        <>
            <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
        </>
    );
}