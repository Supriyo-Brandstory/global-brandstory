import CsPerformance from "@/component/pages/common/CsPerformance";
import StaticPaidCampaignPerformance from "@/component/pages/common/StaticPaidCampaignPerformance";
import CsProcess from "@/component/pages/common/CsProcess";
import { CommonBanner4 } from "@/component/pages/common/CommonBanner4";
import { CommonStats2 } from "@/component/pages/common/CommonStats2";
import { CommonImageGrid } from "@/component/pages/common/CommonImageGrid";
import { CommonBusinessContext } from "@/component/pages/common/CommonBusinessContext";
import { CommonChallengesObjectives } from "@/component/pages/common/CommonChallengesObjectives";
import { CommonStrategyPlanning } from "@/component/pages/common/CommonStrategyPlanning";
import { CommonCampaignExecution } from "@/component/pages/common/CommonCampaignExecution";

const BhivePage = () => {
  return (
    <>
      {/* <Banner /> */}
      <CommonBanner4 
      heading="82% Cost Efficiency in <span>B2B Insurance Lead Generation</span>"
      tags = {[
        { icon: "Globe", text: "Insurance / Financial Services" },
        { icon: "Target", text: "Lead Generation" },
        { icon: "Briefcase", text: "B2B" },
        { icon: "Share2", text: "Meta · LinkedIn" },
        { icon: "Calendar", text: "AED 5K – AED 12K / month" },
        { icon: "Clock", text: "Multi-phase campaign" },
      ]}
      googleLogo = "/images/commonBanner4/google-logo.png"
      />
      {/* <Stats /> */}
      <CommonStats2 
        summaryLabel= "EXECUTIVE SUMMARY"
        summaryQuote= "Generated consistent B2B leads through targeted Meta and LinkedIn campaigns, improving conversion volume while maintaining strong cost efficiency within a specialized insurance segment."
        stats= {[
        {
          value: "2",
          title: "PLATFORMS",
          subText: "Meta · LinkedIn",
        },
        {
          value: "PPC",
          title: "CAMPAIGN TYPE",
          subText: "Lead Generation Focus",
        },
        {
          value: "B2B",
          title: "BUSINESS MODEL",
          subText: "Insurance & Financial Services",
        },
      ]}
      />
      {/* <ImageSection /> */}
      <CommonImageGrid 
        images={[
          "/images/bhive/b1.png",
          "/images/bhive/b2.png",
          "/images/bhive/b3.png",
        ]}
      />
      {/* <BusinessContext /> */}
      <CommonBusinessContext 
        title= "Business <span>Context</span>"
        cards= {[
          {
            icon: "Building2",
            number: "01",
            title: "About the Business",
            description: "The digital arm of VIVA Insurance Brokers, offering business insurance solutions including property insurance, liability coverage, startup insurance, and customized risk protection solutions for UAE-based businesses.",
          },
          {
            icon: "Users",
            number: "02",
            title: "Target Audience",
            description: "Startups, SMEs, real estate agencies, and businesses across the UAE seeking customized insurance coverage and risk protection solutions.",
          },
          {
            icon: "TrendingUp",
            number: "03",
            title: "Previous Marketing Performance",
            description: "Earlier campaigns had limited scale and inconsistent lead generation due to lack of structured targeting, audience qualification, and funnel optimization.",
          },
          {
            icon: "Target",
            number: "04",
            title: "Business Goal Behind Campaign",
            description: "To generate qualified B2B leads, improve acquisition efficiency, and build a scalable digital acquisition funnel for business insurance services.",
          },
        ]}
      />
      {/* <ChallengesObjectives /> */}
      <CommonChallengesObjectives 
        title=  "Challenges <span>&</span> <span class='accent'>Objectives</span>"
        desc= ""
        challenges= {{
          title: "Key Challenges",
          items: [
            "Niche B2B target audience",
            "Low initial lead volume",
            "Limited brand awareness in competitive markets",
            "High dependency on precise audience targeting",
            "Conversion variability during early campaign phases",
          ],
        }}
        objectives= {{
          title: "Campaign Objectives",
          items: [
            "Increase qualified B2B lead volume",
            "Optimize cost per acquisition",
            "Improve conversion consistency",
            "Build a structured acquisition funnel",
            "Scale campaign performance across platforms",
          ],
        }}
      />
      {/* <StrategyPlanning /> */}
      <CommonStrategyPlanning 
        title = "Strategy <span>&</span> <span class='accent'>Planning</span>"
        items= {[
          {
            icon: "users",
            title: "Audience Targeting Strategy",
            description: "Focused on business owners, startups, SMEs, and professionals in the UAE using interest-based and behavioral targeting aligned with business insurance needs."
          },
          {
            icon: "search",
            title: "Keyword / Interest Strategy",
            description: "Used interest-based targeting around business insurance, startups, SMEs, and financial protection services to capture relevant decision-makers and business audiences."
          },
          {
            icon: "layers",
            title: "Funnel Strategy",
            description: "TOFU: Awareness via Meta campaigns · MOFU: Engagement and retargeting campaigns · BOFU: Conversion-focused lead generation campaigns."
          },
          {
            icon: "pin",
            title: "Creative Strategy",
            description: "Used trust-driven messaging highlighting business protection, simplified onboarding, risk coverage, and customized insurance solutions tailored for startups and SMEs."
          },
          {
            icon: "dollar",
            title: "Budget Allocation Strategy",
            description: "Primary budget allocation focused on Meta Ads for scalable lead generation, while LinkedIn was used selectively for niche B2B targeting and professional audience acquisition."
          }
        ]}
      />
      {/* <CampaignExecution /> */}
      <CommonCampaignExecution 
        title= "Campaign <span class='accent'>Execution</span>"
        cards= {[
          {
            icon: "chart",
            title: "Ad Structure",
            description: "Segmented campaigns based on audience type, business segment, company size, and campaign objectives to improve targeting precision and lead quality."
          },
          {
            icon: "pin",
            title: "Creatives Used",
            description: "Static creatives and business-focused messaging emphasizing insurance benefits, business continuity, risk protection, and simplified onboarding processes."
          },
          {
            icon: "megaphone",
            title: "Landing Page Approach",
            description: "Directed users to lead capture landing pages with clear value propositions, simplified forms, and messaging aligned with campaign objectives."
          },
          {
            icon: "flask",
            title: "A/B Testing Strategy",
            description: "Tested audience segments, messaging formats, creatives, and lead form structures to identify high-performing combinations and improve conversions."
          },
          {
            icon: "settings",
            title: "Optimization Approach",
            description: "Continuously optimized campaigns through audience refinement, budget reallocation, retargeting optimization, and ongoing performance monitoring."
          }
        ]}
      />
      <CsProcess  
        title="Our Process"
        steps={[
    {
        number: "01",
        title: "Process Overview",
        description:
        "A structured multi-platform lead generation framework was implemented to improve B2B acquisition performance while maintaining cost-efficient lead generation.",
        points: [
            "Integrated awareness and retargeting strategies across platforms",
            "Aligned audience targeting with business insurance intent",
            "Focused on balancing lead quality with CPL efficiency",
            "Designed for scalable and consistent lead generation",
        ],
    },
    {
        number: "02",
        title: "Content Planning",
        description:
            "Campaign messaging was aligned around trust, risk protection, business continuity, and simplified insurance solutions.",
        points: [
            "Focused on SME and startup insurance requirements",
            "Highlighted business protection and onboarding simplicity",
            "Mapped messaging across awareness and conversion stages",
            "Ensured consistency across Meta and LinkedIn campaigns",
        ],
    },
    {
        number: "03",
        title: "Distribution & Attribution (What Worked)",
        description:
            "Each platform contributed differently toward lead generation and acquisition quality.",
        points: [
            "Meta Ads improved campaign scale and retargeting performance",
            "LinkedIn strengthened niche B2B audience acquisition",
            "Audience segmentation improved lead relevance",
            "Multi-platform execution improved funnel consistency",
        ],
    },
    {
        number: "04",
        title: "Best Practices Implemented",
        description:
            "Structured execution and continuous optimization improved campaign efficiency and lead quality.",
        points: [
            "Funnel segmentation across TOFU, MOFU, and BOFU stages",
            "Continuous testing of creatives and messaging",
            "Audience refinement using behavioral targeting",
            "Bid optimization focused on reducing CPL",
            "Platform-specific campaign structuring",
        ],
    },
    {
        number: "05",
        title: "Governance & Growth",
        description:
        "Performance was managed through ongoing optimization, audience refinement, and campaign scaling strategies.",
        points: [
            "Budget allocation optimized based on conversion trends",
            "Bid strategies refined for acquisition efficiency",
            "Campaign audits conducted regularly",
            "Continuous improvements implemented using performance insights",
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
            oldValue: "130",
            newValue: "379",
            badges: ["2.9× growth", "Multi-platform scale"],
          },
          {
            label: "COST PER ACQUISITION",
            oldValue: "AED 147",
            newValue: "AED 27",
            badges: ["82% reduction", "Sustained gains"],
          },
        ]}
        highlights={[
          "Strong click volumes supported funnel growth",
          "Improved conversion consistency observed across campaign phases",
        ]}
        details={[
          {
            title: "Performance Improvement",
            content:
              "Significant improvement in conversion volume was observed between August and October, with stronger acquisition stability maintained during later campaign phases.",
          },
          {
            title: "Cost Efficiency Gains",
            content:
              "CPL reduced substantially through improved audience targeting, campaign optimization, and budget refinement, resulting in stronger acquisition efficiency across Meta and LinkedIn campaigns.",
          },
          {
            title: "Conversion / Revenue Impact",
            content:
              "Consistent B2B lead generation supported pipeline growth for insurance products, improving acquisition opportunities across SME and startup business segments.",
          },
        ]}
        glow={true}
      />
      <StaticPaidCampaignPerformance ctaText="Ready to scale your paid campaigns?" />
    </>
  );
};

export default BhivePage;

export const metadata = {
  title: "Bhive | Global Brandstory",
  description: "Bhive page for Global Brandstory",
};
