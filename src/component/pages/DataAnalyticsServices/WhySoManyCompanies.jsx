import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const WhySoManyCompanies = () => {
    const title = "Why So Many Companies Trust<br/>BrandStory for Data Analytics";
    const description = "We’re not just another team of dashboards and charts. We’re one of the most trusted data analytics service providers in the industry because we focus on results—not just reports.<br/>We work with over 500 clients across 30+ industries, and what they all have in common is this: they want clarity. They want data that actually helps them move forward. That’s what we deliver.<br/>Here’s how we do it:";
    const footer = "";
    const data = [
        {
            "title": "Fast and focused<br/>execution",
            "description": `
                We don’t take forever to get started. We come in with a plan, set up quickly, and start showing value early.
            `
        },
        {
            "title": "Real experts on your side",
            "description": `
               You won’t find juniors running your analytics. Our team includes people who understand both data and business.
            `
        },
        {
            "title": "Hands-on support, not handoffs",
            "description": `
               We don’t leave you with a tool and disappear. From setup to insight, we’re right there with you.
            `
        }
    ];
    return (
        <>
            <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} paddingBottom="0px" />
        </>
    );
}