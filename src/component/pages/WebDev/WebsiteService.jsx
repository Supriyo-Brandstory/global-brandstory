import React from 'react'
import CommonCard from '../common/CommonCard'

export const WebsiteService = ()=>{
  const boxHeight = "380px";
    const seoData = [
      {
        title: "Web Design Services",
        desc: "We Craft Mobile-First, UI/UX-Led Website Designs That Resonate With Users And Perform Seamlessly Across Devices. Every Interface Is Built To Enhance Navigation, Reduce Friction, And Inspire Meaningful Interactions—Ultimately Improving Dwell Time And Conversion Rates.",
        icon: "/images/WebDev/ws-1.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"E-Commerce Website Development",
        desc:"From Product Discovery To Checkout, We Build Secure, Scalable E-Commerce Platforms That Are Optimized For Speed, SEO, And Conversion. Whether You're Launching A D2C Brand Or Scaling A Global Storefront, Our E-Commerce Development Solutions (Shopify, Magento, WooCommerce, And More) Deliver Frictionless Shopping Journeys.",
        icon:"/images/WebDev/ws-2.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Landing Page Development",
        desc:"Need To Power A Campaign Or Capture High-Intent Leads? Our SEO-Optimized, Fast-Loading Landing Pages Are Purpose-Built To Support Best Marketing, Product Launches, And Sales Funnels. Every Element—From Copy To CTA—Is Crafted To Maximize ROI.",
        icon:"/images/WebDev/ws-3.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Website Revamp Strategies",
        desc:"Your Website Should Grow With Your Brand. Our Website Redesign Services Focus On Elevating Aesthetics, Modernizing Architecture, And Improving Usability. Whether You're Repositioning Your Brand Or Improving Core Web Vitals, We Ensure Your New Site Delivers Measurable Gains In Engagement And Performance.",
        icon:"/images/WebDev/ws-4.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Website Maintenance & Support",
        desc:"We Don't Stop At Launch. With Proactive Website Maintenance Services, We Ensure Your Site Stays Secure, Updated, And Aligned With Evolving Digital Standards. From Performance Monitoring To Plugin Updates And Technical Support, We've Got Your Backend Covered.",
        icon:"/images/WebDev/ws-5.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
        seoData={seoData} 
        heding="All-in-One Website Services Built Around Your Goals"
        description="Our Capabilities Go Beyond Design And Code. At BrandStory, We Think In Systems, Structure, And User Behavior—Delivering Experiences That Create Momentum For Your Business.<br /><b class='highlited-text'>Our Core Services:<br/></b>"
        footer="From Delivering 1.5× Revenue For 500+ Clients To Helping A Tech Company Rank 80+ Keywords On Page 1, Our Solutions Are Rooted In Results. Work With A Website Development Company That Understands Your Industry, Audience, And Ambition."
    />
}