import React from 'react'
import CommonCard from '../common/CommonCard'

export const TailoredStrategies = ()=>{
  const boxHeight = "200px"; 
    const seoData = [   
      {
        title: "Technology",
        desc: "Whitepapers, Webinars, And Product Videos That Explain Complex Ideas And Showcase Innovation.",
        icon: "/images/rounded-icons/r27.png", 
        background:"url('/images/ppc/p-bg-1.png')", 
        height: boxHeight
      },
      {
        title: "Healthcare",
        desc: "Patient Stories, Case Studies, And Explainer Videos That Build Trust And Empathy.",
        icon: "/images/rounded-icons/r17.png", 
        background:"url('/images/ppc/p-bg-2.png')", 
        height: boxHeight
      },
      {
        title: "E-Commerce & Retail",
        desc: "Product Guides, Influencer Campaigns, And Social Stories That Inspire Action.",
        icon: "/images/rounded-icons/r84.png", 
        background:"url('/images/ppc/p-bg-3.png')", 
        height: boxHeight
      },
      {
        title: "Finance & Education",
        desc: "Thought Leadership Articles, Interactive Content, And Email Series That Inform And Engage.",
        icon: "/images/rounded-icons/r13.png", 
        background:"url('/images/ppc/p-bg-1.png')", 
        height: boxHeight
      }
    ];

    return (
        <>
            <CommonCard 
              seoData={seoData} 
              heding="Tailored Strategies for Every Industry" 
              description="Not All Content And Not All Audiences Are The Same. Our Content Promotion For Industries Adapts Strategies To Sector-Specific Needs:"
            />
            <p class="max-w-[1200px] text-[18px] mb-[60px] mx-auto text-center">
                Every Promotion Is Customized, Ensuring The Right Content Reaches The Right Audience In The Most Effective Format.
            </p>
        </>
    );
}