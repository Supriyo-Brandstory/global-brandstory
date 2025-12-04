import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const CreativeOptimization = () =>{
    return(
       <CommonAbout
            title='<h2>Creative Optimization That Actually Converts</h2>'
            subtitle="<p>On Marketplaces, Your Visuals Are Your Pitch, You Don't Get A Second Chance To Grab Attention—Your Creative Needs To Stop The Scroll And Start The Sale. And Most Brands Miss That Window.</p>"
            text1="Our Marketplace Ad Creatives Are Designed With Both Performance And Platform In Mind. We Combine Data-Backed Strategy With Sharp Visual Execution To Ensure Every Asset Pulls Its Weight In Conversion.<br/><br/><b>Here’s What We Focus On:</b>"
            points={[
                'High-Impact Product Ad Images That Meet Platform Specs While Standing Out In Cluttered Search Results',
                'Mobile-First Listing Design Optimized For Fast Scrolling, Quick Decision-Making, And Thumb-Stopping Moments',
                'Custom Infographics, Banners, And A+ Content That Simplify Product Benefits And Elevate Your Brand Story',
                'Continuous Creative A/B Testing To Find What Visuals Actually Increase Engagement, Clicks, And CTR Optimization'
            ]}
            text2="<span class='highlited-text'>From Thumbnails To Enhanced Brand Content, Every Visual Is Designed To Drive Performance—Not Just Look Good.<br/><br/> On Platforms Like Amazon And Etsy, Great Creative Isn’t Just A Nice-To-Have—It’s The Entry Ticket. We Make Sure Your Marketplace Creatives Look The Part And Convert Like They Are Meant To.</span>"
            imageSrc='/images/MarketplaceAdvertisement/image-2.png'
            imageAlt='Marketplace-advertising-about'
            imageReverse={true}
        />
    )
}