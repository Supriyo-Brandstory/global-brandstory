import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const TypesofContent = ()=>{
    const data = {
  heading: "Types of Content We Create",
  subHeading: "We Deliver A Variety Of Formats To Suit Different Business Goals:",
  rows: [
    {
      img: "/images/ContentCreation/1.png", 
      alt: "Digital content marketing on a laptop",
      text: [
        "<b>Articles & Blogs:</b>",
        "We Write Well-Researched, SEO-Friendly Articles And Blogs That Not Only Bring More Visitors To Your Website But Also Help Your Brand Become A Trusted Source Of Knowledge In Your Industry.<br/><br/>",
        "<b>Videos & Animations:</b>",
        "Whether It's An Explainer Video, A Product Demo, Or A Short Social Media Clip, We Produce Visual Stories That Simplify Information, Spark Interest, And Build Stronger Connections With Your Audience.<br/><br/>",
        "<b>Infographics & Visuals:</b>",
        "Not Everything Needs Long Explanations. Our Infographics And Visuals Turn Complex Data And Ideas Into Simple, Engaging Graphics That People Can Quickly Understand And Remember."
      ],
      reverse: false
    },
    {
      img: "/images/ContentCreation/2.png", 
      alt: "Content Creation blocks",
      text: [
        "<b>Podcasts & Audio:</b>",
        "Through Interviews, Discussions, And Thought Leadership Episodes, We Create Audio Content That Builds Trust, Shares Insights, And Keeps Your Brand Voice In The Minds Of Your Audience.<br/><br/>",
        "<b>Case Studies & Whitepapers:</b>",
        "These In-Depth Pieces Highlight Real Success Stories And Showcase Your Expertise. They Give Your Audience The Proof They Need To See Why Your Brand Is Credible And Worth Choosing.<br/><br/>",
        "<b>Interactive Media:</b>",
        "Quizzes, Calculators, And Other Interactive Tools Help Your Audience Engage With Your Brand In A Hands-On Way, Making Their Experience More Personal And Memorable.<br/><br/>",
        "We Ensure That Every Format Serves A Clear Business Purpose And Resonates With Your Audience."
      ],
      reverse: true
    }
  ]
};

    return(
        <CommonTwoImgDesc data={data}/>
    )
}