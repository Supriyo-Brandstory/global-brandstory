import React from 'react'
import CommonCard from '../common/CommonCard'


export const AdvancedAnalytics = ()=>{
  const boxHeight = "270px";
    const data = [
      {
        
        title: "Subscriber growth",
        desc: "We monitor how many new people are subscribing to your channel over time.",
        icon: "/images/round-index/1.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
      {
        
        title: "Watch time",
        desc: "We track how long viewers are watching your videos to understand what keeps them engaged.",
        icon: "/images/round-index/2.png", 
        background: "url('/images/ppc/bg-2.png')", 
        height: boxHeight
      },
      {
        
        title: "Clicks and conversions",
        desc: "We measure how many viewers take action, like visiting your website or making a purchase.",
        icon: "/images/round-index/3.png", 
        background: "url('/images/ppc/bg-3.png')", 
        height: boxHeight
      },
      {
        
        title: "ROI",
        desc: "We calculate the return on your investment to see the real value your campaigns bring.",
        icon: "/images/round-index/4.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      }
    ];

    return <CommonCard
        seoData={data}
        heding="Advanced Analytics and Campaign Performance Reporting"
        description="We track everything that matters:"
        footer="With custom dashboards, you get clear insights into your campaigns. We translate data into actionable steps, helping you refine strategy and maximize impact continuously."
    />
}