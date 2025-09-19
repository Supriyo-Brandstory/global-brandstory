import CommonAccordion2 from '../common/CommonAccordion2';

export const Omnichannel = ()=>{
    const accordionData = [
  {
    title: "Google Ads",
    content: "Create, manage, and optimize your ad campaigns across Google Search, YouTube, and the Display Network.",
  },
  {
    title: "Microsoft Advertising (Bing Ads)",
    content: "Target your audience on the Microsoft Search and Audience Network, including Bing, AOL, and Yahoo.",
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    content: "Reach billions of users with targeted ads on Facebook, Instagram, Messenger, and the Audience Network.",
  },
  {
    title: "LinkedIn Ads",
    content: "Connect with professionals and decision-makers using targeted ads on the LinkedIn platform.",
  },
  {
    title: "YouTube Ads",
    content: "Engage viewers with video ads on YouTube and Google's video partners.",
  },
  {
    title: "TikTok Ads",
    content: "Expand your reach to a new generation with creative, short-form video ads on TikTok.",
  },
];
  return ( 
        <CommonAccordion2
        title="Omnichannel Paid Advertising Solutions"
        highlited="We run campaigns across Different Platforms"
        description="Our multi-platform PPC strategy guarantees that campaigns adjust to the intent and behavior of each platform. Campaign efficiency and attribution are enhanced by cross-channel integration."
        items={accordionData} />
    )
}