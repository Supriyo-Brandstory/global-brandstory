import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const HowOurAnimation = () => {
    const data = {
        heading: "How Our Animation Services Bring<br/>Creativity and Precision Together",
        subheading: "We offer a full suite of animation services tailored to your brand’s needs:",
        cards: [
            {
                title: "2D & 3D Animation",
                description: "Whether it's charming 2D characters or intricate 3D product renders, our animators bring your ideas to life. From concept to completion, every frame is crafted to maintain visual consistency and audience engagement.",
            },
            {
                title: "Explainer Videos",
                description: "We simplify your product, service, or concept into short, engaging animated explainer videos. Clear messaging, captivating visuals, and professional voiceovers ensure your audience understands your offering immediately.",
            },
            {
                title: "Motion Graphics",
                description: "Perfect for abstract concepts, data visualization, or brand campaigns. Motion graphics make complex information digestible and visually appealing, turning numbers and processes into stories your audience can follow.",
            },
            {
                title: "Whiteboard & Hand-Drawn Animation",
                description: "This classic style is ideal for tutorials, educational content, and instructional videos. By focusing on simplicity and clarity, we guide viewers step by step, ensuring retention and understanding.",
            },
            {
                title: "Brand Storytelling",
                description: "We craft animation that reflects your brand identity and values. Every color, character, and motion is designed to align with your tone and engage your audience emotionally.",
            },
        ],
    };

    return (
        <CommonTwoCard {...data} titleClass="text-center" />    
    )
}