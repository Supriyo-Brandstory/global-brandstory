import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const Actionable =()=>{
    const data = {
    heading: "Actionable Strategies That Work",
    subheading:
      "Our approach maximizes ROI and ensures your software drives results:",
    cards: [
            {
              title: "Automation Of Repetitive Processes",
              description:
                "By reducing manual work, our software frees your teams to focus on higher-value tasks, improving overall efficiency and productivity.",
            },
            {
              title: "Scalable Architecture",
              description:
                "We design systems that grow with your business, ensuring that your technology infrastructure can handle increased demand, new features, and expanding user bases without disruption.",
            },
            {
              title: "Data-Driven Decision Making",
              description:
                "Integrated analytics allow you to turn raw data into actionable insights, supporting smarter, faster, and more informed business decisions.",
            },
            {
              title: "Security & Compliance",
              description:
                "Protecting sensitive data is a top priority. Our solutions adhere to industry standards and best practices, keeping your systems secure and compliant.",
            },
            {
              title: "Future-Proofing",
              description:
                "Technology evolves rapidly, and so do we. Our software is designed to adapt to changing market demands, emerging trends, and evolving business needs, ensuring long-term relevance and value.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>Every strategy is customized to your business, not a generic template.</p>
        </>
    )
}