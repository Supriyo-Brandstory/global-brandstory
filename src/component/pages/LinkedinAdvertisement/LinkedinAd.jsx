import { CommonBigIndex } from "../common/CommonBigIndex"

export const LinkedinAd =()=>{
  const heading = "LinkedIn Ad Case Studies & Wins"
  const description =
    "Here’s how we Turn A Guest Post Into A Real SEO Asset, Step By Step." 

  const cases = [
    {
      title: "SaaS Platform",
      description:
        "<b>Strategy</b><br/>We Showed Ads Again To People Who Already Visited Their Website And Also Used Sponsored Content In Their LinkedIn Feed.<br/><br/><b>Result</b><br/>Because Of These Ads, 3 Times More People Signed Up For Product Demos In Just 6 Weeks. This Means Lots More People Got To Try The Product And See How It Works."
    },
    {
      title: "Healthcare Equipment",
      description:
        "<b>Strategy</b><br/>We Used Lead Gen Forms To Collect Information From People Who Were Interested And Made Sure We Showed Ads To The Right Customers Using ICP Targeting.<br/><br/><b>Result</b><br/>The Cost For Each Lead Went Down By 45%, And The Leads Were Really Good Quality. This Means The Company Spent Less Money But Got People Who Were Really Likely To Buy Their Products."
    },
    {
      title: "Finance Services",
      description:
        "<b>Strategy</b><br/>We Ran B2B LinkedIn Marketing Campaigns And Tested Different Versions Of Ads (A/B Testing) To See Which One Worked Best.<br/><br/><b>Result</b><br/>The Company Got 2 Times More Return On Ad Spend In The First 2 Months. This Means They Earned More Money From The Ads Than They Spent, Very Quickly."
    },
  ]
  
  return <CommonBigIndex 
        data={cases}
        caseLabel="Case"
        description={description}
        heading={heading}
        
    />
}