import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const WhyBs = ()=>{
    const data = {
  heading: "Why BrandStory Is Your Go-To Reddit<br/>Advertising Partner",
  subHeading: "We Help Your Brand Grow Using Deep Knowledge Of Reddit’s Culture. We Make Sure Your Brand Speaks Naturally And Connects With Real People.",
  rows: [
    {
      img: "/images/RedditAdvertisement/image-2.png",
      alt: "Ads on Laptop Screen",
      text: [
        "<b>Our Strengths:</b><br/><br/>",
        "",
        "<ul><li><b>Cultural Fluency:</b> We Understand Reddit’s Unique Tone, Style, And Humor, So Your Brand Feels Like It Belongs.</li></ul>",
        "<ul><li><b>Ethical Ad Engagement:</b> We Never Use Spammy Or Pushy Tactics. Your Brand Stays Trusted And Respected By The Community.</li><ul>",
        "<ul><li><b>Strategic Media Buying:</b> We Place Ads In The Most Relevant Subreddits To Reach The Right Audience And Get The Best Results.</li></ul>",
        "<ul><li><b>Performance–First Mindset:</b> Every Campaign Is Designed With Clear, Measurable Business Goals In Mind, So You Always Know Your Return.</li><ul>",
        "<br/>",
        "<span class='highlited-text'>Partnering With BrandStory Ensures Your Reddit Advertising Is Effective, Trusted, And Human-First, Helping Your Brand Connect With Real People In Meaningful Ways.</span>"
      ],
      reverse: true
    }
  ]
};

    return(
        <CommonTwoImgDesc data={data}/>
    )
}