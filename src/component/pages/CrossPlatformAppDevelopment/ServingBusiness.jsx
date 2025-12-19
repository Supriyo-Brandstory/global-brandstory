import React from 'react'
import CommonCard from '../common/CommonCard'

export const ServingBusiness = ()=>{
  const boxHeight = "280px"; 
    const seoData = [   
      {
        title: "Startups",
        desc: "We help startups rapidly launch apps using cross-platform frameworks, allowing them to enter the market quickly while maintaining high performance, engaging user experiences, and scalability for future growth.",
        icon: "/images/rounded-icons/r104.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Finance & Banking",
        desc:"Our team builds secure and reliable mobile solutions for finance and banking, ensuring sensitive data is protected with encryption, authentication, and compliance with industry regulations.",
        icon:"/images/rounded-icons/r32.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Health & Fitness",
        desc:"We create apps that integrate seamlessly with device sensors, wearables, and health platforms, enabling personalized tracking, analytics, and actionable insights for users while maintaining strict data privacy standards.",
        icon:"/images/rounded-icons/r12.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Retail & E-Commerce",
        desc:"Our apps deliver immersive shopping experiences with features like push notifications, AR, and personalized recommendations, driving engagement, repeat purchases, and increased conversion rates.",
        icon:"/images/rounded-icons/r4.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Enterprise Solutions",
        desc:"We develop scalable enterprise-grade apps for internal operations, workflow automation, and customer engagement, ensuring robust performance, security, and long-term maintainability.",
        icon:"/images/rounded-icons/r87.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Serving Businesses Across Industries With Expert Cross-Platform App Development"
            description="We develop apps for businesses across multiple sectors, including:"
            footer="Whether you're modernizing your mobile presence or building from scratch, our solutions fit your business needs."
        />
}