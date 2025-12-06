import React from 'react'
import CommonCard from '../common/CommonCard'

export const RealTimeOptimization = ()=>{
  const boxHeight = "220px";
    const seoData = [
      {
        title: "Smart AI Adjustments",
        desc: "We Use AI To Change Bids And Move Your Budget To What Works Best. This Helps Your Ads Get More Results.",
        icon: "/images/rounded-icons/r99.png", 
        background:"url('/images/ppc/p-bg-1.png')", 
        height: boxHeight
      },
      {
        title:"Track Results",
        desc:"We Follow Important Numbers Like Clicks, Leads, And Return On Ad Spend (ROAS). This Helps Us See What Is Working.",
        icon:"/images/rounded-icons/r100.png", 
        background:"url('/images/ppc/p-bg-2.png')", 
        height: boxHeight
      },
      {
        title:"Stop Fraud",
        desc:"We Check For Fake Clicks Or Spam. This Keeps Your Money Safe And Ensures Only Real People See Your Ads.",
        icon:"/images/rounded-icons/r101.png", 
        background:"url('/images/ppc/p-bg-3.png')", 
        height: boxHeight
      },
      {
        title:"Clear Reports",
        desc:"You Get Easy-To-Understand Reports. You Can See How Your Ads Are Performing At Any Time.",
        icon:"/images/rounded-icons/r102.png", 
        background:"url('/images/ppc/p-bg-1.png')", 
        height: boxHeight
      }
    ];

    return <CommonCard
            seoData={seoData}
            heding="Real-Time Optimization and<br/>Transparent Reporting"
            description="Campaigns Are Only As Good As Their Insights. With Programmatic Ad Reporting And Real-Time Optimization, We Track Performance Continuously."
            footer="Your Campaigns Evolve In Real Time, So You Always Know What’s Working, And Why."
        />
}