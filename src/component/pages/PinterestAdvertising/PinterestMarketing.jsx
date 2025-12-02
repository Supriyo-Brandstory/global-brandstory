import React from 'react'
import CommonCard from '../common/CommonCard'

export const PinterestMarketing = ()=>{
  const boxHeight = "280px"; 
    const seoData = [   
      {
        title: "Ecommerce", 
        desc: "From gadgets to home products and lifestyle items, we design pins that clearly show product features and make it easy for users to shop. These pins help drive direct sales and increase brand visibility.",
        icon: "/images/rounded-icons/r4.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Fashion", 
        desc:"Clothing, shoes, and accessories perform really well on Pinterest. Our visually appealing pins grab attention, spark interest, and encourage users to make a purchase.",
        icon:"/images/rounded-icons/r11.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Home Décor", 
        desc:"Pinterest is popular for furniture ideas, room inspiration and DIY projects. We create pins that capture this demand and engage users, converting their interest into actions like website visits or purchases.",
        icon:"/images/rounded-icons/r19.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Wellness & Beauty", 
        desc:"Skincare, makeup, and fitness products naturally fit Pinterest trends. We showcase them through informative and aspirational pins that connect with users and build trust.",
        icon:"/images/rounded-icons/r10.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Travel & Leisure", 
        desc:"People use Pinterest to plan trips and explore experiences. Our pins inspire wanderlust and guide users toward bookings or inquiries.",
        icon:"/images/rounded-icons/r98.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Pinterest Marketing for Different Industries" 
            description="Pinterest works for many types of businesses. We have experience with:" 
            footer="" 
        />
}