import React from 'react'
import CommonCard from '../common/CommonCard'

export const IndustriesWeServe = ()=>{
  const boxHeight = "222px";
    const seoData = [
      {
        title: "Healthcare",
        desc: "We Help Healthcare Companies Teach Patients And Increase Brand Awareness.",
        icon: "/images/rounded-icons/r3.png", 
        background:"url('/images/ppc/p-bg-1.png')", 
        height: boxHeight
      },
      {
        title:"ECommerce",
        desc:"We Run Ads That Retarget Shoppers And Help Them Buy.",
        icon:"/images/rounded-icons/r32.png", 
        background:"url('/images/ppc/p-bg-2.png')", 
        height: boxHeight
      },
      {
        title:"BFSI (Banking, Financial Services, Insurance)",
        desc:"We Create Ads To Generate Leads For Financial Products.",
        icon:"/images/rounded-icons/r77.png", 
        background:"url('/images/ppc/p-bg-3.png')", 
        height: boxHeight
      },
      {
        title:"Real Estate",
        desc:"We Run Campaigns To Find People Who Really Want To Buy Or Rent.",
        icon:"/images/rounded-icons/r95.png", 
        background:"url('/images/ppc/p-bg-1.png')", 
        height: boxHeight
      },
      {
        title:"SaaS",
        desc:"We Help Software Companies Get Trial Sign-Ups And Demo Bookings.",
        icon:"/images/rounded-icons/r103.png", 
        background:"url('/images/ppc/p-bg-2.png')", 
        height: boxHeight
      }
    ];

    return <CommonCard
            seoData={seoData}
            heding="Industries We Serve with<br/>Programmatic Advertising"
            description="Our Programmatic Advertising For Industries Approach Tailors Campaigns To Business Goals:"
            footer="Each Vertical Gets A Strategy Built Around Its Audience Behavior And ROI Objectives."
        />
}