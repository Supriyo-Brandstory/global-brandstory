import React from 'react'
import CommonCard from '../common/CommonCard'


export const WhatAeoMatters = ()=>{
  const boxHeight = "250px";
    const data = [
      {
        
        title: "Credibility Boost",
        desc: "When AI platforms pick your content, it builds instant trust. Users believe the answer is correct and your brand becomes part of that trust.",
        icon: "/images/round-index/1.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
      {
        
        title: "Authority Positioning",
        desc: "Being selected as the answer shows that your content is reliable. It gives your brand expert status without saying it directly. AI engines treat you as the source.",
        icon: "/images/round-index/2.png", 
        background: "url('/images/ppc/bg-2.png')", 
        height: boxHeight
      },
      {
        
        title: "Long-Term Visibility",
        desc: "Even when users don’t click on links, your content can still appear in AI responses. That keeps your brand visible and relevant even in a zero-click world.",
        icon: "/images/round-index/3.png", 
        background: "url('/images/ppc/bg-3.png')", 
        height: boxHeight
      }
    ];

    return <CommonCard
        seoData={data}
        heding="Why AEO Matters More Than Ever"
        description="Around 40% of searches now happen on AI tools like ChatGPT and Bing AI. People get answers right away without visiting websites. AEO helps your brand show up directly in these answers so you don’t get missed.<br/><br/>Why AEO is critical now:"
        footer="From setup to scaling, it’s all managed in sync."
    />
}