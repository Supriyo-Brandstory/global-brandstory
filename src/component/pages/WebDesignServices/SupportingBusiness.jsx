import React from 'react'
import CommonCard from '../common/CommonCard'

export const SupportingBusiness = ()=>{
  const boxHeight = "230px"; 
    const seoData = [   
      {
        title: "Startups",
        desc: "We help startups build a strong digital presence from the ground-up, creating websites that reflect their brand and attract early customers.",
        icon: "/images/rounded-icons/r104.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"E-Commerce",
        desc:"Our team designs high-converting online stores that provide seamless shopping experiences, from browsing to checkout.",
        icon:"/images/rounded-icons/r110.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Healthcare",
        desc:"We create user-friendly websites that improve patient engagement, streamline information access, and support healthcare providers.",
        icon:"/images/rounded-icons/r12.png", 
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Finance",
        desc:"Security and trust are paramount. We develop digital experiences that ensure compliance while providing a seamless user journey.",
        icon:"/images/rounded-icons/r93.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Education",
        desc:"Engaging websites for learners and institutions, designed to make information accessible and learning experiences interactive.",
        icon:"/images/rounded-icons/r22.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Retail & Consumer Goods",
        desc:"We showcase products clearly and stylishly, helping brands increase visibility, drive engagement, and boost online sales.",
        icon:"/images/rounded-icons/r111.png", 
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Supporting Businesses Across<br/>Industries With Creative Design"
            description="We Create Custom Websites For A Wide Range Of Industries, Including:"
            footer="No matter the industry, we design websites that resonate with your audience."
        />
}