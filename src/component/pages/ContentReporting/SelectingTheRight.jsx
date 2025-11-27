import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const SelectingTheRight =()=>{
    const data = {
    heading: "Selecting the Right Metrics to Measure What’s Important for You", 
    subheading:
      "When it comes to content reporting metrics, one size doesn’t fit all. Every business has unique goals, which is why we tailor our content reporting to track the metrics that matter most to you. Here’s a glimpse at the key metrics we focus on:", 
    cards: [
            {
              title: "Page Views",
              description:
                "Track the number of people visiting your content and how it’s performing across different channels.",
            },
            { 
              title: "Engagement Rates",
              description:
                "Measure how effectively your content is engaging your audience and driving interaction.",
            },
            {
              title: "Conversions",
              description:
                "Track how many visitors are converting into leads or customers as a result of your content.",
            },
            {
              title: "Traffic Sources",
              description:
                "Understand where your traffic is coming from, whether it’s social media, organic search, or paid campaigns.",
            }
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            {/* The text below the cards is also updated to match the image's closing statement */}
            <p className='max-w-[1200px] text-center mx-auto mb-30'>Each of these metrics plays a critical role in understanding your content's performance, and we help you interpret them in a way that directly supports your business goals.</p>
        </>
    )
}