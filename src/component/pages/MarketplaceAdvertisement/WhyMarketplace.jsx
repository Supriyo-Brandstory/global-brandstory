import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyMarketplace = () =>{
    return(
       <CommonAbout
            title='<h2>Why Marketplace Advertising Matters for eCommerce Brands</h2>'
            subtitle="<p>Most online shopping doesn't start on Google anymore. In fact, over 60% of product searches now begin directly on marketplaces like Amazon, Flipkart, and eBay. People go there ready to buy, not just to browse. And that shift changes everything for brands.</p>"
            text1="If you are not running ads where your customers are already searching, you are not just invisible, you are losing out on sales you could already be winning.<br/><br/>Ecommerce marketplace ads aren’t just digital billboards. They are strategic tools that help brands:"
            points={[
                'Show Up At The Top Of High Intent Product Search Pages',
                'Improve Product Search Visibility and Drive More Clicks',
                'Influence Purchase Decisions Right When It Matters Most',
                'Increase Marketplace Conversions Through Better Targeting',
                'Win The Buy Box More Frequently And Outperform Direct Competitors'
            ]}
            text2="<span class='highlited-text'>With millions of products fighting for the same digital shelf space, Marketplace Advertising is no longer a nice-to-have, it's your edge. If you are selling on Amazon, Flipkart, Etsy, or eBay, ads aren't optional. They're how serious brands grow.</span>"
            imageSrc='/images/MarketplaceAdvertisement/image.png' 
            imageAlt='Marketplace-advertising-about' 
        />
    )
}