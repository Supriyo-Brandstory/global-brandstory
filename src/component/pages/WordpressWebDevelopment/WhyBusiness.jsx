import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const WhyBusiness =()=>{
    const data = {
    heading: "Why Businesses Trust Our WordPress Web Development Services for Long-Term Success",
    subheading:
      "Brandstory Global stands out as a trusted WordPress partner because:",
    cards: [
            {
              title: "Expert WordPress Developers",
              description:
                "Our developers specialize in custom themes, WooCommerce, and headless WordPress solutions. They combine technical expertise with best practices to build websites that are secure, fast, and tailored to your business needs.",
            },
            {
              title: "Transparent Process",
              description:
                "We prioritize clear communication at every stage—from initial planning and design to development, testing, and launch. You’ll always know the status of your project and the reasoning behind every decision.",
            },
            {
              title: "Strategic Partnership",
              description:
                "We treat every project as a partnership. Your business goals and objectives guide every design and technical decision, ensuring that your website isn’t just functional, but a strategic asset that drives measurable results.",
            },
            {
              title: "Proven ROI",
              description:
                "Our custom-built WordPress websites are designed to maximize conversions, improve speed, and ensure reliable performance. By aligning technology and strategy, we deliver tangible returns and long-term value for your business.",
            },
        ],
    };


    return (
        <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>    
    )
}