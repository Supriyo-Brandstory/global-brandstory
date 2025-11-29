import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientSuccessStories =()=>{
  const heading = "Client Success Stories" // Updated Heading
  const description =
    ""

  const cases = [
    {
      title: "D2C Skincare Brand", // Card 1 Title
      description:
        "<b>Challenge</b><br/>Low ROAS and rising CAC across Google Shopping campaigns.<br/><br/>" +
        "<b>Action</b><br/>Integrated Google Ads Management services with optimized product feeds, launched Performance Max campaigns, and layered dynamic remarketing.<br/><br/>" +
        "<b>Result</b><br/>Achieved 3.2X ROAS, reduced CAC by 38%, and boosted returning customer rate to 52%."
    },
    {
      title: "B2B SaaS Firm", // Card 2 Title
      description:
        "<b>Challenge</b><br/>Inconsistent SQL quality and high cost per lead through broad match campaigns.<br/><br/>" +
        "<b>Action</b><br/>Built SKAG structures focused on BOFU keywords, refined landing experiences, and aligned offers to high-intent segments.<br/><br/>" +
        "<b>Result</b><br/>66% increase in qualified leads and 21% reduction in CPL within 45 days."
    },
    {
      title: "EdTech Platform", // Card 3 Title
      description:
        "<b>Challenge</b><br/>High bounce rates and low demo bookings from YouTube traffic.<br/><br/>" +
        "<b>Action</b><br/>Reshaped audience targeting, refreshed video creatives, and supported the funnel with high-CTR Responsive Search Ads.<br/><br/>" +
        "<b>Result</b><br/>Improved ROAS to 2.8X and lowered cost per enrollment by 45%."
    },
  ]
  const footer = ""
    return <CommonBigIndex
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}