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
      heading="Driving Early-Stage Growth in <span>Real Estate Lead Generation</span>"
      tags = {[
        { icon: "Globe", text: "Real Estate / Plotted Development" },
        { icon: "Target", text: "Lead Generation" },
        { icon: "Briefcase", text: "B2C" },
        { icon: "Share2", text: "Meta Ads" },
        { icon: "Calendar", text: "₹15K / month" },
        { icon: "Clock", text: "Multi-phase campaign" },
      ]}
      googleLogo = "/images/commonBanner4/google-logo.png"
      />
      {/* <Stats /> */}
      <CommonStats2 
        summaryLabel= "EXECUTIVE SUMMARY"
        summaryQuote= "Executed a focused lead generation campaign through Meta Ads, generating initial high-intent enquiries while establishing early-stage performance benchmarks for a premium plotted development project."
        stats= {[
        {
          value: "1",
          title: "PLATFORM",
          subText: "Meta Ads",
        },
        {
          value: "PPC",
          title: "CAMPAIGN TYPE",
          subText: "Lead Generation Focus",
        },
        {
          value: "B2C",
          title: "BUSINESS MODEL",
          subText: "Real Estate & Plotted Development",
        },
      ]}
      />
      {/* <ImageSection /> */}
      {/* <CommonImageGrid 
        images={[
          "/images/bhive/b1.png",
          "/images/bhive/b2.png",
          "/images/bhive/b3.png",
        ]}
      /> */}
      {/* <BusinessContext /> */}
      <CommonBusinessContext 
        title= "Business <span>Context</span>"
        cards= {[
          {
            icon: "Building2",
            number: "01",
            title: "About the Business",
            description: "A premium plotted development project near Nandi Hills, offering a gated community with landscaped spaces, modern infrastructure, and scenic surroundings designed for long-term investment and weekend living.",
          },
          {
            icon: "Users",
            number: "02",
            title: "Target Audience",
            description: "Investors, second-home buyers, and high-income professionals looking for plotted developments near Bangalore with long-term appreciation potential.",
          },
          {
            icon: "TrendingUp",
            number: "03",
            title: "Previous Marketing Performance",
            description: "No prior structured digital campaigns were executed, resulting in limited online lead generation and absence of performance benchmarks.",
          },
          {
            icon: "Target",
            number: "04",
            title: "Business Goal Behind Campaign",
            description: "To generate initial leads, test audience response, and establish a performance baseline for scaling future real estate campaigns.",
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
            "New project launch with limited awareness",
            "Minimal historical campaign data for optimization",
            "High-ticket real estate purchase cycle",
            "Audience discovery and targeting refinement phase",
            "Uncertainty around initial lead generation performance",
          ],
        }}
        objectives= {{
          title: "Campaign Objectives",
          items: [
            "Generate initial qualified leads",
            "Establish campaign performance benchmarks",
            "Identify high-intent audience segments",
            "Build a scalable foundation for future campaigns",
            "Improve audience engagement and enquiry quality",
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
            description: "Focused on high-income audiences, investors, and users interested in real estate, plotted developments, and second homes near Bangalore."
          },
          {
            icon: "search",
            title: "Keyword / Interest Strategy",
            description: "Used interest-based targeting around real estate investments, plotted developments, luxury living, and land ownership opportunities."
          },
          {
            icon: "layers",
            title: "Funnel Strategy",
            description: "TOFU: Awareness campaigns via Meta · MOFU: Engagement through creative interactions · BOFU: Conversion-focused lead generation campaigns."
          },
          {
            icon: "pin",
            title: "Creative Strategy",
            description: "Used premium visuals highlighting greenery, location advantages, investment value, and lifestyle appeal to attract investment-focused buyers."
          },
          {
            icon: "dollar",
            title: "Budget Allocation Strategy",
            description: "Budget allocation was focused entirely on Meta Ads to test audience segments, measure engagement, and establish baseline campaign performance."
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
            description: "Structured campaigns with segmented audience groups based on interests, demographics, investment intent, and buyer behavior patterns."
          },
          {
            icon: "pin",
            title: "Creatives Used",
            description: "Static creatives showcasing project visuals, location benefits, gated-community features, and investment-focused value propositions."
          },
          {
            icon: "megaphone",
            title: "Landing Page Approach",
            description: "Directed users to lead capture forms with simplified enquiry flows, project highlights, and strong CTAs aligned with campaign messaging."
          },
          {
            icon: "flask",
            title: "A/B Testing Strategy",
            description: "Tested audience segments, messaging angles, and creative variations to identify early performance signals and improve campaign relevance."
          },
          {
            icon: "settings",
            title: "Optimization Approach",
            description: "Initial optimization focused on improving targeting efficiency, engagement quality, and lead response through audience refinement and performance monitoring."
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
        "A structured Meta Ads framework was implemented to establish initial campaign benchmarks and generate high-intent real estate enquiries efficiently.",
        points: [
            "Focused on audience discovery and engagement testing",
            "Aligned targeting with investment-focused buyer intent",
            "Structured campaigns for early-stage optimization",
            "Designed to establish scalable campaign foundations",
        ],
    },
    {
        number: "02",
        title: "Content Planning",
        description:
            "Campaign messaging was aligned around investment value, premium living, greenery, and long-term appreciation potential.",
        points: [
            "Focused on plotted development and investment intent",
            "Highlighted scenic location and gated-community features",
            "Mapped messaging across awareness and conversion stages",
            "Ensured consistency across campaign creatives",
        ],
    },
    {
        number: "03",
        title: "Distribution & Attribution (What Worked)",
        description:
            "Meta Ads served as the primary acquisition channel for audience testing and early-stage lead generation.",
        points: [
            "Interest targeting improved audience relevance",
            "Creative-led engagement strengthened enquiry generation",
            "Audience segmentation improved targeting precision",
            "Funnel-based execution supported early campaign learning",
        ],
    },
    {
        number: "04",
        title: "Best Practices Implemented",
        description:
            "Structured execution and iterative optimization improved campaign efficiency during the initial launch phase.",
        points: [
            "Funnel segmentation across TOFU, MOFU, and BOFU stages",
            "Continuous testing of creatives and audience segments",
            "Audience refinement using engagement insights",
            "Optimization focused on improving CPL efficiency",
            "Conversion-focused lead capture alignment",
        ],
    },
    {
        number: "05",
        title: "Governance & Growth",
        description:
        "Performance was monitored continuously to establish benchmark metrics and support future scaling opportunities.",
        points: [
            "Audience performance reviewed regularly",
            "Budget allocation optimized using engagement insights",
            "Campaign structures refined for scalability",
            "Continuous improvements implemented using lead response data",
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
            oldValue: "0",
            newValue: "5",
            badges: ["Early-stage growth", "Initial campaign benchmarks"],
          },
          {
            label: "COST PER LEAD",
            oldValue: "₹3186 CPL",
            newValue: "Baseline established",
            badges: ["Optimization phase", "Sustained gains"],
          },
        ]}
        highlights={[
          "Strong engagement signals supported early funnel validation",
          "Initial lead flow established across launch campaigns",
        ]}
        details={[
          {
            title: "Performance Improvement",
            content:
              "The campaign successfully generated initial high-intent enquiries during the launch phase, establishing measurable performance benchmarks for future scaling opportunities.",
          },
          {
            title: "Cost Efficiency Gains",
            content:
              "Early optimization efforts improved audience targeting efficiency and provided baseline CPL benchmarks for future campaign refinement and scaling strategies.",
          },
          {
            title: "Conversion / Revenue Impact",
            content:
              "Initial lead generation supported early-stage sales pipeline development and provided valuable audience insights for scaling high-intent real estate acquisition campaigns.",
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
