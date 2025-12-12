import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const MeetTheMinds = () => {
    const title = "Meet the Minds Driving Innovative Web Design";
    const description = "Our Team Brings Together Designers, Developers, And Strategists Who Are Passionate About Web Design.";
    const footer = "Collaboration Across Disciplines Ensures Every Website Meets Both Creative And Technical Standards.";
    const data = [
        {
            "title": "UX/UI Designers",
            "description": `
                Our designers craft intuitive, engaging experiences that guide users naturally through your website. Every interface is focused on clarity, usability, and visual appeal.
            `
        },
        {
            "title": "Full-Stack Developers",
            "description": `
               Our full stack developers bring designs to life with responsive front-end code and secure back-end systems. Every page functions smoothly across devices, supported by robust CMS integration.
            `
        },
        {
            "title": "Digital Strategists",
            "description": `
               We connect design and development with your business goals. Our strategists guide decisions to maximize conversions, user engagement, and overall ROI.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
    );
}