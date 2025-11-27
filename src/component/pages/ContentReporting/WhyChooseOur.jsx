import React from 'react'
import CommonCard from '../common/CommonCard'

export const WhyChooseOur = ()=>{
  const boxHeight = "310px"; 
    const seoData = [   
      {
        title: "Visualizing Performance Clearly",
        desc: "Complex Metrics Are Translated Into Intuitive Dashboards And Charts, So Your Team Can Quickly Grasp Performance Trends And Make Informed Decisions Without Being Overwhelmed By Data.",
        icon: "/images/rounded-icons/r36.png", 
        background:"url('/images/ppc/p-bg-1.png')", 
        height: boxHeight
      },
      {
        title: "Channel and Content Type Analysis",
        desc: "Every Platform (Email, Social, Website) And Content Type (Blogs, Videos, Social Posts) Performs Differently. We Break Down Performance By Channel And Format To Show Which Areas Are Driving The Most Value, Enabling Smarter Resource Allocation.",
        icon: "/images/rounded-icons/r37.png", 
        background:"url('/images/ppc/p-bg-2.png')", 
        height: boxHeight
      },
      {
        title: "Connecting Metrics to Business Goals",
        desc: "Every Data Point We Track—Traffic, Engagement, Leads, Conversions—Is Linked Back To Your Strategic Objectives. This Ensures Insights Aren't Just Numbers But Actionable Indicators That Directly Support Growth, Sales, Or Customer Retention.",
        icon: "/images/rounded-icons/r38.png", 
        background:"url('/images/ppc/p-bg-3.png')", 
        height: boxHeight
      },
      {
        title: "Real-Time Monitoring and Alerts",
        desc: "With Live Tracking And Automated Alerts, You Can Respond To Trends, Audience Behavior, Or Underperforming Campaigns Immediately, Keeping Your Strategy Agile And Proactive.",
        icon: "/images/rounded-icons/r39.png", 
        background:"url('/images/ppc/p-bg-1.png')", 
        height: boxHeight
      },
      {
        title: "Actionable Recommendations",
        desc: "Beyond Reporting, We Provide Clear Guidance On What To Do Next—Whether It's Optimizing A Content Type, Shifting Budget To High-Performing Channels, Or Refining Messaging—To Continuously Improve Results.",
        icon: "/images/rounded-icons/r40.png", 
        background:"url('/images/ppc/p-bg-3.png')", 
        height: boxHeight
      }
    ];

    return (
        <>
            <CommonCard 
              seoData={seoData} 
              heding="Why Choose Our Method for<br/>Data-Driven Growth" 
              description="We Don’t Just Measure Content Performance—We Make It Understandable, Actionable, And Directly Tied To Your Business Goals. Our Approach Ensures Every Campaign Delivers Clarity, Optimization, And Measurable Impact."
            />
            <p class="max-w-[1200px] text-[18px] mb-[60px] mx-auto text-center">
                With This Approach, You Gain Clarity, Actionable Insights, And Confidence To Make Every Campaign Perform At Its Best.
            </p>
        </>
    );
}