import React from 'react'
import CommonCard from '../common/CommonCard'

export const TheIndustries = ()=>{
  const boxHeight = "280px"; 
    const seoData = [   
      {
        title: "Gaming",
        desc: "Talk to gamers in small communities who love games. Show your ads where they discuss new games, tips, and updates.",
        icon: "/images/rounded-icons/r30.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Tech & SaaS",
        desc:"Reach people who like new technology and apps. Show them your tools and software that can make life easier or more fun.",
        icon:"/images/rounded-icons/r6.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Crypto & Web3",
        desc:"Show your brand to people who invest and follow blockchain. Connect with those who are learning about crypto trends.",
        icon:"/images/rounded-icons/r31.png", 
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Health & Wellness",
        desc:"Connect with people who care about health and staying well. Show tips, products, or services that help them live better.",
        icon:"/images/rounded-icons/r3.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Finance",
        desc:"Teach and reach people who know about money and finance. Help them make smart choices or learn about your services.",
        icon:"/images/rounded-icons/r32.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Education",
        desc:"Tell people about classes and learning tools. Reach students, teachers, or anyone who wants to learn new skills.",
        icon:"/images/rounded-icons/r33.png", 
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Consumer Electronics",
        desc:"Show products to people who like tech gadgets. Share news, devices, reviews, and tips for smart buying.",
        icon:"/images/rounded-icons/r34.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="The Industries That Thrive With Reddit Ads"
            description="Instagram works across industries, but how you use it depends on who you are speaking to. We personalize every campaign to fit your vertical, your audience, and your growth objectives."
            footer=""
        />
}