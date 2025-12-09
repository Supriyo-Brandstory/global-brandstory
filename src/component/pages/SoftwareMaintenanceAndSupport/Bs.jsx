import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const Bs =()=>{
    const data = {
    heading: "BrandStory: Trusted Software<br/>Development Services for Enterprises",
    subheading:
      "At Brandstory Global, We Don’t Just Maintain Software—We Safeguard Your Business. Here’s Why Leading Companies Trust Us:<br/><br/><b class='highlited-text'>Key Offerings Include:</b>",
    cards: [
            {
              title: "Proven Expertise",
              description:
                "With years of hands-on experience across diverse technologies and industries, we understand the nuances of complex software environments. Our team ensures that your systems remain secure, scalable, and high-performing, even as your business grows and evolves.",
            },
            {
              title: "Transparent Reporting",
              description:
                "We provide detailed, easy-to-understand insights into software health, performance trends, and the ROI of every maintenance activity. This transparency allows you to track progress, make informed decisions, and see the tangible impact of our work.",
            },
            {
              title: "Strategic Partnership",
              description:
                "We don't just maintain software—we align every update and improvement with your broader business objectives. By considering growth, operational efficiency, and long-term strategy, we ensure your software continues to drive value and supports your evolving goals.",
            },
            {
              title: "Dedicated Support",
              description:
                "Our team is always ready to respond to issues, provide expert guidance, and proactively manage your software environment. With round-the-clock support and a focus on reliability, we minimize disruptions and help your business operate smoothly.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>We combine technical depth with strategic oversight, delivering more than just bug fixes—we deliver business continuity.</p>
        </>
    )
}