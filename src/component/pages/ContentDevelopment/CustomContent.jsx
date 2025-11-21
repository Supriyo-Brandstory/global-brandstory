import React from 'react'
import CommonCard from '../common/CommonCard'

export const CustomContent = ()=>{
  const boxHeight = "230px"; 
    const seoData = [ 
      {
        title: "Technology",
        desc: "From in-depth whitepapers and technical blogs to easy-to-follow product guides, we simplify complex ideas and position your brand as an authority.",
        icon: "/images/rounded-icons/r27.png",
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Healthcare",
        desc:"We create clear, patient-friendly content that educates, builds trust, and supports meaningful connections between providers and patients.",
        icon:"/images/rounded-icons/r17.png",
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Finance",
        desc:"Our team produces compliant, accurate, and trust-building content that helps audiences make informed decisions while strengthening your credibility.",
        icon:"/images/rounded-icons/r28.png",
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"B2B & B2C",
        desc:"Whether you’re targeting businesses or end consumers, we craft tailored strategies that align with your goals and speak your audience’s language.",
        icon:"/images/rounded-icons/r4.png",
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      }
    ];

    return <CommonCard seoData={seoData} heding="Custom Content for Every Sector" description="We tailor our content development services to your industry:"/>
}