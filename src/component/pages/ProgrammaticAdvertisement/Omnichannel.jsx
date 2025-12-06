import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const Omnichannel = ()=>{
    const data = {
  heading: "Omnichannel Reach Across Devices<br/>and Platforms",
  subHeading: "People Use Many Devices Every Day. They Use Computers, Phones, TVs, And Streaming Services. With BrandStory, Your Ads Can Reach People On All These Devices.<br/><br/>We Make Sure Your Message Is The Same Everywhere. People Will See Your Brand Clearly, No Matter Where They Are.",
  rows: [
    {
      img: "/images/ContentCreation/1.png",
      alt: "Digital content marketing on a laptop",
      text: [
        "<ul><li><b>Ads Everywhere</b></li></ul>",
        "We Run Your Ads On All Platforms Together. This Keeps Your Brand Consistent And Easy To Recognize.<br/><br/>",
        "<ul><li><b>Phones And Apps</b></li></ul>",
        "Most People Use Their Phones And Apps A Lot. We Show Your Ads There So They See Your Brand Every Day.<br/><br/>",
        "<ul><li><b>Streaming TV And OTT</b></li></ul>",
        "We Put Ads On Connected TVs And Streaming Services. People Watch Shows And Movies Online, And Your Brand Will Appear There Too.<br/><br/>",
        "<ul><li><b>Cross-Device Ads</b></li></ul>",
        "We Show Your Ads On Different Devices. If Someone Sees Your Ad On Their Phone, They Can See It Again On Their Computer Or TV. This Helps Them Remember Your Brand."
      ],
      reverse: true
    }
  ]
};

    return(
        <CommonTwoImgDesc data={data}/>
    )
}