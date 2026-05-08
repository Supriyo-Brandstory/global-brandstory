import { Banner } from "@/component/pages/Bhive/Banner";
import { Stats } from "@/component/pages/Bhive/Stats";
import { ImageSection } from "@/component/pages/Bhive/ImageSection";
import { BusinessContext } from "@/component/pages/Bhive/BusinessContext";
import { ChallengesObjectives } from "@/component/pages/Bhive/ChallengesObjectives";
import { StrategyPlanning } from "@/component/pages/Bhive/StrategyPlanning";
import { CampaignExecution } from "@/component/pages/Bhive/CampaignExecution";
import CsPerformance from "@/component/pages/common/CsPerformance";
import StaticPaidCampaignPerformance from "@/component/pages/common/StaticPaidCampaignPerformance";
import CsProcess from "@/component/pages/common/CsProcess";

const BhivePage = () => {
  return (
    <>
      <Banner />
      <Stats />
      <ImageSection />
      <BusinessContext />
      <ChallengesObjectives />
      <StrategyPlanning />
      <CampaignExecution />
      <CsProcess  
        title="Our Process"
        steps={[
    {
        number: "01",
        title: "Process Overview",
        description:
        "A Structured Multi-Channel System Was Built To Scale High-Intent Lead Generation Efficiently.",
        points: [
            "Integrated Search, Retargeting, And B2B Targeting Layers",
            "Aligned Audience Intent With Funnel Stages",
            "Focused On Balancing Scale With Cost Control",
            "Designed For Consistent And Scalable Performance",
        ],
    },
    {
        number: "02",
        title: "Content Planning",
        description:
            "Content Was Designed To Drive Conversion By Aligning Messaging With User Intent.",
        points: [
            "Focused On Workspace Flexibility And Business Scalability",
            "Highlighted Infrastructure Quality And Location Advantages",
            "Mapped Messaging Across Awareness To Conversion Stages",
            "Ensured Clarity And Relevance Across Platforms",
        ],
    },
    {
        number: "03",
        title: "Distribution & Attribution (What Worked)",
        description:
            "Each Platform Played A Distinct Role In Driving Performance And Lead Quality.",
        points: [
            "Google Ads Drove High-Intent Conversion Traffic",
            "Meta Ads Strengthened Retargeting And Scale",
            "LinkedIn Delivered High-Quality B2B Leads",
            "Combined Channels Improved Funnel Consistency",
        ],
    },
    {
        number: "04",
        title: "Best Practices Implemented",
        description:
            "Structured Execution And Continuous Optimization Improved Campaign Performance.",
        points: [
            "Funnel Segmentation Across TOFU, MOFU, BOFU",
            "Continuous Testing Of Creatives And Messaging",
            "Keyword Refinement For High-Intent Targeting",
            "Audience Optimization Using Behavioral Signals",
            "Platform-Specific Creative Alignment",
        ],
    },
    {
        number: "05",
        title: "Governance & Growth",
        description:
        "Performance Was Managed Through Continuous Monitoring And Controlled Scaling.",
        points: [
            "Budget Allocation Optimized Across Platforms",
            "Bid Strategies Refined For Efficiency",
            "Regular Performance Reviews And Audits",
            "Continuous Optimization For Sustained Growth",
        ],
    },
]}
      />
      <CsPerformance
        title="Results &"
        titleHighlight="Performance"
        stats={[
          {
            label: "TOTAL CONVERSIONS",
            oldValue: "823",
            newValue: "6,000+",
            badges: ["7.3x growth", "Multi-platform"],
          },
          {
            label: "COST PER ACQUISITION",
            oldValue: "₹1,620",
            newValue: "₹129 - ₹252",
            badges: ["92% reduction", "Sustained gains"],
          },
        ]}
        highlights={[
          "High click volumes supported funnel growth",
          "Consistent MQL flow across campaign duration",
        ]}
        details={[
          {
            title: "Performance Improvement",
            content:
              "Significant improvement in conversion volume and cost efficiency observed post optimization, with stable performance maintained in later phases.",
          },
          {
            title: "Cost Efficiency Gains",
            content:
              "Cost per acquisition reduced substantially through improved targeting, bidding strategies, and funnel optimization.",
          },
          {
            title: "Conversion / Revenue Impact",
            content:
              "Sustained increase in qualified leads and improved funnel quality contributed to stronger SQL generation and overall business growth potential.",
          },
        ]}
        glow={true}
      />
      <StaticPaidCampaignPerformance />
    </>
  );
};

export default BhivePage;

export const metadata = {
  title: "Bhive | Global Brandstory",
  description: "Bhive page for Global Brandstory",
};
