import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const SmarterPintrest =()=>{
    const data = {
    heading: "Smarter Pinterest Management Services for Every Brand",
    subheading:
      "Our Pinterest Management Services Are Built To Help You Utilize The True Power Of The Platform. From Creative Design To SEO Driven Strategies, We Make Sure Every Pin And Campaign Is Optimized To Generate Traffic, Engagement, And Sales.",
    cards: [
            {
              title: "Pinterest Profile Setup",
              description:
                "We Set Up And Optimize Your Profile With Branded Elements Reflecting Your Identity. This Ensures Your Account Is Discoverable And Ready To Attract High-Intent Audiences.",
            },
            {
              title: "Branded Pin Design",
              description:
                "Our Creative Studio Designs Visually Striking Pins Suitable To Your Audience. Every Design Is Crafted To Stand Out, Boost Engagement, And Drive Click-Throughs.",
            },
            {
              title: "Pinterest SEO & Keywords",
              description:
                "We Research Trending Search Terms And Integrate Them Into Pin Titles And Descriptions. This Improves Your Ranking On Pinterest's Visual Search Engine And Increases Discovery.",
            },
            {
              title: "Board Strategy",
              description:
                "Boards Are Structured To Guide Users Through Your Brand's Story And Offerings. A Clear Board Layout Enhances Navigation And Encourages Users To Save And Explore More.",
            },
            {
              title: "Video Pins & Idea Pins",
              description:
                "Short, Scroll Stopping Videos And Idea Pins Grab Attention Instantly. They Increase Engagement While Making Your Brand A Part Of Ongoing Conversations.",
            },
            {
              title: "Ad Campaigns",
              description:
                "We Manage And Optimize Campaigns For Awareness, Leads, And Conversions. Targeted Strategies Ensure Your Investment Delivers Measurable ROI.",
            },
            {
              title: "Analytics & Reporting",
              description:
                "Our Reports Track Impressions, Saves, And Outbound Traffic With Clarity. We Provide Insights Which Will Help You Refine Campaigns And Scale Results.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-20 text-white text-lg'>
                With BrandStory, Every Service Connects To Build A Growth Focused Ecosystem On Pinterest.
            </p>
        </>
    )
}