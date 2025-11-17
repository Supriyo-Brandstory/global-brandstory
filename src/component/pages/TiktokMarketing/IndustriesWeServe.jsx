import React from 'react'
import CommonCard from '../common/CommonCard'

export const IndustriesWeServe = ()=>{
  const boxHeight = "230px";
    const seoData = [
      {
        title: "Beauty & Personal Care",
        desc: "Engaging product demos, influencer tutorials, and transformation videos that drive brand awareness and conversions.",
        icon: "/images/rounded-icons/r10.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Fashion & Lifestyle",
        desc:"Styling videos, unboxings, and haul trends that showcase products in real-life scenarios and boost engagement.",
        icon:"/images/rounded-icons/r11.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Health & Fitness",
        desc:"Challenges, quick tips, and coach-led content that inspire, motivate, and build a loyal community.",
        icon:"/images/rounded-icons/r12.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"EdTech & Online Courses",
        desc:"Highlight courses, share student success stories, and create interactive lessons to attract and retain learners.",
        icon:"/images/rounded-icons/r13.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Food & Beverage",
        desc:"Recipe tutorials, quick-serve ideas, and behind-the-scenes videos that spark appetite and brand interest.",
        icon:"/images/rounded-icons/r14.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Travel & Experiences",
        desc:"Destination reels, travel vlogs, and experience highlights that transport viewers and encourage bookings.",
        icon:"/images/rounded-icons/r15.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Gaming & Entertainment",
        desc:"Launch trailers, behind-the-scenes clips, and live content that capture attention and fan excitement.",
        icon:"/images/rounded-icons/r16.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"D2C & Ecommerce",
        desc:"User-generated content, creator reviews, and product walkthroughs that build trust and drive purchases.",
        icon:"/images/rounded-icons/r8.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      }
    ];

    
    return <CommonCard 
        seoData={seoData} 
        heding="Industries We Serve with TikTok Marketing"
        description="Instagram works across industries, but how you use it depends on who you are speaking to. We personalize every campaign to fit your vertical, your audience, and your growth objectives."
        footer=""
    />
}