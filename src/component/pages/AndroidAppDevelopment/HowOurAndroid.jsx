import React from 'react'
import CommonCard from '../common/CommonCard'

export const HowOurAndroid = ()=>{
  const boxHeight = "230px"; 
    const seoData = [   
      {
        title: "Startups",
        desc: "Build innovative, scalable apps designed to disrupt markets and engage early adopters effectively.",
        icon: "/images/rounded-icons/r104.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Enterprises",
        desc:"Develop B2B solutions, internal workflow apps, and customer engagement platforms tailored to complex business needs.",
        icon:"/images/rounded-icons/r115.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Established Businesses",
        desc:"Modernize your mobile presence with apps that enhance user retention, streamline operations, and support growth initiatives.",
        icon:"/images/rounded-icons/r117.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="How Our Android App Development Services Drive Growth Across Diverse Industries"
            description="We craft Android solutions for a wide range of businesses:"
        />
}