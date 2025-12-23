import React from 'react'
import CommonCard from '../common/CommonCard'

export const Industries = ()=>{
  const boxHeight = "300px"; 
    const seoData = [   
      {
        title: "Startups",
        desc: "We help startups bring their first digital products to life with high-impact, responsive websites. Our approach focuses on delivering scalable solutions that grow with your business while creating a strong brand presence from day one.",
        icon: "/images/rounded-icons/r104.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title: "Enterprises",
        desc: "For large organizations, we modernize legacy systems with scalable and robust front-end solutions. By combining performance optimization, maintainable code, and seamless integrations, we transform outdated platforms into modern, high-performing digital experiences.",
        icon:"/images/rounded-icons/r110.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title: "E-Commerce",
        desc: "We optimize user experiences for online stores, creating intuitive navigation, fast-loading pages, and smooth checkout flows. Our designs focus on boosting engagement, improving conversion rates, and delivering a frictionless shopping experience.",
        icon:"/images/rounded-icons/r84.png", 
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title: "B2B Platforms",
        desc: "We build responsive, user-friendly applications for professional services, ensuring complex workflows are simplified and accessible. From dashboards to interactive portals, our solutions enhance operational efficiency and user satisfaction.",
        icon:"/images/rounded-icons/r95.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Industries That Rely on Our Front-End Development Solutions"
            description="We deliver front-end solutions across industries, including:"
            footer="Our solutions are adaptable, ensuring your digital presence evolves with your business needs."
        />
}