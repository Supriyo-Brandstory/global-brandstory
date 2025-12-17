import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const CollaborativeExperts = () => {
    const title = "Collaborative Experts Delivering Tailored Website Solutions";
    const description = "Our team combines years of experience in web development, IT management, and digital marketing. Each member brings:";
    const footer = ""; 
    const data = [
        {
            "title": "Technical Expertise",
            "description": `
                Our team brings deep knowledge of CMS platforms, coding, and server management. This expertise ensures that your website functions flawlessly, stays secure, and performs at its best across all devices.
            `
        },
        {
            "title": "Strategic Oversight",
            "description": `
               We don’t just maintain websites—we align every update and improvement with your broader business goals. By combining technical skill with strategic insight, we ensure your site contributes directly to growth, engagement, and conversions.
            `
        },
        {
            "title": "Problem-Solving Skills",
            "description": `
               Whether it’s routine updates, unexpected bugs, or urgent technical challenges, our team approaches every issue with precision and efficiency. We quickly identify solutions to minimize disruption and keep your website running smoothly.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description} footer={footer} cardData={data} />
    );
}