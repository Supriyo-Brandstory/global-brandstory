import React from 'react'
import CommonCard from '../common/CommonCard'

export const DeliveringVideo = () => {
    const boxHeight = "210px"; 
    const seoData = [   
      {
        title: "Corporate & Enterprise",
        desc: "Polished videos for internal communications, product launches, and brand storytelling that resonate with employees and stakeholders.",
        icon: "/images/rounded-icons/r112.png",
        background: "url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title: "E-Commerce & Retail",
        desc: "Promotional campaigns, product demos, and social media content designed to drive engagement, conversions, and brand awareness.",
        icon: "/images/rounded-icons/r8.png",
        background: "url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title: "Technology & SaaS",
        desc: "Clear, compelling explainer videos and software demos that simplify complex solutions and highlight value propositions.",
        icon: "/images/rounded-icons/r18.png",
        background: "url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title: "Healthcare & Fintech",
        desc: "Informative, trust-building content that communicates compliance, security, and expertise to patients and clients.",
        icon: "/images/rounded-icons/r3.png",
        background: "url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title: "Media & Entertainment",
        desc: "Documentaries, interviews, and series that captivate audiences and maintain consistent narrative flow.",
        icon: "/images/rounded-icons/r119.png",
        background: "url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return (
        <CommonCard 
            seoData={seoData} 
            heding="Delivering Video Editing Services for Diverse Businesses"
            description="We've worked with brands across multiple sectors, including:"
            footer="No matter your industry, our approach is tailored to your audience and goals."
        />
    );
}