import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const AYoutubeChannel = () =>{
    return(
       <CommonAbout 
            title='<h2>A YouTube Channel That Looks and<br/>Feels Professional</h2>'
            subtitle='<p>Your YouTube channel is like your digital storefront. First impressions matter, and a clean, organized, and attractive channel helps people trust your brand.</p>'
            text1="We focus on YouTube channel optimization to make your brand channel look professional and easy to navigate."
            points={[
                '<b>Branded banners and playlists </b>- We help you create creative banners and also organize videos into a playlist, so that your channel has a clear story to tell while highlighting your content.',
                '<b>Consistent video thumbnails</b> – Thumbnails play a great role in brand recognition, giving thumbnails that look similar makes your brand more clickable.',
                '<b>Professional channel layout</b> – A neat layout attracts the viewers, it helps in finding the videos quickly and explore more of your contents.',
            ]}
            text2='<span class="highlited-text">A polished channel design builds trust, encourages subscriptions, and improves discoverability. People spend more time watching your videos and learning about your brand, which helps your channel grow.</span>'
            imageSrc='/images/SoftwareDev/innovation.png'
            imageAlt='Social-media-marketing-about'
        />
    )
}