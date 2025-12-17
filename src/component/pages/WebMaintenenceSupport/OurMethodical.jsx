import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const OurMethodical = () => {
    const data = {
        heading: "Our Methodical Approach to Delivering High-Performing Websites",
        subheading:
            "Our approach blends strategy and technology to keep your site performing optimally:",
        cards: [
            {
                title: "Preventive Maintenance",
                description:
                    "We proactively address performance bottlenecks and security vulnerabilities before they affect your users. By staying ahead of potential issues, your website remains fast, reliable, and secure at all times.",
            },
            {
                title: "Continuous Monitoring",
                description:
                    "Your website's health is tracked in real time. We monitor uptime, page speed, and overall system performance to detect and resolve issues instantly, ensuring a seamless user experience.",
            },
            {
                title: "Data-Driven Updates",
                description:
                    "Every update is guided by analytics and insights. We prioritize improvements that have the most impact on engagement, conversions, and overall website performance, ensuring your site evolves strategically.",
            },
            {
                title: "Content Management",
                description:
                    "Keeping your website relevant and engaging is essential. We regularly update content, images, and assets to reflect your brand's latest offerings, messaging, and initiatives.",
            },
            {
                title: "Collaborative Process",
                description:
                    "We partner closely with your team, aligning with your brand, business objectives, and timelines. Every decision is made collaboratively to ensure consistency, efficiency, and results-driven execution.",
            },
        ],
    };

    return (
        <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col" />
    )
}