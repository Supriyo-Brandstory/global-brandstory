import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const B2bSocialMedia =()=>{
    const data = {
    heading: "B2B Social Media Strategy & Execution",
    subheading:
      "We have expertise in B2B social media management, delivering content and engagement that influence decision makers. Our campaigns help businesses generate leads, build authority, and strengthen relationships across professional networks. We make every post count toward your growth objectives.",
    cards: [
            {
              title: "Thought Leadership & Executive Content",
              description:
                "We craft thought leadership content that positions executives as industry experts. Posts highlight insights, trends, and strategic perspectives to engage senior professionals effectively.",
            },
            {
              title: "LinkedIn Campaigns for Lead Generation",
              description:
                "Our LinkedIn campaigns are designed to generate high quality leads. Combining targeted messaging and strategic content, we reach the right audience to drive measurable business outcomes.",
            },
            {
              title: "Relationship Building Content",
              description:
                "We produce content tailored to nurture relationships with decision-makers. By delivering value and insights consistently, we help brands build trust and long term connections.",
            },
            {
              title: "Global Strategy with Local Relevance",
              description:
                "Our global approach scales campaigns while respecting local nuances. Multilingual content and geo targeted posts ensure relevance across markets, making your brand consistent yet locally resonant.",
            }
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>Our B2B social media strategies drive growth that matters. Every campaign connects, converts, and elevates your brand.</p>
        </>
    )
}
