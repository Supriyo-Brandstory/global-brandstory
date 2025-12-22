import React from 'react'
import CommonCard from '../common/CommonCard'

export const IndustriesWeServe = ()=>{
  const boxHeight = "260px"; 
    const seoData = [   
      {
        title: "Gaming & Entertainment",
        desc: "We optimize your app listing to stand out, attract the right audience, and drive downloads, helping your app compete successfully in crowded app stores.",
        icon: "/images/rounded-icons/r118.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title: "Finance & Banking",
        desc: "We enhance discoverability while emphasizing credibility and security, encouraging users to confidently download and engage with your banking or fintech solutions.",
        icon: "/images/rounded-icons/r32.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title: "Health & Fitness",
        desc: "Our ASO strategies ensure your app reaches the right users and delivers a seamless introduction, boosting engagement and long-term retention.",
        icon: "/images/rounded-icons/r12.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title: "Retail & E-Commerce",
        desc: "We help retail apps maximize organic installs and user engagement by optimizing keywords, visuals, and metadata.",
        icon: "/images/rounded-icons/r4.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title: "Travel & Hospitality",
        desc: "Travelers increasingly rely on mobile apps for planning and bookings. We optimize your app to appear in relevant searches, engage users with compelling visuals, and capture a global audience seeking solutions in real time.",
        icon: "/images/rounded-icons/r98.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Industries We Serve"
            description="Our ASO services cater to a wide range of industries, including:"
            footer="Whether you’re a startup launching a new app or an enterprise looking to scale mobile growth, we have the experience to deliver."
        />
}