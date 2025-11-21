import React from 'react'
import CommonCard from '../common/CommonCard'

export const ExpertiseAcross = ()=>{
  const boxHeight = "270px";
    const data = [
      {
        
        title: "Healthcare",
        desc: "We create educational campaigns that build trust with patients, explain complex medical information clearly, and support informed decision-making, enhancing engagement and long-term loyalty.",
        icon: "/images/rounded-icons/r3.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
      {
        
        title: "Finance",
        desc: "Our content emphasizes clarity and compliance, helping financial institutions inform customers, guide decisions, and maintain credibility in a highly regulated environment.",
        icon: "/images/rounded-icons/r32.png", 
        background: "url('/images/ppc/bg-2.png')", 
        height: boxHeight
      },
      {
        
        title: "SaaS & Tech",
        desc: "We develop thought leadership content that nurtures leads, showcases expertise, and accelerates product adoption while highlighting your brand’s innovative edge.",
        icon: "/images/rounded-icons/r92.png", 
        background: "url('/images/ppc/bg-3.png')", 
        height: boxHeight
      },
      {
        
        title: "Retail & E-commerce",
        desc: "Engaging and persuasive content drives online sales, strengthens customer relationships, and improves retention across digital touchpoints.",
        icon: "/images/rounded-icons/r4.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
    ];

    return <CommonCard
        seoData={data}
        heding="Expertise Across Industries"
        description="We design content strategies that align with your market, audience, and business goals, ensuring every piece of content delivers impact:"
        footer="Our strategies are customized for both B2B and B2C businesses, delivering results specific to your sector."
    />
}