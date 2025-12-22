import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const WhyChoose = () => {
    const data = {
        heading: "Why Choose Our ASO Service",
        subheading: "At Brandstory Global, we combine experience, expertise, and technical know-how to deliver measurable results.",
        cards: [
            {
                title: "Proven Expertise",
                description: "Our team has extensive experience in ASO, helping both startups and large enterprises achieve higher visibility and downloads. We combine market insights, keyword research, and conversion-focused strategies to ensure your app performs at its full potential.",
            },
            {
                title: "Transparent Process",
                description: "We maintain complete transparency at every stage of the ASO process. From audits and keyword research to A/B testing and optimization, you'll always know what actions are being taken and how they contribute to measurable results.",
            },
            {
                title: "Dedicated Team",
                description: "Our ASO specialists are focused solely on maximizing your app's presence and performance. They continually analyze data, test new strategies, and refine every aspect of your app listing to improve discoverability and user engagement.",
            },
            {
                title: "Performance-Focused",
                description: "Success for us isn't just higher rankings—it's tangible business impact. We measure outcomes through organic downloads, reduced cost-per-install (CPI), and improved user lifetime value (LTV), ensuring our strategies deliver both visibility and long-term growth.",
            },
        ],
    };

    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col" />
        </>
    )
}