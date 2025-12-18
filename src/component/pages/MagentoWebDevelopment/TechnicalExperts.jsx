import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const TechnicalExperts = () => {
    const title = "Technical Experts Maintaining Security, Speed, and Store Performance";
    const description = ""; // The image shows only the main heading without a secondary description line
    const footer = ""; 
    const data = [
        {
            "title": "Certified Magento Developers",
            "description": `
                Deep technical expertise in Magento 2, custom modules, and integrations.
            `
        },
        {
            "title": "Ecommerce Strategists",
            "description": `
               Align store functionality and design with business goals for measurable growth.
            `
        },
        {
            "title": "Collaborative Team Approach",
            "description": `
               Work closely with your internal team to ensure seamless project execution.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description} footer={footer} cardData={data} />
    );
}