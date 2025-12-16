import React from 'react'
import CommonCard from '../common/CommonCard'

export const CustomWordpress = ()=>{
  const boxHeight = "280px"; 
    const seoData = [   
      {
        title: "Startups",
        desc: "We help startups launch scalable, brand-focused websites that evolve as the business grows. Every design and feature is built to support rapid growth, attract users, and establish a strong digital presence from day one.",
        icon: "/images/rounded-icons/r104.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Enterprises",
        desc:"For enterprises with legacy websites, we modernize platforms with advanced functionality, improved performance, and a future-ready architecture. This ensures reliability, security, and scalability at an enterprise level.",
        icon:"/images/rounded-icons/r115.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"E-Commerce",
        desc:"We build custom online stores designed for seamless sales and efficient inventory management. Our solutions prioritize fast performance, intuitive navigation, and secure checkout processes to maximize conversions.",
        icon:"/images/rounded-icons/r84.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Professional Services & B2B Companies",
        desc:"We craft websites that enhance credibility and generate qualified leads. By combining strategy, design with optimized content and UX, your website becomes a powerful tool for client acquisition and relationship building.",
        icon:"/images/rounded-icons/r7.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Digital Marketing Agencies",
        desc:"We partner with agencies to deliver collaborative development solutions that meet complex client requirements. Our expertise ensures seamless integration, custom functionality, and performance-driven results for your clients.",
        icon:"/images/rounded-icons/r73.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Custom WordPress Solutions for Professional Services and Agencies"
            description="Our experience spans multiple sectors, including:"
            footer="Every solution is customized to your audience, goals, and industry trends." // Retaining the existing footer
        />
}