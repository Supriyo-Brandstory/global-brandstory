import React from 'react'
import CommonCard from '../common/CommonCard'

export const IndustriesBenifiting = ()=>{
  const boxHeight = "280px"; 
    const seoData = [   
      {
        title: "Startups",
        desc: "Build scalable, future-proof technology foundations that support rapid growth and adapt as business needs evolve.",
        icon: "/images/rounded-icons/r104.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Scale-Ups",
        desc:"Streamline and optimize systems to sustain fast expansion, reduce inefficiencies, and improve operational performance.",
        icon:"/images/rounded-icons/r87.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Enterprises",
        desc:"Lead complex digital transformation initiatives, aligning technology with strategic objectives to drive measurable business outcomes.",
        icon:"/images/rounded-icons/r2.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Retail",
        desc:"Integrate platforms and solutions that enhance customer experiences, improve sales processes, and boost engagement across channels.",
        icon:"/images/rounded-icons/r105.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Manufacturing",
        desc:"Automate workflows, reduce operational costs, and increase productivity through smart, technology-driven processes.",
        icon:"/images/rounded-icons/r29.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"SaaS & Tech",
        desc:"Design systems and infrastructure that allow products and services to scale seamlessly in response to market demands.",
        icon:"/images/rounded-icons/r47.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Industries Benefiting from Our Services"
            description="We Know That Each Industry Has Unique Challenges, That’s Why Our Consulting Approach Is Always Contextual, Not Generic."
            footer="Wherever you are, whatever you do, we tailor strategies to your specific business context."
        />
}