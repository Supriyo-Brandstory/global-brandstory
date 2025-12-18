import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const Reasons = () => {
    const data = {
        heading: "Reasons Clients Choose Our Android App Development Services",
        subheading: "We combine technical expertise with strategic insight to deliver apps that truly perform.",
        cards: [
            {
                title: "Experience You Can Trust",
                description: "With years of hands-on experience developing high-quality Android apps across industries, we understand what it takes to deliver functional, scalable, and engaging mobile solutions that drive real business results.",
            },
            {
                title: "Proven Expertise",
                description: "Our team is highly skilled in Kotlin, Jetpack Compose, and modular architecture, ensuring your app is secure, maintainable, and built for future growth and continuous updates.",
            },
            {
                title: "Transparent Collaboration",
                description: "We treat you as a partner throughout the project, maintaining clear communication, sharing progress updates regularly, and ensuring every decision aligns with your business objectives.",
            },
            {
                title: "User-Centric Approach",
                description: "Every feature, interaction, and design decision is guided by the end user. By focusing on usability and engagement, we ensure strong adoption, retention, and an overall superior user experience.",
            },
        ],
    };

    return (
        <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col" />
    )
}