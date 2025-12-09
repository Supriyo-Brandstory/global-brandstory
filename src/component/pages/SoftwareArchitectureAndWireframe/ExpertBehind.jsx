import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const ExpertBehind = () => {
    const title = "Experts Behind the Blueprint";
    const description = "Our Team Combines Deep Technical Expertise With Design Thinking:";
    const footer = "We Act As An Extension Of Your Team, Bringing Clarity, Foresight, And Precision To Every Project.";
    const data = [
        {
            "title": "Solution Architects",
            "description": `
                Define the overall system structure, select the right technologies, and ensure that every technical decision supports scalability, security, and long-term performance.
            `
        },
        {
            "title": "UX / UI Designers",
            "description": `
               Translate complex architectures into intuitive, user-friendly experiences that enhance engagement and make software easy to navigate.
            `
        },
        {
            "title": "Project Strategists",
            "description": `
               Keep your business objectives at the center of every decision, ensuring that technology solutions align with goals and deliver measurable value.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
    );
}