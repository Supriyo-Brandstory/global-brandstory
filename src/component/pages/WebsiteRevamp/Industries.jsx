import React from 'react'
import CommonCard from '../common/CommonCard'

export const Industries = ()=>{
  const boxHeight = "280px"; 
    const seoData = [   
      {
        title: "E-Commerce",
        desc: "We optimize product pages, streamline checkout flows, and create intuitive navigation to drive higher conversions. Every design and content element is crafted to make shopping seamless, encouraging repeat visits and boosting revenue.",
        icon: "/images/rounded-icons/r4.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Finance & Fintech",
        desc:"We simplify complex financial products and services, making them easy to understand while ensuring full compliance. Clear messaging and user-friendly interfaces build trust and confidence among your clients.",
        icon:"/images/rounded-icons/r114.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Healthcare & Wellness",
        desc:"Websites in healthcare require clarity and credibility. We design informative, easy-to-navigate sites that educate visitors, highlight services, and build trust with patients and clients alike.",
        icon:"/images/rounded-icons/r12.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Education & EdTech",
        desc:"From schools to online learning platforms, we create intuitive experiences that engage students, parents, and educators. Thoughtful design and interactive features enhance learning and improve user satisfaction.",
        icon:"/images/rounded-icons/r13.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"B2B Enterprises",
        desc:"For B2B businesses, we focus on showcasing expertise, thought leadership, and case studies. Our approach generates qualified leads, nurtures relationships, and positions your brand as a trusted industry authority.",
        icon:"/images/rounded-icons/r35.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Hospitality & Travel",
        desc:"We craft immersive digital experiences that inspire bookings and excursions. Stunning visuals, compelling storytelling, and seamless navigation ensure your visitors are excited to explore and engage with your offerings.",
        icon:"/images/rounded-icons/r2.png", 
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Industries That Thrive with Our<br/>Website Revamp Services"
            description="We’ve Successfully Revamped Websites Across Multiple Industries:"
            footer="Our approach adapts to your industry, audience, and growth objectives."
        />
}