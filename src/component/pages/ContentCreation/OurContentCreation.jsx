import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const OurContentCreation =()=>{
    const data = {
    heading: "Our Content Creation Services",
    subheading:
      "We Provide End-to-End Content Creation Services Tailored To Your Goals, Audience, And Industry. Every Service Is Designed To Deliver Real Results:",
    cards: [
            {
              title: "Copywriting",
              description:
                "From Blogs And Website Copy To Product Descriptions And Thought Leadership Articles, We Write Content That’s Clear, Relatable, And Built To Connect With Your Audience While Inspiring Them To Take Action.",
            },
            {
              title: "Video Production",
              description:
                "Sometimes, Showing Works Better Than Telling. We Create Explainer Videos, Product Demos, And Short Social Clips That Simplify Complex Ideas, Tell Your Story Visually, And Create An Instant Connection With Viewers.",
            },
            {
              title: "Graphic Design",
              description:
                "Visuals Make Content More Memorable. Our Team Designs Infographics, Banners, And Illustrations That Not Only Look Good But Also Make Information Easier To Understand And More Engaging To Share.",
            },
            {
              title: "Social Media Content",
              description:
                "Social Platforms Are Where Conversations Happen. We Craft Posts, Stories, And Campaigns Tailored To Each Platform, Designed To Grab Attention, Spark Real Interactions, And Keep Your Brand Top Of Mind.",
            },
            {
              title: "Web Content",
              description:
                "Your Website Is Often The First Place People Meet Your Brand. We Create Landing Pages, Case Studies, And SEO-Friendly Copy That Attract Visitors, Answer Their Questions, And Guide Them Smoothly From Curiosity To Conversion.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>Every Asset Reflects Your Brand Voice, Speaks To Your Audience, And Contributes To Your Overall Business Strategy.</p>
        </>
    )
}