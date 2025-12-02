import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const FullPinterest =()=>{
    const data = {
    heading: "Full Pinterest Ad Services",
    subheading:
      "BrandStory offers a full range of Pinterest ad services to grow your business:",
    cards: [
            {
              title: "Promoted Pins",
              description:
                "The best pins need to be boosted to reach the larger audience. This increases visibility, engagement, and the chances that people will click and explore your brand.",
            },
            {
              title: "Carousel Ads",
              description:
                "Showcasing multiple products, features and ideas in one swipeable pin. People can find all the offerings under the single pin, helping you increase the likelihood of engagement.",
            },
            {
              title: "Video Pins",
              description:
                "Share your brand story through videos that grab attention and encourage viewers to take action. Video pins are especially effective at conveying ideas quickly and memorably.",
            },
            {
              title: "Shopping Ads",
              description:
                "Make it simple for users to buy directly from a pin. These ads turn inspiration into sales by connecting viewers straight to your products.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>We handle everything from strategy, ad creation, targeting, optimization, to reporting.</p>
        </>
    )
}