import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const Expertise =()=>{
    const data = {
    heading: "Expertise, Experience, and Results with BrandStory",
    subheading:
      "When it comes to enterprise software, the partner you choose makes all the difference.",
    cards: [
            {
              title: "Dedicated Team",
              description:
                "You’ll never feel like you’re working with just a vendor. Our developers, architects, and consultants become an extension of your team. We bring the skills, but we also bring the commitment to see your project succeed from day one to long after launch.",
            },
            {
              title: "Transparent Process",
              description:
                "No surprises. No hidden timelines. We believe in being upfront about what’s possible, what it will take, and how we’ll get there together. You’ll always know where the project stands, with regular updates and measurable progress along the way.",
            },
            {
              title: "Strategic Partner",
              description:
                "We’re here for more than just coding. We take the time to understand your business goals and shape technology around them. Every decision we make is about making your operations smoother, your teams more empowered, and your customers happier.",
            },
            {
              title: "Commitment To ROI",
              description:
                "We know technology is an investment, and it has to pay off. That’s why everything we build is designed to reduce costs, increase efficiency, and create measurable value for your business—today and in the future.",
            },
        ],
    };


    return (
        <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
    )
}