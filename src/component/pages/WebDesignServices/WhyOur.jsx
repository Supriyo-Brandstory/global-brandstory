import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const WhyOur =()=>{
    const data = {
    heading: "Why Our Clients Recommend Us for Web<br/>Design Excellence",
    subheading:
      "Working With BrandStory Means Partnering With Experts Who Understand Both Design And Business.",
    cards: [
            {
              title: "Proven Expertise",
              description:
                "We bring years of experience designing websites that not only look great but also drive real results. Every project is grounded in best practices and proven design strategies.",
            },
            {
              title: "Strategic Approach",
              description:
                "Our designs are informed by research and analytics. We focus on what your users need and how your business can achieve measurable outcomes.",
            },
            {
              title: "Transparent Process",
              description:
                "We keep you in the loop at every stage. Clear communication, realistic timelines, and well-defined deliverables ensure there are no surprises along the way.",
            },
            {
              title: "Trusted By Clients",
              description:
                "Our commitment is simple: deliver what we promise, on time, every time. We build long-term relationships by creating websites that work for your business and your audience.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>We don’t just design websites; we craft digital experiences that matter.</p>
        </>
    )
}