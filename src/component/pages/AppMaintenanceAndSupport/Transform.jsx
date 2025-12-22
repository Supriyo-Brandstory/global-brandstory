import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const Transform = () => {
    const data = {
        heading: "Transform Your Applications with Advanced Intelligent Solutions",
        subheading: "Elevate your business with AI powered application maintenance and support services from Brandstory. Our intelligent solutions proactively monitor and resolve issues, ensuring your apps stay secure and high performing.<br/>Using automation, machine learning, and advanced analytics, we minimize downtime and optimize performance for web and mobile platforms. Experience smarter app maintenance that fixes problems and anticipates them before they impact your users.",
        cards: [
            {
                title: "Automated Issue Resolution",
                description: "Quickly identify and resolve bugs to maintain smooth app performance.",
            },
            {
                title: "Cognitive Support Assistance",
                description: "Enhance application support with AI driven helpdesk guidance for faster solutions.",
            },
            {
                title: "Machine Learning Integration",
                description: "Use predictive insights to optimize app functionality and prevent failures.",
            },
            {
                title: "Natural Language Processing (NLP)",
                description: "Enables smarter user interactions and support through AI powered text understanding.",
            },
            {
                title: "Anomaly Detection & Remediation",
                description: "Detects unusual patterns and proactively fix potential disruptions.",
            },
            {
                title: "Predictive Analytics",
                description: "Forecast app issues, performance bottlenecks, and usage trends to stay ahead.",
            },
        ],
    };

    return (
        <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col" />    
    )
}