import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const Reasons = () => {
    const data = {
        heading: "Reasons Companies Prefer Brandstory<br/>Global for Front-End Development Projects",
        subheading: "We combine experience, expertise, authority, and trustworthiness to deliver results that matter:",
        cards: [
            {
                title: "Experience You Can Rely On",
                description: "With years of delivering high-performing front-end solutions for startups, enterprises, and e-commerce brands, we understand the challenges and opportunities that come with building scalable digital products. Our experience ensures that every project benefits from proven strategies and best practices.",
            },
            {
                title: "Technical Expertise",
                description: "Our team is highly skilled in modern frameworks, responsive design, and performance optimization. From creating fluid user interfaces to ensuring seamless functionality across devices, we apply advanced technical knowledge to deliver websites that perform flawlessly.",
            },
            {
                title: "Industry Authority",
                description: "We are trusted by global clients to build scalable, accessible, and SEO-friendly digital experiences. Our approach combines design excellence with strategic thinking, ensuring your website not only looks great but also drives measurable business outcomes.",
            },
            {
                title: "Trust & Transparency",
                description: "We maintain clear, transparent processes, providing timelines, progress updates, and dedicated post-launch support. Our collaborative approach ensures that you are informed and confident at every stage of development.",
            },
        ],
    };

    return (
        <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
    )
}