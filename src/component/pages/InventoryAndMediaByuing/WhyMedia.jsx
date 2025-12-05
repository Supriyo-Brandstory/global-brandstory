import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyMedia = () =>{
    return(
       <CommonAbout 
            
            title='<h2>Why Media Buying Matters for Scaling Ad Campaigns</h2>' 
            subtitle='<p>You Can Have The Most Engaging Creative In The World, But Without The Right Media Buying Strategy, Your Message Will Miss The Mark. Your Ads Need To Reach The Right People, In The Right Place, At The Right Time Without Wasting Budget.</p>'
            text1='We Believe Efficient Ad Spend Is The Foundation Of Every High Performing Campaign. It’s Not Just About Buying Impressions, It Is About Buying Outcomes.<br/><br/>Our Approach Focuses On:'
            points={[
                'Placing Ads In High-Impact Environments Where Attention Is High And User Intent Is Strong, Ensuring Cost Efficiency Across Every Impression',
                'Driving Measurable Results Through Clear ROI Optimization Metrics Like ROAS, CPM, And ECPC',
                'Leveraging Precision Targeting Based On Audience Behavior, Context, And Platform Signals To Reduce Waste And Improve Engagement',
                'Applying Proven Performance Advertising Frameworks That Track Every Dollar To A Meaningful Business Outcome, Leads, Sales, Or Retention'
            ]}
            text2='<span class="highlited-text">With The Right Media Mix And Optimization Strategy, You Are Not Just Scaling Ad Campaigns, You Are Scaling The Impact They Deliver On Your Bottom Line. And This Is Where Smart Media Buying Truly Pays Off.</span>'
            imageSrc='/images/InventoryAndMediaByuing/image.png' 
            imageAlt='Two women reviewing a performance marketing dashboard' 
        />
    )
}