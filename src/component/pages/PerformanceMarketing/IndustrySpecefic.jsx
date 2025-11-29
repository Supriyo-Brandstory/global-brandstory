import React from 'react'
import CommonCard from '../common/CommonCard'

export const IndustrySpecefic = ()=>{
  const boxHeight = "215px"; 
    const data = [   
      {
        title: "ECommerce",
        desc: "Set up dynamic product feeds, optimize for ROAS, and build retargeting funnels that drive repeat purchases and upsells.",
        icon: "/images/rounded-icons/r93.png",
        background:"url('/images/ppc/p-bg-1.png')", 
        height: boxHeight
      },
      {
        title:"B2B SaaS",
        desc:"Campaigns focus on full-funnel messaging. From awareness to demo requests, with long-cycle nurturing and platform-specific targeting.",
        icon:"/images/rounded-icons/r6.png",
        background:"url('/images/ppc/p-bg-2.png')", 
        height: boxHeight
      },
      {
        title:"Real Estate",
        desc:"Create geo-targeted campaigns backed by project-specific landing pages and lead validation workflows to improve quality and conversion.",
        icon:"/images/rounded-icons/r45.png",
        background:"url('/images/ppc/p-bg-3.png')", 
        height: boxHeight
      },
      {
        title:"Healthcare",
        desc:"Run HIPAA-compliant ad campaigns with service-line segmentation, location targeting, and funnel structures that drive appointment bookings.",
        icon:"/images/rounded-icons/r3.png", 
        background:"url('/images/ppc/p-bg-1.png')", 
        height: boxHeight
      },
      {
        title:"EdTech",
        desc:"Strategies focus on timing bursts around academic calendars, tailoring creatives for parent, student personas, and planning for long-term LTV.",
        icon:"/images/rounded-icons/r22.png",
        background:"url('/images/ppc/p-bg-2.png')", 
        height: boxHeight
      },
      {
        title:"Automotive",
        desc:"Geo-fenced test drive campaigns to dealership inventory ads and service promotions. Help brands move metal, fast and efficiently.",
        icon:"/images/rounded-icons/r94.png", 
        background:"url('/images/ppc/p-bg-3.png')", 
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={data} 
            heding="Industry-Specific Strategies We<br/>Customize"
            description="Our Performance Marketing Services Adapt To Each Industry’s Dynamics. One-Size Doesn’t Scale. Custom Does."
            footer="No matter your industry, our process adapts to your audience and goals."
        />
}