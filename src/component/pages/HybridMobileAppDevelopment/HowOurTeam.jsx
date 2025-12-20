import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const HowOurTeam = () => {
    const data = {
        heading: "How Our Team Excels in Hybrid Mobile<br/>App Development",
        subheading:
            "Choosing the right development partner can make or break your app. Here’s why businesses trust us:",
        cards: [
            {
                title: "Expert Hybrid Developers",
                description:
                    "Our team excels in Flutter, React Native, Dart, and JavaScript, building high-performance apps that work seamlessly across devices. Their expertise ensures scalable, maintainable code and near-native experiences that delight users.",
            },
            {
                title: "Transparent Process",
                description:
                    "We maintain clear communication at every stage of development. You’ll always know project milestones, design decisions, and technical choices, ensuring alignment with your business goals and complete visibility into progress.",
            },
            {
                title: "Dedicated Team",
                description:
                    "Our developers, designers, and strategists collaborate closely to deliver cohesive solutions. From UX/UI to back-end integrations, we ensure every aspect of your app contributes to performance, usability, and business impact.",
            },
            {
                title: "Proven Track Record",
                description:
                    "With experience across startups, enterprises, and global brands, we’ve delivered countless successful cross-platform apps. Our portfolio demonstrates consistent results in engagement, retention, and measurable business growth.",
            },
            {
                title: "Strategic Partnership",
                description:
                    "We view our relationship as long-term. Beyond app delivery, we provide guidance, optimization, and support to ensure your app continues to evolve, delivering sustained value and helping your business grow.",
            },
        ],
    };

    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col" />
            {/* The footer text below is removed as it is not present in the provided image for this section */}
        </>
    )
}