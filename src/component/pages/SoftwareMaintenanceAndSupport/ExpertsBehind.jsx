import React from 'react'
import CommonCard from '../common/CommonCard'

export const ExpertsBehind = ()=>{
  const boxHeight = "250px"; 
    const seoData = [   
      {
        title: "Software Engineers",
        desc: "Skilled in both modern and legacy systems, our engineers ensure that your applications remain robust, scalable, and adaptable to changing business needs.",
        icon: "/images/rounded-icons/r108.png", // Placeholder icon
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Security Specialists",
        desc:"Focused on proactive protection, they identify and mitigate potential vulnerabilities to keep your systems secure and compliant.",
        icon:"/images/rounded-icons/r106.png", // Placeholder icon
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Performance Analysts",
        desc:"Dedicated to monitoring and optimizing software performance, they ensure smooth operations and a seamless user experience.",
        icon:"/images/rounded-icons/r50.png", // Placeholder icon
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Project Managers",
        desc:"Streamlining execution and communication, our project managers coordinate teams, manage timelines, and ensure that maintenance initiatives align with your strategic goals.",
        icon:"/images/rounded-icons/r95.png", // Placeholder icon
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Experts Behind the Service"
            description="Our Team Brings A Blend Of Technical Mastery And Strategic Insight:"
            footer="We act as an extension of your team, delivering hands-on expertise and strategic guidance."
        />
}