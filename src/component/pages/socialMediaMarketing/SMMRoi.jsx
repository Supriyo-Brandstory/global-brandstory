import React from 'react'
import CommonCard from '../common/CommonCard'

export const SMMRoi = () => {
  const seoData = [ 
  {
    title: "E-Commerce",
    desc: "Instagram And Pinterest Posts With Product Visuals, Short TikTok Videos Showing Products",
    icon: "/images/SMM/ecom.webp",
    background:"url('/images/SMM/ecom-bg.webp')",
  },
  {
    title:"Hospitality",
    desc:"Facebook And Instagram Stories Showcasing Experiences, Influencer Mentions",
    icon:"/images/SMM/hospitality.webp",
    background:"url('/images/SMM/hospitality-bg.webp')",
  },
  {
    title:"B2B Services",
    desc:"LinkedIn Articles, Case Study Posts, Webinars Shared On Social Platforms",
    icon:"/images/seo/industry-focused-campaigns-icon.png",
    background:"url('/images/seo/industry-focused-campaigns-bg.webp')",
  },
  {
    title:"Healthcare",
    desc:"Informative Posts On Facebook, Instagram Reels With Tips, LinkedIn Updates For Professionals",
    icon:"/images/seo/integrated-marketing-approach-icon.png",
    background:"url('/images/seo/full-seo-bg.webp')",
  },
  {
    title:"Real Estate",
    desc:"YouTube Property Walkthrough Videos, Instagram Carousel Posts, Client Testimonials",
    icon:"/images/seo/100-google-compliant-methods-icon.png",
    background:"url('/images/seo/clear-transparent-reporting-bg.webp')",
  }
  
  

];
  return (
  <CommonCard seoData={seoData} heding="What Sets Our SEO Apart in a Crowded Market"/>
  )
}