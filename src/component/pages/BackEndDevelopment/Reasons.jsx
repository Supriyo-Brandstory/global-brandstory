import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const Reasons = () => {
    const data = {
        heading: "Reasons to Choose Brandstory Global for Your Back-End Development Needs",
        subheading: "", // The image uses a clean layout without an explicit subheading below the title
        cards: [
            {
                title: "Experience & Expertise",
                description:
                    "Our team brings years of hands-on experience in back-end development across diverse industries, from e-commerce and finance to healthcare and enterprise platforms. We combine technical mastery with practical insights to deliver robust, scalable, and efficient systems.",
            },
            {
                title: "Authority & Trust",
                description:
                    "We follow a security-first approach, adhere to industry-standard technologies, and maintain transparent processes throughout the development lifecycle. This ensures your platform is reliable, compliant, and built to last.",
            },
            {
                title: "Strategic Partnership",
                description:
                    "We collaborate closely with your team, aligning every architectural and functional decision with your business objectives. Your goals guide our solutions, ensuring technology drives measurable growth.",
            },
            {
                title: "Dedicated Support",
                description:
                    "From initial discovery to post-launch maintenance, our team is committed to your project’s success. We provide ongoing support, performance monitoring, and optimization to ensure your back-end remains efficient, secure, and future-ready.",
            },
        ],
    };

    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
        </>
    )
}