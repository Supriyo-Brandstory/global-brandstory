import React from 'react'
import CommonCard from '../common/CommonCard'

export const Industries = ()=>{
  const boxHeight = "200px"; 
    const seoData = [   
      {
        title: "Technology & SaaS",
        desc: "Break down complex software features into clear, engaging animations that help users understand functionality and value.",
        icon: "/images/rounded-icons/r27.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title: "Healthcare & Pharma",
        desc: "Explain medical treatments, procedures, or pharmaceutical concepts with accuracy, clarity, and trustworthiness.",
        icon: "/images/rounded-icons/r17.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title: "Education & Training",
        desc: "Create interactive tutorials and learning materials that make information easy to absorb and retain.",
        icon: "/images/rounded-icons/r33.png", 
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title: "Finance & Corporate",
        desc: "Visualize processes, data, and workflows to simplify communication for stakeholders and employees.",
        icon: "/images/rounded-icons/r93.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title: "Retail & E-Commerce",
        desc: "Showcase products, promotions, and key features with engaging visuals that drive conversions and sales.",
        icon: "/images/rounded-icons/r8.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Industries That Rely on Our Professional Animation Solutions"
            description="Our animated videos are effective across multiple sectors:"
            footer="No matter your industry, we craft videos that speak directly to your audience's needs."
        />
}