import React from 'react'
import CommonCard from '../common/CommonCard'

export const MagentoWeb = ()=>{
  const boxHeight = "230px"; 
    const seoData = [   
      {
        title: "High-Growth Brands",
        desc: "Scaling stores to handle high traffic volumes while maintaining speed, reliability, and a seamless customer experience.",
        icon: "/images/rounded-icons/r54.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"B2B Enterprises",
        desc:"Managing complex catalogs, tiered pricing, and customized workflows to meet enterprise-level requirements.",
        icon:"/images/rounded-icons/r35.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Retail & Consumer Goods",
        desc:"Crafting engaging customer journeys designed to boost conversions and foster brand loyalty.",
        icon:"/images/rounded-icons/r109.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Wholesale & Distribution",
        desc:"Seamlessly integrating Magento with back-office systems such as ERP and inventory management for operational efficiency.",
        icon:"/images/rounded-icons/r95.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Luxury & Niche Markets",
        desc:"Delivering tailored, premium experiences that reflect brand exclusivity and elevate customer satisfaction.",
        icon:"/images/rounded-icons/r103.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Magento Web Development Services for E-Commerce and Retail Businesses"
            description="We’ve helped businesses across sectors thrive online, including:"
        />
}