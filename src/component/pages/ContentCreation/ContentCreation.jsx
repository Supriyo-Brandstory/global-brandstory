import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const ContentCreation = () => {
    const title = "Content Creation Tools & Platforms";
    const description = "We use professional tools to deliver high-quality content efficiently:";
    const footer = "These tools streamline production and maintain consistent standards across every project.";
    const data = [
        {
            "title": "Content Management",
            "description": `
                WordPress, HubSpot — for smooth, efficient content creation, publishing, and management.
            `
        },
        {
            "title": "Design & Multimedia",
            "description": `
               Adobe Creative Suite, Figma, Canva — bringing your visuals and graphics to life with precision and creativity.
            `
        },
        {
            "title": "Video & Animation",
            "description": `
               Premiere Pro, After Effects — producing engaging video content that tells your story effectively.
            `
        }
    ];
    return (
        <>
            <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
        </>
    );
}