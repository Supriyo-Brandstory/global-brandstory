import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const HowOur = () => {
    const data = {
        heading: "How Our Expertise Ensures Effective<br/>Marketing Video Production",
        subheading: "We aren’t just a video production company. We are a strategic partner.",
        cards: [
            {
                title: "Proven Expertise",
                description: "With years of experience producing impactful marketing videos, we’ve worked with startups, B2B clients, and global enterprises alike. Our expertise spans multiple industries, giving us the insight to craft videos that resonate with your unique audience.",
            },
            {
                title: "Creative Authority",
                description: "Our team is made up of storytellers, directors, and strategists who blend creativity with strategy. We create narratives that ensure your brand stands out, inspires action, and leaves a lasting impression.",
            },
            {
                title: "Transparent Process",
                description: "We believe clarity builds confidence. That’s why we keep you informed at every stage, with clear timelines, defined milestones, and open communication so you always know what’s happening behind the scenes.",
            },
            {
                title: "Dedicated Support",
                description: "From the very first brainstorming session to the final distribution, our team is by your side. We guide you through concept development, production, editing, and campaign rollout to ensure your video achieves maximum impact.",
            },
        ],
    };

    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>
                Our approach blends creativity with data, ensuring every video isn’t just visually impressive but delivers measurable results.
            </p>
        </>
    )
}