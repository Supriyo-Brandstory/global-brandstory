import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyContentDevelopment = () =>{
    return(
       <CommonAbout 
            title='<h2>Why Content Development Matters</h2>'
            subtitle='<p>Good Content Does More Than Look Pretty. It Builds Trust, Authority, And Measurable Results For Your Business. Here’s Why Investing In Content Development Services Is A Game-Changer:</p>'
            text1="Our Content Strategy Approach Includes:"
            points={[
                '<b>Stronger Brand Presence:</b> Consistent, High-Quality Content Keeps Your Brand Visible And Memorable.',
                '<b>Higher Engagement:</b> Well-Crafted Content Encourages Clicks, Shares, Comments, And Conversions.',
                '<b>Expert Positioning:</b> Each Piece Showcases Your Knowledge, Making You The Go-To In Your Industry.',
                '<b>Better ROI:</b> Effective Content Drives Traffic, Leads, And Ultimately, Revenue, Your Investment Pays Off.'
            ]}
            text2='Imagine Your Brand Being The One People Remember, Not Just Another Face In The Digital Crowd. That’s The Real Power Of Strategic Content Development.'
            imageSrc='/images/ContentDevelopment/image.png'
            imageAlt='Content-development-about'
        />
    )
}