import React from 'react'
import CommonCard from '../common/CommonCard'

export const IndustriesWeServe = ()=>{
  const boxHeight = "300px"; 
    const seoData = [   
      {
        title: "D2C Brands",
        desc: "We build rapid-response campaigns tailored to product drops, seasonal demand, and flash sales. Every media plan is optimized for direct response, conversions, and quick scaling. Agile targeting and performance tracking help D2C brands stay ahead of demand cycles.",
        icon: "/images/rounded-icons/r7.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Tech & SaaS",
        desc:"We craft lead-focused strategies designed to drive user sign-ups, demos, and trial activations. Media placements are aligned to funnel stages and buyer intent signals, from awareness to onboarding, using tailored campaigns that accelerate pipeline growth.",
        icon:"/images/rounded-icons/r6.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Healthcare",
        desc:"We ensure compliant, ethical ad placements across secure, brand-safe environments. Our focus is on brand and platform-level controls to maintain audience trust and regulation standards. Ideal for hospitals, clinics, diagnostics, and health-tech platforms.",
        icon:"/images/rounded-icons/r12.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Fintech",
        desc:"Our campaigns are built to inspire trust through secure placements and measured messaging. We target financially active audiences, using contextual, behavioral, and CRM data. Perfect for banking, insurance, investment apps, and lending platforms.",
        icon:"/images/rounded-icons/r44.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"ECommerce",
        desc:"We manage performance-driven buying with focus on customer value, repeat purchases, and LTV. Retargeting, product feed ads, and seasonal campaigns are all optimized for GDN, Meta, Spotify, Amazon DSP, In-App, and OTT channels.",
        icon:"/images/rounded-icons/r8.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Real Estate",
        desc:"We activate geo-fenced video and display ads to reach location-specific buyers. We align media to high-value listing releases, launch events, or project phases. Designed for residential, commercial, and luxury real estate campaigns.",
        icon:"/images/rounded-icons/r45.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Industries We Serve with Media Buying Solutions"
            description="We Don't Use A One-Size-Fits-All Media Playbook. Our Experience Spans Dozens of Categories, But Our Inventory Buying Strategies Are Always Tailored to Your Industry Dynamics."
            footer="We Know That Media Buying by Industry Requires Nuance and We Bring That to Every Engagement."
        />
}