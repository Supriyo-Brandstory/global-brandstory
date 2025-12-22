import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyAppStore = () =>{
    return(
       <CommonAbout 
            title='<h2>Why App Store Optimization Matters</h2>'
            subtitle='<p>In today&apos;s competitive app market, just having a great app isn&apos;t enough. With millions of apps available on the App Store and Google Play, your app can easily get lost. That&apos;s where App Store Optimization (ASO) comes in. ASO is the process of making your app discoverable, attractive, and compelling to potential users.</p>'
            text1="The right ASO strategy can help you:"
            points={[
                'Increase organic downloads',
                'Reduce user acquisition costs',
                'Attract high-quality, engaged users',
                'Gain a competitive edge in your category'
            ]}
            text2='Think of ASO as the bridge between your app and the users actively searching for a solution you provide. Done right, it doesn’t just drive installs—it drives meaningful engagement.'
            imageSrc='/images/AppStoreOptimization/image.png' 
            imageAlt='Person using a smartphone over growth charts'
        />
    )
}