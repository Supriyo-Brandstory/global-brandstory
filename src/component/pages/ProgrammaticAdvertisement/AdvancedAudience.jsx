import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const AdvancedAudience = () => {
    const title = "Advanced Audience Targeting with First-Party and Third-Party Data";
    const description = "Audience Precision Drives Performance. Our Audience Targeting Programmatic Approach Combines First-Party Data, Third-Party Data Segments, And Predictive Insights To Reach The Right People At Scale.<br/><b class='highlited-text'>How we target effectively:</b>";
    const footer = "BrandStory Ensures Every Impression Counts, Delivering Personalized Messaging That Converts.";
    const data = [
        {
            "title": "First-Party Data Activation",
            "description": `
                We use your own data, like CRM, CDP, and website info, to make campaigns more accurate. This means your ads reach people who already know your brand.
            `
        },
        {
            "title": "Third-Party Segments",
            "description": `
               We add more audience data from outside sources. This helps us reach more people while still keeping the ads relevant.
            `
        },
        {
            "title": "Cookie-Less Solutions",
            "description": `
               We use new tools that do not rely on cookies. This keeps your ads ready for the future and works even with changing privacy rules.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
    );
}