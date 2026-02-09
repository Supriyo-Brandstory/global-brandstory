"use client";
import React, { Children } from 'react'
import CommonTwoCard from '../common/CommonTwoCard'
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


export const CommonTwoCardWrapper = ({ data }) => {
    // console.log("Consoling the CommonTwoCardWrapper data : ", data)
    const blocks = {
        paragraph: ({ children }) => <p className="!text-white !text-center">{children}</p>,
    };
    const data1 = {
        heading: data?.title,
        highlight: data?.orangeText,
        subheading: data?.para,
        cards: data?.card || [
            {
                title: "Consultation & Planning",
                description:
                    "We discuss your objectives, target audience, and creative vision in detail. Our project workflow ensures every decision we make aligns with your business goals before the shoot begins.",
            },
            {
                title: "Pre-Shoot Preparation",
                description:
                    "Shot lists, styling, location scouting, and equipment checks are handled properly. Our photography planning services reduce risks and maximize productivity on the day of the shoot.",
            },
            {
                title: "The Photoshoot",
                description:
                    "We execute each session with a keen eye on lighting, framing, and brand aesthetics. Our expert team ensures consistency, creativity, and technical accuracy throughout the shoot.",
            },
            {
                title: "Post Production & Delivery",
                description:
                    "Professional color grading, retouching, and quality control refine each image. The photo editing workflow guarantees polished visuals ready for marketing. Final images are delivered securely via online galleries or cloud storage.",
            }
        ],
    };


    return (
        <>
            <CommonTwoCard {...data1} titleClass="text-center" cardLayout="two-col" />
            {/* <p className='max-w-[1200px] text-center mx-auto mb-30'>{}</p> */}
            {data?.bottomPara && (<BlocksRenderer content={data?.bottomPara} blocks={blocks} />)}
        </>
    )
}
