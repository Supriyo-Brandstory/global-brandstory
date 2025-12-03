import React from 'react'
import CommonCard from '../common/CommonCard'

export const B2bSectors = ()=>{
  const boxHeight = "220px"; 
    const seoData = [   
      {
        title: "SaaS",
        desc: "We help software companies. We run ads that get people to try the product, sign up for free trials, and see how it works.",
        icon: "/images/rounded-icons/r27.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Healthcare",
        desc:"We show ads to doctors, hospital leaders, and administrators. These are the people who make important choices about healthcare services.",
        icon:"/images/rounded-icons/r17.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Finance",
        desc:"We help banks and financial companies reach CXOs and decision-makers. These people decide how money is managed and invested.",
        icon:"/images/rounded-icons/r28.png", 
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Education",
        desc:"We connect with schools, colleges, and education leaders. Our ads share the right messages so they can learn about useful programs and services.",
        icon:"/images/rounded-icons/r13.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Manufacturing",
        desc:"We help factories and manufacturing businesses reach managers and operations heads. These are the people who buy tools, machines, and materials.",
        icon:"/images/rounded-icons/r29.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="B2B Sectors Where Our LinkedIn Ads Make an Impact"
            description="We specialize in B2B campaigns across sectors:"
            footer="" 
        />
}