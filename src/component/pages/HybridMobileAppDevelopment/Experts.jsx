import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const Experts = () => {
    const title = "Experts Focused on Delivering Reliable Hybrid Mobile Apps";
    const description = "Our team is a blend of creativity and technical expertise:";
    const footer = ""; 
    const data = [
        {
            "title": "UX/UI Designers",
            "description": `
                Our designers craft intuitive, user-friendly interfaces that feel natural on both iOS and Android. Every interaction is thoughtfully designed to guide users seamlessly through the app, enhancing engagement, usability, and overall satisfaction.
            `
        },
        {
            "title": "Flutter & React Native Developers",
            "description": `
                Our developers specialize in Flutter and React Native, building robust, maintainable apps from a single codebase. They ensure high performance, scalability, and smooth cross-platform functionality that meets the needs of both users and business stakeholders.
            `
        },
        {
            "title": "Project Management & Quality Assurance",
            "description": `
                Our project managers and QA engineers ensure a smooth development process. They coordinate milestones, maintain clear communication, and perform rigorous testing—covering functionality, performance, security, and usability—to deliver reliable, high-quality results on time.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description} footer={footer} cardData={data} />
    );
}