import React from 'react';
import CommonAbout from '../common/CommonAbout';

export const WhyLinkedin = () =>{
    return(
       <CommonAbout 
            title='<h2>Why LinkedIn Is the B2B Marketing<br/>Game-Changer</h2>'
            subtitle="<p>LinkedIn Isn't Just Another Social Platform. It's A Professional Network Where Decisions Are Made. With Over <b>900 Million Users</b>, It Lets B2B Brands:</p>"
            text1="We Track The Right Numbers, Translate Them Into Real Insights, And Guide Your Next Move With Clarity."
            points={[
                '<b>Access Decision-Makers</b> – CEOs, CXOs, Managers, And Directors',
                '<b>Target By Intent And Industry</b> – Precise Filters For Company Size, Role, And Seniority',
                '<b>Engage At Scale</b> – Sponsored Content, InMail, And Retargeting Campaigns'
            ]}
            text2='Getting Good Customers Starts With Showing Ads To The Right People. That Is Why Smart B2B Brands Use LinkedIn Advertising Services. It Helps Them Find The Right People, Get Them Interested, And Turn Them Into Happy Customers.'
            imageSrc='/images/LinkedinAdvertisement/image.png'
            imageAlt='Social-media-marketing-about'
        />
    )
}