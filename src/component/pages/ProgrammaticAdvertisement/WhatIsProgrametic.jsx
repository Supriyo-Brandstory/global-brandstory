import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhatIsProgrametic = () =>{
    return(
       <CommonAbout
            title='<h2>What is Programmatic Advertising<br/>and Why Does It Matter?</h2>'
            subtitle='<p>Programmatic Advertising Is The Future Of Digital Ads. It Uses Smart Technology And Real-Time Bidding To Place Ads Quickly And In The Best Spots.</p>'
            text1="Unlike Buying Ads By Hand, Programmatic Connects Brands To The Right People Instantly. It Works With Special Tools Like Demand-Side Platforms (DSPs) And Supply-Side Platforms (SSPs). It Also Uses Data To Make Ads More Accurate.<br/><br/>Why it matters?"
            points={[
                'Shows Relevant Ads To More People',
                'Saves Money By Cutting Waste And Reaching Only The Right Audience',
                'Lets Us Change Campaigns In Real Time For Better Results',
                'Keeps Your Brand Ahead In Fast-Changing Digital Spaces'
            ]}
            text2="<span class='highlited-text'>With BrandStory’s Programmatic Ad Expertise, You Get A System Built For Speed, Accuracy, And Clear ROI. Your Ads Work Smarter And Deliver Growth.</span>"
            imageSrc='/images/ProgrammaticAdvertisement/image.png'
            imageAlt='Programmatic-Advertising-Image'
        />
    )
}