import React from 'react'
import CommonCard from '../common/CommonCard'

export const OurExpertise = ()=>{
  const boxHeight = "210px"; 
    const seoData = [   
      {
        title: "Startups",
        desc: "We build scalable platforms that support rapid growth and allow emerging businesses to adapt quickly to market demands.",
        icon: "/images/rounded-icons/r104.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Established Businesses",
        desc:"Our solutions drive digital transformation and modernization, optimizing existing systems while enabling new capabilities.",
        icon:"/images/rounded-icons/r87.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Healthcare & Finance",
        desc:"We deliver secure, compliant, and data-driven systems that protect sensitive information and support critical operations.",
        icon:"/images/rounded-icons/r2.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title: "Retail & E-Commerce",
        desc: "Our mobile-first, analytics-powered platforms enhance customer engagement, streamline operations, and boost revenue.",
        icon: "/images/rounded-icons/r105.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Manufacturing & Logistics",
        desc:"We implement ERP systems and process automation to increase efficiency, reduce costs, and improve operational performance.",
        icon:"/images/rounded-icons/r29.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Our Expertise Across Market Segments"
            description="We Specialize in Custom Software For Startups, Enterprises, and Organizations With Unique Operational Needs:"
            footer="No matter the industry, our software adapts to complex requirements and unique workflows."
        />
}