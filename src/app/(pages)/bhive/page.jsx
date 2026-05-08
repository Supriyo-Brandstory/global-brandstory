import { Banner } from "@/component/pages/Bhive/Banner";
import { Stats } from "@/component/pages/Bhive/Stats";
import { ImageSection } from "@/component/pages/Bhive/ImageSection";
import { BusinessContext } from "@/component/pages/Bhive/BusinessContext";
import { ChallengesObjectives } from "@/component/pages/Bhive/ChallengesObjectives";
import { StrategyPlanning } from "@/component/pages/Bhive/StrategyPlanning";
import { CampaignExecution } from "@/component/pages/Bhive/CampaignExecution";
import CsPerformance from "@/component/pages/common/CsPerformance";
import StaticPaidCampaignPerformance from "@/component/pages/common/StaticPaidCampaignPerformance";

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
