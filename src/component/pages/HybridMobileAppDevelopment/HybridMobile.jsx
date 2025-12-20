import React from 'react'
import CommonCard from '../common/CommonCard'

export const HybridMobile = ()=>{
  const boxHeight = "280px"; 
    const seoData = [   
      {
        title: "Startups",
        desc: "We help startups quickly launch high-impact apps that resonate with early adopters. By leveraging cross-platform frameworks, we ensure rapid deployment without compromising on performance or user experience, giving startups a competitive edge in the market.",
        icon: "/images/rounded-icons/r104.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title: "Finance & Banking",
        desc: "Our team builds secure, compliant mobile solutions for the finance and banking sector. We prioritize data protection, encryption, and regulatory adherence while delivering reliable and user-friendly apps for sensitive financial transactions.",
        icon:"/images/rounded-icons/r32.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title: "Health & Fitness",
        desc: "We create apps that integrate seamlessly with device sensors, wearables, and health platforms. This enables personalized tracking, actionable insights, and enhanced user engagement, all while maintaining strict privacy and data security standards.",
        icon:"/images/rounded-icons/r12.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title: "Retail & E-Commerce",
        desc: "Our apps deliver engaging and immersive shopping experiences. With features like push notifications, personalized recommendations, and smooth checkout flows, we help brands increase conversions and build lasting customer loyalty.",
        icon:"/images/rounded-icons/r105.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title: "Enterprise Solutions",
        desc: "We develop scalable, enterprise-grade applications for internal operations and customer engagement. Our solutions handle complex workflows, integrate with backend systems, and ensure reliable performance for both employees and clients.",
        icon:"/images/rounded-icons/r87.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Hybrid Mobile App Development Services for Various Industries"
            description="Our expertise spans multiple sectors:"
            footer="" 
        />
}