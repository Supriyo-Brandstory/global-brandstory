import React from 'react'
import CommonCard from '../common/CommonCard'

export const HowDiffrent = ()=>{
  const boxHeight = "280px"; 
    const seoData = [   
      {
        title: "E-Commerce",
        desc: "Trending product videos paired with limited-time offers drive impulse purchases. Creative formats like unboxing, styling tips, and quick product demos build urgency and social proof simultaneously.",
        icon: "/images/rounded-icons/r4.png", 
        background:"url('/images/ppc/p-bg-1.png')", 
        height: boxHeight
      },
      {
        title:"Beauty & Cosmetics",
        desc:"Step-by-step tutorials, influencer reviews, and 'get ready with me' videos connect emotionally with viewers, building trust that translates into immediate sales. Beauty campaigns often see spikes during trend cycles tied to seasonal looks or viral challenges.",
        icon:"/images/rounded-icons/r96.png", 
        background:"url('/images/ppc/p-bg-2.png')", 
        height: boxHeight
      },
      {
        title:"SaaS & Tech",
        desc:"Short explainer videos break down complex products into easy-to-understand benefits. Animated walkthroughs, real user testimonials, and problem-solution narratives help drive trial and sign-ups and demo requests.",
        icon:"/images/rounded-icons/r69.png", 
        background:"url('/images/ppc/p-bg-3.png')", 
        height: boxHeight
      },
      {
        title:"Real Estate",
        desc:"Virtual property walk-throughs and lifestyle-focused neighborhood tours create a sense of presence, attracting highly-intent buyers even before an in-person visit. Strategic retargeting ensures interested viewers stay engaged.",
        icon:"/images/rounded-icons/r95.png", 
        background:"url('/images/ppc/p-bg-1.png')", 
        height: boxHeight
      },
      {
        title:"Mobile Apps",
        desc:"Influencer-led demonstrations highlight app features in real-world scenarios, sparking curiosity and boosting downloads. Gamified, CTAs and reward-driven content often lead to accelerated adoption rates.",
        icon:"/images/rounded-icons/r97.png", 
        background:"url('/images/ppc/p-bg-2.png')", 
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="How Different Industries Are<br/>Winning on TikTok"
            description="TikTok Ad Management Works Across Industries Because The Platform Adapts To<br/>Almost Any Storytelling Style:"
            footer=""
        />
}