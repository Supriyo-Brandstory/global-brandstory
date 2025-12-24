import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const TrustedVideo = () => {
    const data = {
        heading: "Trusted Video Editing Services<br/>Delivered by Brandstory",
        subheading: "Choosing the right video editing company matters. Here’s why our clients trust us:",
        cards: [
            {
                title: "Expert Video Editing Company",
                description: "With years of experience across startups, enterprises, and agencies, we deliver videos that tell stories that resonate, engage, and drive results. Every frame is crafted to capture attention and reinforce your brand’s message.",
            },
            {
                title: "Dedicated Creative Team",
                description: "Our editors, motion graphics designers, and sound engineers work together seamlessly. From cutting and pacing to layered audio and visual effects, every element is handled with precision to ensure a cohesive, immersive experience.",
            },
            {
                title: "Transparent & Collaborative Process",
                description: "We keep you involved at every stage, sharing timelines, drafts, and revisions. Feedback loops are structured to respect your vision while ensuring creative decisions are informed, efficient, and impactful.",
            },
            {
                title: "Advanced Creative Expertise",
                description: "Beyond technical proficiency, we bring storytelling, cinematic color grading, dynamic motion graphics, and immersive sound design to every project. The result is content that not only looks professional but emotionally connects with your audience, driving engagement and retention.",
            },
        ],
    };

    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col" />
            <p className='max-w-[1200px] text-center mx-auto mb-30'>Our focus is simple: your story, elevated.</p>
        </>
    )
}