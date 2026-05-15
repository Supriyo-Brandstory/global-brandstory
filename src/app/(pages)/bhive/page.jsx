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
      heading="Driving 7X Growth in Coworking <span>Lead Generation Strategy</span>"
      tags = {[
        { icon: "Globe", text: "Coworking / Managed Offices" },
        { icon: "Target", text: "Lead Generation" },
        { icon: "Briefcase", text: "B2B" },
        { icon: "Share2", text: "Google · Meta · LinkedIn" },
        { icon: "Calendar", text: "₹5L - ₹15L / month" },
        { icon: "Clock", text: "Multi-phase campaign" },
      ]}
      googleLogo = "/images/commonBanner4/google-logo.png"
      />
      {/* <Stats /> */}
      <CommonStats2 
        summaryLabel= "EXECUTIVE SUMMARY"
        summaryQuote= "Scaled high-intent lead generation through a multi-channel PPC strategy, significantly increasing conversion volume while improving cost efficiency across platforms."
        stats= {[
        {
          value: "3",
          title: "PLATFORMS",
          subText: "Google · Meta · LinkedIn",
        },
        {
          value: "PPC",
          title: "CAMPAIGN TYPE",
          subText: "Lead Generation Focus",
        },
        {
          value: "B2B",
          title: "BUSINESS MODEL",
          subText: "Workspace Solutions",
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
            description: "Provides coworking and managed office solutions for startups, SMEs, and enterprises, offering flexible, scalable workspace infrastructure across key locations.",
          },
          {
            icon: "Users",
            number: "02",
            title: "Target Audience",
            description: "Startups, growing businesses, and enterprise teams seeking flexible office solutions and managed workspaces in prime locations.",
          },
          {
            icon: "TrendingUp",
            number: "03",
            title: "Previous Marketing Performance",
            description: "Earlier campaigns were primarily traffic-focused, resulting in moderate conversion consistency and higher acquisition costs due to broad targeting and limited funnel structuring.",
          },
          {
            icon: "Target",
            number: "04",
            title: "Business Goal Behind Campaign",
            description: "To scale high-quality lead generation, improve cost efficiency, and build a structured funnel to capture high-intent users across multiple channels.",
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
            "High competition in workspace-related keywords",
            "Rising acquisition costs across search platforms",
            "Balancing lead volume with quality",
            "Multi-location targeting complexity",
            "Limited funnel segmentation in earlier campaigns",
          ],
        }}
        objectives= {{
          title: "Campaign Objectives",
          items: [
            "Scale qualified leads",
            "Reduce cost per acquisition",
            "Improve MQL and SQL consistency",
            "Strengthen high-intent targeting",
            "Build a scalable multi-channel funnel",
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
            description: "Location-based targeting across key Bangalore clusters combined with high-intent search users, behavioral segmentation, and role-based targeting for enterprise decision-makers."
          },
          {
            icon: "search",
            title: "Keyword / Interest Strategy",
            description: "Focused on high-intent keywords such as coworking spaces, managed offices, and location-based queries, supported by behavioral targeting on Meta platforms."
          },
          {
            icon: "layers",
            title: "Funnel Strategy",
            description: "TOFU: Awareness via Meta & LinkedIn · MOFU: Retargeting and engagement campaigns · BOFU: High-intent search campaigns on Google Ads."
          },
          {
            icon: "pin",
            title: "Creative Strategy",
            description: "Used real workspace visuals and business-focused messaging to build trust and improve engagement."
          },
          {
            icon: "dollar",
            title: "Budget Allocation Strategy",
            description: "Allocated budgets strategically: Google Ads for conversions, Meta Ads for scale and retargeting, and LinkedIn Ads for precision B2B targeting."
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
            description: "Segmented campaigns across platforms based on location, audience type, and intent level to improve targeting efficiency."
          },
          {
            icon: "pin",
            title: "Creatives Used",
            description: "Static creatives, workspace visuals, carousel formats, and conversion-focused messaging highlighting flexibility and business value."
          },
          {
            icon: "megaphone",
            title: "Landing Page Approach",
            description: "Directed users to high-intent landing pages with strong CTAs, optimized forms, and messaging aligned with campaign intent."
          },
          {
            icon: "flask",
            title: "A/B Testing Strategy",
            description: "Tested multiple creative variations, messaging angles, and audience segments to identify high-performing combinations."
          },
          {
            icon: "settings",
            title: "Optimization Approach",
            description: "Continuously optimized campaigns through bid adjustments, audience refinement, keyword tuning, and funnel-level improvements."
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
      <StaticPaidCampaignPerformance ctaText="Ready to scale your paid campaigns?" />
    </>
  );
};

export default BhivePage;

export const metadata = {
  title: "Bhive | Global Brandstory",
  description: "Bhive page for Global Brandstory",
};
