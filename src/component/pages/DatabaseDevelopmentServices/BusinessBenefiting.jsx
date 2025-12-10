import React from 'react'
import CommonCard from '../common/CommonCard'

export const BusinessBenefiting = ()=>{
  const boxHeight = "240px"; 
    const seoData = [   
      {
        title: "Startups",
        desc: "We deliver rapidly scalable database solutions that grow seamlessly with your business, supporting expansion and evolving needs.",
        icon: "/images/rounded-icons/r104.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Enterprise Solutions",
        desc:"For large organizations with complex operations, we design robust databases that handle high volumes of data while maintaining performance and scalability.",
        icon:"/images/rounded-icons/r87.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"E-Commerce & Retail",
        desc:"Our high-performance databases manage inventory, transactions, and analytics efficiently, enabling smooth operations and better customer experiences.",
        icon:"/images/rounded-icons/r109.png", 
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Finance & Insurance",
        desc:"We build secure, compliant systems that safely manage sensitive financial and insurance data while meeting regulatory requirements.",
        icon:"/images/rounded-icons/r93.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Healthcare",
        desc:"Our structured, reliable databases support critical patient and operational data, ensuring accuracy, availability, and compliance.",
        icon:"/images/rounded-icons/r17.png", 
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"SaaS Platforms",
        desc:"We provide scalable, flexible database solutions that grow with your user base, ensuring consistent performance and reliability.",
        icon:"/images/rounded-icons/r18.png", 
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Businesses Benefiting from Our<br/>Database Services"
            description="We’ve Helped Businesses Across Multiple Sectors Unlock The Power Of Their Data:"
            footer="No matter your industry, we design custom database solutions that solve your unique data challenges."
        />
}