import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const HowBrandstory = ()=>{
    const data = {
  heading: "How BrandStory Prioritizes Social for Maximum Reach",
  subHeading: "As a leading social media management company, BrandStory is more than a content agency—we’re your brand’s online newsroom. We combine strategy, creativity, and analytics to deliver campaigns that look good and perform better.",
  rows: [
    {
      img: "/images/SocialMediaManagement/image.png",
      alt: "PPC Report",
      text: [
        "<ul><li>Dedicated strategist to craft your brand voice and messaging across channels.</li></ul>",
        "<ul><li>Platform experts ensure every post from Instagram reels and carousels to LinkedIn thought leadership is optimized for engagement.</li></ul>",
        "<ul><li>Creative studio producing visuals, animations, TikTok campaigns, and YouTube Shorts that capture attention and tell your brand story.</li></ul>",
        "<ul><li>Analytics dashboard to track every like, share, comment, and conversion, providing insights to refine strategy continuously.</li></ul>",
        "With BrandStory, your social media doesn’t just exist. It captivates, converts, and amplifies your brand across every platform."
      ],
      reverse: true
    }
  ]
};

    return(
        <CommonTwoImgDesc data={data}/>
    )
}