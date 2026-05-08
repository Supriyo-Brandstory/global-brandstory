import { Banner } from "@/component/pages/Bhive/Banner";
import { Stats } from "@/component/pages/Bhive/Stats";
import { ImageSection } from "@/component/pages/Bhive/ImageSection";
import { BusinessContext } from "@/component/pages/Bhive/BusinessContext";
import { ChallengesObjectives } from "@/component/pages/Bhive/ChallengesObjectives";
import { StrategyPlanning } from "@/component/pages/Bhive/StrategyPlanning";
import { CampaignExecution } from "@/component/pages/Bhive/CampaignExecution";
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
      <StaticPaidCampaignPerformance />
    </>
  );
};

export default BhivePage;

export const metadata = {
  title: "Bhive | Global Brandstory",
  description: "Bhive page for Global Brandstory",
};
