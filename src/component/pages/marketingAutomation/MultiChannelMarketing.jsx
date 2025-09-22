import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const MultiChannelMarketing = ()=>{
    const data = {
  heading: "Multi-Channel Marketing, Fully Automated",
  subHeading: "Our Multi-Channel Marketing Automation Works On:",
  rows: [
    {
      img: "/images/MarketingAutomation/multi-channel.jpg",
      alt: "Multi-Channel Marketing",
      text: [
        "<strong>Email:</strong> Deliver Messages Directly To Recipients' Inboxes.",
        "<strong>SMS:</strong> Brief Messages That Quickly Grab Attention.",
        "<strong>WhatsApp:</strong> Communicate With Clients Via WhatsApp, Where They Communicate Daily.",
        "<strong>Social Media:</strong> Promote Your Brand On Instagram, Facebook, And Other Platforms.",
        "<strong>Paid Advertising:</strong> Show The Right Ads To The Right People At The Right Moment.",
        "<strong>Chatbots:</strong> Provide Prompt, Intelligent Assistance To Clients.",
        "<strong>Push Notifications:</strong> Remind People About Deals Or Updates Via Push Notifications On Their Devices.",
        "These Channels All Function Together. Your Brand Remains Consistent Everywhere. People Notice, Remember, And Act When Messages Arrive At The Right Time."
      ],
      reverse: true
    }
  ]
};

    return(
        <CommonTwoImgDesc data={data}/>
    )
}