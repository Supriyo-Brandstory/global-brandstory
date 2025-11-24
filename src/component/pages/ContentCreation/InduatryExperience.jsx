import React from 'react'
import CommonCard from '../common/CommonCard'

export const InduatryExperience = ()=>{
  const boxHeight = "280px"; 
    const seoData = [   
      {
        title: "Healthcare",
        desc: "We create easy-to-follow content that educates patients, shares clinic updates, and supports wellness campaigns. Our focus is on building trust and helping people feel more informed and connected.",
        icon: "/images/rounded-icons/r3.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Finance",
        desc:"From reports and guides to thought leadership pieces, we make financial topics simple and clear. Our content helps your audience understand complex information and make confident decisions.",
        icon:"/images/rounded-icons/r32.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Technology",
        desc:"Whether it’s launching a new product, explaining SaaS solutions, or sharing industry insights, we craft content that positions your brand as innovative while staying relatable and engaging.",
        icon:"/images/rounded-icons/r92.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"E-commerce",
        desc:"We tell product stories that spark interest, design campaigns that capture attention, and create content that guides shoppers from browsing to buying.",
        icon:"/images/rounded-icons/r4.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"B2B & B2C",
        desc:"Every business is different, so we build tailored content strategies that nurture leads, strengthen brand awareness, and keep your audience engaged at every step of their journey.",
        icon:"/images/rounded-icons/r35.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Industry Experience & Custom Solutions"
            description="We understand that content needs differ across sectors. That’s why we tailor strategies to your industry:"
            footer="Every solution is customized to your audience, goals, and industry trends."
        />
}
