import React from 'react'
import CommonCard from '../common/CommonCard'

export const ActionableStrategies = ()=>{
  const boxHeight = "230px"; 
    const seoData = [   
      {
        title: "Reduce Development Costs",
        desc: "By creating clear blueprints and detailed plans upfront, we prevent rework and scope creep, saving both time and money.",
        icon: "/images/rounded-icons/r93.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Mitigate Technical Risk",
        desc:"Proactively addressing scalability, security, and performance challenges reduces long-term risks and ensures a stable, reliable solution.",
        icon:"/images/rounded-icons/r106.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Increase User Adoption",
        desc:"Intuitive interfaces and validated user flows drive engagement and retention, helping your software achieve its intended impact.",
        icon:"/images/rounded-icons/r107.png", 
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Faster Time-To-Market",
        desc:"With predictable development timelines and structured project management, you can launch confidently and efficiently, gaining a competitive advantage.",
        icon:"/images/rounded-icons/r105.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Actionable Strategies for Enterprise Success"
            description="Good Architecture Delivers Measurable Business Value. Here’s How We Make An Impact:"
            footer="Each strategy is designed to protect your investment and maximize ROI."
        />
}