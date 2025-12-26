import React from 'react'
import CommonCard from '../common/CommonCard'

export const Industries = () => {
  const boxHeight = "210px"; 
    const seoData = [   
      {
        title: "Startups",
        desc: "Crafting videos that clearly explain unique value propositions and attract early adopters.",
        icon: "/images/rounded-icons/r104.png",
        background: "url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title: "B2B Enterprises",
        desc: "Engaging C-suite executives and decision-makers with compelling storytelling that highlights business impact.",
        icon: "/images/rounded-icons/r35.png",
        background: "url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title: "E-Commerce & Retail",
        desc: "Showcasing products, promotions, and offers to drive conversions and customer engagement.",
        icon: "/images/rounded-icons/r84.png",
        background: "url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title: "Technology & SaaS",
        desc: "Simplifying complex software or platforms into digestible, visually appealing narratives.",
        icon: "/images/rounded-icons/r27.png",
        background: "url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title: "Healthcare & Fintech",
        desc: "Communicating trust, compliance, and reliability through clear, professional video content.",
        icon: "/images/rounded-icons/r17.png",
        background: "url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Industries We Serve With Our Marketing Video Services"
            description="We have experience across diverse sectors, delivering tailored solutions for:"
            footer="No matter your industry, we craft videos that speak directly to your audience's needs."
        />
}