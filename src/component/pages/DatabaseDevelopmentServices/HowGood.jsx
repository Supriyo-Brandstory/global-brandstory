import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const HowGood = () =>{
    return(
       <CommonAbout 
            title='<h2>How Good Database Development Improves Efficiency</h2>'
            subtitle='<p>We Treat Database Development As A Strategic Foundation, Not Just A Technical Task. A Well-Designed Database Ensures Your Business Runs Efficiently, Scales Seamlessly, And Delivers Actionable Insights.</p>'
            text1="<b>Our Approach Focuses On Five Key Areas:</b>"
            points={[
                '<b>Reliable Performance:</b> Fast, Responsive Databases That Keep Your Operations Smooth. ',
                '<b>Scalability:</b> Systems That Grow With Your Business, Not Against It.',
                '<b>Data-Driven Decisions:</b> Strong Data Architecture Ensures Insights Are Accurate And Timely.',
                '<b>Security And Integrity:</b> Protect Your Information With Top-Tier Safeguards.',
                '<b>Reduced Technical Debt:</b> Build Systems That Are Easier To Maintain And Extend.'
            ]}
            text2='Without A Solid Foundation, Businesses Risk Slow Performance, Inconsistent Data, And Rising Operational Costs. By Building Custom Database Solutions Tailored To Your Needs, We Ensure Your Data Works For You Driving Efficiency, Insight, And Growth.'
            imageSrc='/images/DatabaseDevelopmentServices/image.png'
            imageAlt='Database development strategic foundation'
        />
    )
}