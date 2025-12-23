import React from 'react'
import CommonCard from '../common/CommonCard'

export const Delivering = () => {
  const boxHeight = "280px";
  const seoData = [
    {
      title: "E-Commerce",
      desc: "We build back-end systems that power seamless shopping experiences, manage inventory efficiently, and ensure secure, reliable transactions for both small and large-scale online stores.",
      icon: "/images/rounded-icons/r4.png",
      background: "url('/images/ppc/p-bg-1.png')",
      height: boxHeight
    },
    {
      title: "Fintech",
      desc: "Our platforms handle high-volume financial transactions while maintaining strict compliance and security standards, giving both businesses and users confidence in every interaction.",
      icon: "/images/rounded-icons/r32.png",
      background: "url('/images/ppc/p-bg-2.png')",
      height: boxHeight
    },
    {
      title: "Healthcare",
      desc: "We deliver HIPAA-compliant back-end solutions that protect sensitive patient data, streamline workflows, and ensure privacy without compromising performance.",
      icon: "/images/rounded-icons/r12.png",
      background: "url('/images/ppc/p-bg-3.png')",
      height: boxHeight
    },
    {
      title: "SaaS Platforms",
      desc: "Our team develops scalable, multi-tenant architectures capable of supporting growing user bases while maintaining reliability, security, and flexibility for complex applications.",
      icon: "/images/rounded-icons/r27.png",
      background: "url('/images/ppc/p-bg-1.png')",
      height: boxHeight
    },
    {
      title: "Logistics & Supply Chain",
      desc: "From real-time tracking to inventory management, we create back-end systems that enhance operational efficiency, visibility, and data-driven decision-making for logistics and supply chain enterprises.",
      icon: "/images/rounded-icons/r35.png",
      background: "url('/images/ppc/p-bg-2.png')",
      height: boxHeight
    }
  ];

  return (
    <CommonCard
      seoData={seoData}
      heding="Delivering Back-End Development Services for Diverse Businesses"
      description="Our back-end solutions power applications across industries:"
      footer="No matter your industry, we create back-ends designed to scale with your business."
    />
  )
}