import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const HowModern = () =>{
    return(
       <CommonAbout 
            title='<h2>How Modern Brands Handle Social<br/>Media Management</h2>'
            subtitle='<p>What is social media management? Today, it’s not just about posting content. It’s about planning, creating, and distributing the right content at the right time. It’s about listening, engaging, and measuring impact. It’s about building a digital community that values your brand.</p>'
            text1="Modern social media management includes:"
            points={['Content calendars to plan posts, campaigns, and seasonal messaging','Cross-platform strategies for Instagram, LinkedIn, TikTok, YouTube, X (Twitter)','Engagement management to reply to DMs, comments, and mentions in real-time','Data-driven insights to track performance and optimize every post']}
            text2='<span class="highlited-text">Our approach ensures your social media becomes a consistent, strategic part of your growth plan—not a guessing game.</span>'
            imageSrc='/images/ppc/about.jpg'
            imageAlt='Social-media-marketing-about'
        />
    )
}