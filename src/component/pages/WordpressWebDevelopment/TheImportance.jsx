import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const TheImportance = () =>{
    return(
       <CommonAbout 
            title='<h2>The Importance of WordPress Development for a Strong Digital Presence</h2>'
            subtitle='<p>With custom WordPress solutions, your website becomes a business accelerator. Whether you’re looking to modernize an outdated site, launch a startup platform, or scale an enterprise-level application, WordPress provides a robust foundation.</p>'
            text1="Key benefits include:"
            points={[
                '<b>Superior performance & speed: </b>Lightning-fast load times that enhance SEO and reduce bounce rates.',
                '<b>Enhanced security & reliability:</b> A code base free from unnecessary plugins, with enterprise-grade security protocols.',
                '<b>Future-proof scalability: </b>Architecture designed to grow with your business.',
                '<b>Maximized conversions:</b> User-centric design and strategic calls-to-action that drive sales and leads.'
            ]}
            text2='' 
            imageSrc='/images/WordpressWebDevelopment/image.png'
            imageAlt='image' 
        />
    )
}