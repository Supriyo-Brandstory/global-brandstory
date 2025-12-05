import { CommonBigIndex } from "../common/CommonBigIndex"
import { CommonBigIndexScrollable } from "../common/CommonBigIndexScrollable"

export const ClientCaseStudies =()=>{
  const heading = "Client Case Studies & Results"
  const description =
    "Our Campaigns Don't Just Run—They Perform. Here Is What Smart Ad Inventory Management Delivers:"

  const cases = [
    {
      title: "37% Decrease in CPM",
      description:
        "Through Programmatic Video Optimization For A D2C Brand"
    },
    {
      title: "2.4x ROAS",
      description:
        "For A Fintech Company Scaling Through OTT Inventory"
    },
    {
      title: "68% Lift in CTR",
      description:
        "From A/B-Tested Audio Ads On Spotify"
    },
    {
      title: "Cost Per Qualified Lead",
      description:
        "Reduced by 41% In A SaaS Campaign Across DV360"
    },
  ]
  const footer = "Our Media Buying Case Studies Show What’s Possible When Precision Meets Performance."
    return <CommonBigIndexScrollable
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}