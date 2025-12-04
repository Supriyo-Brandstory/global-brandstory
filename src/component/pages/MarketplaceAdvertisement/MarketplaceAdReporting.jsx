import { CommonBigIndex } from "../common/CommonBigIndex"

export const MarketplaceAdReporting =()=>{
  const heading = "Marketplace Ad Reporting & ROAS Tracking"
  const description =
    "We don’t just show you graphs—we help you act on them. Our marketplace ad reporting systems are designed for decision makers, not data analysts. Every insight is built to inform action, not just observe outcomes. So, here is what you will get:"

  const cases = [
    {
      title: "Full-Funnel Performance Dashboards",
      description:
        "Get Full-Funnel Performance Dashboards Which Let You Filter By Product, Campaign, Platform, And Data Range. Always See What Matters Most And Focus On The Metrics Driving Growth."
    },
    {
      title: "Real Time Metrics Tracking",
      description:
        "Track Essential Metrics Like Marketplace RoAS, ACoS, Impressions, CTR, And Conversions In Real Time. Gain Clarity And Context To Make Informed Decisions Instantly."
    },
    {
      title: "Weekly Campaign Analytics",
      description:
        "Receive Weekly Breakdowns With Campaign Insights Highlighting What’s Working, What’s Not, And What To Optimize Next. Stay Proactive And Improve Your Performance Regularly."
    },
    {
      title: "Historical Trends & Anomaly Alerts",
      description:
        "Analyze Historical Trends And Detect Patterns While Receiving Real Time Alerts For Unusual Spikes, Dips, Or Anomalies. Keep Your Campaigns Smooth And Under Control At All Times."
    },
    {
      title: "Integration With BI Tools",
      description:
        "Easily Integrate Dashboards With Google Data Studio Or Your BI Tools For Smooth Access To Cross Platform Ecommerce Ad Insights. Consolidate Data And Make Smarter Business Decisions."
    },
  ]
  const footer = "We Turn Your Dashboards Into A Strategic Tool, Not Just A Spreadsheet. Because When Your Marketplace Advertisement Services Include Intelligent Reporting, Your Brand Doesn’t Just React, It Leads."
    return <CommonBigIndex
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}