import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const KeyAdvantages = () => {
    const data = {
        heading: "Key Advantages of Partnering With Us for Magento Web Development",
        subheading: "We combine technical expertise with strategic insight. Here’s what sets us apart:",
        cards: [
            {
                title: "Proven Magento Experts",
                description: "Our team brings years of hands-on experience delivering Magento projects across diverse industries. We know what works and how to build stores that perform, convert, and scale.",
            },
            {
                title: "Transparent Process",
                description: "From planning to launch, we maintain complete transparency. Clear timelines, milestones, and deliverables ensure you're informed and confident every step of the way.",
            },
            {
                title: "Collaborative Partnership",
                description: "We function as an extension of your team, working closely with your stakeholders to align development, design, and business objectives for optimal results.",
            },
            {
                title: "Future-Proof Solutions",
                description: "Our Magento solutions are built for growth. Scalable architecture, robust integrations, and adaptable systems ensure your store evolves with your business and market demands.",
            },
        ],
    };

    return (
        <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>    
    )
}