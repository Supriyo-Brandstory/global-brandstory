import React from 'react'
import CommonCard from '../common/CommonCard'

export const IndustriesBenefeting = ()=>{
  const boxHeight = "220px"; 
    const seoData = [   
      {
        title: "Finance",
        desc: "We design secure, compliant, and scalable financial systems that protect sensitive data and support smooth operations.",
        icon: "/images/rounded-icons/r93.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Healthcare Technology",
        desc:"Our healthcare solutions simplify patient data management, ensure compliance, and streamline core workflows.",
        icon:"/images/rounded-icons/r17.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Logistics Software",
        desc:"We build platforms for real-time tracking, supply chain visibility, and smarter route planning to cut costs and improve delivery.",
        icon:"/images/rounded-icons/r69.png", 
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Manufacturing Solutions",
        desc:"From ERP to production planning, our systems help manufacturers boost efficiency, manage resources, and scale with ease.",
        icon:"/images/rounded-icons/r51.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Retail & E-Commerce",
        desc:"We create custom CRMs, analytics tools, and integrations that enhance customer engagement and drive sales growth.",
        icon:"/images/rounded-icons/r110.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Industries Benefiting from Custom Enterprise Software Solutions"
            description="We build tailored solutions across diverse industries:"
            footer="" 
        />
}