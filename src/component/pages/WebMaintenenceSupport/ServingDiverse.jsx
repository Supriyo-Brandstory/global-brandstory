import React from 'react'
import CommonCard from '../common/CommonCard'

export const ServingDiverse = () => {
  const boxHeight = "320px"; 
  const seoData = [   
    {
      title: "Enterprises With Legacy Websites",
      desc: "Organizations with older websites that require continuous support and modernization benefit from our expertise. We bring legacy systems up to modern standards while ensuring seamless performance and reliability.",
      icon: "/images/rounded-icons/r7.png",
      background: "url('/images/ppc/p-bg-1.png')",
      height: boxHeight
    },
    {
      title: "Companies With Custom Websites",
      desc: "Custom-built websites often need specialized technical knowledge for smooth operation. Our team provides the expertise to manage complex architectures, updates, and integrations without disrupting your business.",
      icon: "/images/rounded-icons/r6.png",
      background: "url('/images/ppc/p-bg-2.png')",
      height: boxHeight
    },
    {
      title: "Organizations Prioritizing Operational Continuity",
      desc: "For businesses that cannot afford downtime or interruptions, we ensure uninterrupted website performance. Proactive monitoring, preventive maintenance, and rapid issue resolution keep operations running smoothly.",
      icon: "/images/rounded-icons/r38.png",
      background: "url('/images/ppc/p-bg-3.png')",
      height: boxHeight
    },
    {
      title: "E-Commerce Platforms",
      desc: "Online stores demand fast, secure, and reliable websites. We optimize every aspect of performance—from product pages to checkout flows—ensuring a seamless shopping experience that drives conversions.",
      icon: "/images/rounded-icons/r4.png",
      background: "url('/images/ppc/p-bg-1.png')",
      height: boxHeight
    },
    {
      title: "Professional Services & B2B Companies",
      desc: "We partner with service-oriented and B2B organizations to provide trusted, expert website support. Our solutions help maintain credibility, showcase expertise, and generate leads through consistent performance and optimized functionality.",
      icon: "/images/rounded-icons/r90.png",
      background: "url('/images/ppc/p-bg-2.png')",
      height: boxHeight
    }
  ];

  return (
    <CommonCard 
      seoData={seoData} 
      heding="Serving Diverse Industries with Tailored Digital Solutions"
      description="Our services cater to businesses with complex needs:"
      footer="No matter your industry, our proactive maintenance plan ensures your website works flawlessly."
    />
  )
}