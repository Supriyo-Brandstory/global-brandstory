import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyEvery = () => {
    return (
       <CommonAbout 
            title='<h2>Why Every Successful Video Relies on Expert Editing</h2>'
            subtitle='<p>A raw clip alone rarely makes an impact. Video post-production isn’t just about cutting and trimming; it’s about storytelling. Well-edited videos:</p>'
            points={[
                'Keep audiences engaged from start to finish',
                'Elevate brand perception and credibility',
                'Improve conversion rates on landing pages',
                'Maximize content longevity across platforms'
            ]}
            text2='Professional video editing ensures your story is felt. It’s the difference between a forgettable clip and a video that drives results.'
            imageSrc='/images/VideoEditingServices/image.png' 
            imageAlt='Professional video editing workspace'
        />
    )
}