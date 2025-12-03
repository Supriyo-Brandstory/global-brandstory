import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyReddit = () =>{
    return(
       <CommonAbout 
            title='<h2>Why Reddit Is the Hidden Goldmine for Ads</h2>'
            subtitle='<p>Reddit is Home to Over 430 Million People Every Month. These People Join More Than 100,000 Active Communities Called Subreddits. Each Subreddit Is A Tiny World Where People Talk About Things They Really Care About. This Makes Reddit Perfect For Brands That Want Precise Precision And Real Engagement.</p>'
            text1="Why Reddit Ads Work:"
            points={[
                '<b>Contextual Relevance:</b> Ads Appear Right Where People Are Already Talking About Similar Things.',
                '<b>Passionate Communities:</b> Members Are Loud, Active, And Full Of Opinions.',
                '<b>CPC Efficiency:</b> Cost-Per-Click Is Often Better Than On Bigger Platforms Like Facebook Or LinkedIn.',
                '<b>Long-Term Brand Trust:</b> Reddit Users Like Real, Honest Voices, Not Pushy Sales Talk.'
            ]}
            text2='When Done The Right Way, Reddit Advertising Can Bring Both Strong Engagement And Measurable ROI.'
            imageSrc='/images/RedditAdvertisement/image.png' 
            imageAlt='Reddit-advertising-goldmine'
        />
    )
}