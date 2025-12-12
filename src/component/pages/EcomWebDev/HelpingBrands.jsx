import React from 'react'
import CommonCard from '../common/CommonCard'

export const HelpingBrands = ()=>{
  const boxHeight = "230px"; 
    const seoData = [   
      {
        title: "Startups",
        desc: "We help startups launch their first online store with a strong, scalable foundation that supports growth and early customer acquisition.",
        icon: "/images/rounded-icons/r104.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Retail & D2C Brands",
        desc:"Our solutions enhance your digital presence, streamline the shopping experience, and drive sales through intuitive design and optimized workflows.",
        icon:"/images/rounded-icons/r110.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"B2B Enterprises",
        desc:"We build complex B2B e-commerce platforms with tailored workflows, robust integrations, and scalable architectures to support large-volume transactions.",
        icon:"/images/rounded-icons/r5.png", 
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Established Businesses",
        desc:"For businesses with legacy platforms, we provide modern redesigns that improve performance, scalability, and overall user experience.",
        icon:"/images/rounded-icons/r112.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Helping Brands in Every Industry<br/>Thrive Digitally"
            description="We Deliver Solutions For A Wide Range Of Businesses:"
            footer="Our approach adapts to your industry, audience, and growth objectives."
        />
}