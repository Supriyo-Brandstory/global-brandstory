import React from 'react'
import CommonCard from '../common/CommonCard'


export const IndustriesWeHave = ()=>{
  const boxHeight = "170px";
    const data = [
      {
        
        title: "E-commerce",
        desc: "Boost product discovery and sales",
        icon: "/images/rounded-icons/r4.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
      {
        
        title: "Healthcare",
        desc: "Educate and build trust",
        icon: "/images/rounded-icons/r17.png", 
        background: "url('/images/ppc/bg-2.png')", 
        height: boxHeight
      },
      {
        
        title: "Tech/SaaS",
        desc: "Highlight thought leadership",
        icon: "/images/rounded-icons/r92.png", 
        background: "url('/images/ppc/bg-3.png')", 
        height: boxHeight
      },
      {
        
        title: "Education",
        desc: "Increase student engagement",
        icon: "/images/rounded-icons/r13.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
      {
        
        title: "Real Estate",
        desc: "Showcase listings via reels and videos",
        icon: "/images/rounded-icons/r1.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
      {
        
        title: "Hospitality",
        desc: "Visual storytelling for experiences",
        icon: "/images/rounded-icons/r2.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
    ];

    return <CommonCard
        seoData={data}
        heding="Industries We Serve with Social Media Management"
        description="Social media for industries that drives results:"
        footer="Each industry benefits from content crafted to their audience and goals. Our social media analytics and reporting give you full clarity. Track performance with weekly dashboards, fine tune campaigns in monthly strategy reviews, and monitor key metrics like impressions, reach, and conversions."
    />
}