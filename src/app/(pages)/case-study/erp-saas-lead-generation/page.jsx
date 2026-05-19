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
      heading="73% Cost Efficiency in <span>Enterprise SaaS Lead Generation</span>"
      tags = {[
        { icon: "Globe", text: "ERP / SaaS / Digital Transformation" },
        { icon: "Target", text: "Lead Generation" },
        { icon: "Briefcase", text: "B2B" },
        { icon: "Share2", text: "Google Ads" },
        { icon: "Calendar", text: "₹97K – ₹2.9L / month" },
        { icon: "Clock", text: "Multi-phase campaign" },
      ]}
      googleLogo = "/images/commonBanner4/google-logo.png"
      />
      {/* <Stats /> */}
      <CommonStats2 
        summaryLabel= "EXECUTIVE SUMMARY"
        summaryQuote= "Generated high-intent enterprise leads through structured Google Ads campaigns, improving conversion volume while optimizing cost efficiency across competitive ERP and SaaS keywords."
        stats= {[
        {
          value: "1",
          title: "PLATFORM",
          subText: "Google Ads",
        },
        {
          value: "PPC",
          title: "CAMPAIGN TYPE",
          subText: "Lead Generation Focus",
        },
        {
          value: "B2B",
          title: "BUSINESS MODEL",
          subText: "ERP & SaaS Solutions",
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
            description: "A Microsoft Dynamics 365 implementation partner offering ERP, CRM, and digital transformation solutions that help businesses streamline operations, automate workflows, and improve operational efficiency through cloud-based systems.",
          },
          {
            icon: "Users",
            number: "02",
            title: "Target Audience",
            description: "Enterprises, SMEs, and business decision-makers seeking ERP, CRM, and cloud-based business solutions, particularly Microsoft Dynamics 365 implementation and digital transformation services.",
          },
          {
            icon: "TrendingUp",
            number: "03",
            title: "Previous Marketing Performance",
            description: "Earlier campaigns lacked structured targeting and optimization, resulting in inconsistent lead generation and higher acquisition costs within a competitive B2B SaaS environment.",
          },
          {
            icon: "Target",
            number: "04",
            title: "Business Goal Behind Campaign",
            description: "To generate high-quality enterprise leads, improve acquisition efficiency, and capture high-intent demand for ERP, CRM, and digital transformation solutions.",
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
            "Highly competitive ERP and SaaS keywords",
            "High CPC environment within enterprise software markets",
            "Long B2B sales and decision-making cycles",
            "Enterprise lead qualification complexity",
            "Low initial conversion consistency",
          ],
        }}
        objectives= {{
          title: "Campaign Objectives",
          items: [
            "Increase qualified enterprise lead volume",
            "Reduce cost per acquisition",
            "Improve conversion consistency",
            "Capture high-intent enterprise demand",
            "Build scalable lead generation performance",
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
            description: "Focused on business decision-makers and organizations searching for ERP, CRM, and digital transformation solutions, supported by geo-targeting aligned with high-demand enterprise regions."
          },
          {
            icon: "search",
            title: "Keyword / Interest Strategy",
            description: "Targeted high-intent keywords such as Dynamics 365 implementation, ERP solutions, CRM software, and enterprise automation services aligned with B2B purchase intent."
          },
          {
            icon: "layers",
            title: "Funnel Strategy",
            description: "TOFU: Awareness through search discovery · MOFU: Engagement via intent-based search queries · BOFU: High-intent conversion campaigns."
          },
          {
            icon: "pin",
            title: "Creative Strategy",
            description: "Used solution-driven messaging highlighting operational efficiency, scalability, automation benefits, and digital transformation outcomes to attract enterprise buyers."
          },
          {
            icon: "dollar",
            title: "Budget Allocation Strategy",
            description: "Budget allocation focused entirely on Google Ads to efficiently capture high-intent enterprise demand within the ERP and SaaS ecosystem."
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
            description: "Segmented campaigns based on ERP services, CRM solutions, implementation offerings, and intent-based keyword clusters to improve targeting precision and lead quality."
          },
          {
            icon: "pin",
            title: "Creatives Used",
            description: "Text-based search ads emphasizing business outcomes, operational efficiency, ROI, scalability, and enterprise solution capabilities."
          },
          {
            icon: "megaphone",
            title: "Landing Page Approach",
            description: "Directed users to service-specific landing pages with consultation CTAs, enterprise-focused messaging, and lead capture forms aligned with business intent."
          },
          {
            icon: "flask",
            title: "A/B Testing Strategy",
            description: "Tested keyword variations, ad messaging, CTA structures, and landing page alignment to improve engagement, conversion quality, and enterprise lead intent."
          },
          {
            icon: "settings",
            title: "Optimization Approach",
            description: "Continuously optimized campaigns through bid adjustments, keyword refinement, negative keyword filtering, and performance monitoring to improve acquisition efficiency."
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
        "A structured Google Ads framework was implemented to improve enterprise lead quality while maintaining acquisition efficiency across competitive ERP and SaaS campaigns.",
        points: [
            "Focused on high-intent enterprise search targeting",
            "Aligned keyword intent with conversion-focused campaigns",
            "Structured campaigns for precision and scalability",
            "Designed for consistent enterprise lead generation",
        ],
    },
    {
        number: "02",
        title: "Content Planning",
        description:
            "Campaign messaging was aligned around operational efficiency, automation, business scalability, and digital transformation outcomes.",
        points: [
            "Focused on ERP and CRM implementation intent",
            "Highlighted efficiency, automation, and scalability benefits",
            "Mapped messaging across awareness and conversion stages",
            "Ensured consistency across enterprise search campaigns",
        ],
    },
    {
        number: "03",
        title: "Distribution & Attribution (What Worked)",
        description:
            "Google Ads served as the primary acquisition channel for capturing high-intent enterprise demand.",
        points: [
            "High-intent keywords improved enterprise lead quality",
            "Service-specific targeting strengthened conversion relevance",
            "Structured campaigns improved CTR and funnel consistency",
            "Continuous optimization supported scalable lead generation",
        ],
    },
    {
        number: "04",
        title: "Best Practices Implemented",
        description:
            "Structured execution and continuous optimization improved campaign efficiency and enterprise acquisition performance.",
        points: [
            "Keyword segmentation based on enterprise search intent",
            "Continuous testing of ad messaging and CTAs",
            "Optimization focused on reducing CPL",
            "Conversion-focused landing page alignment",
            "Search-intent-driven campaign structuring",
        ],
    },
    {
        number: "05",
        title: "Governance & Growth",
        description:
        "Performance was managed through ongoing optimization, campaign audits, and enterprise-focused scaling strategies.",
        points: [
            "Bid strategies refined for acquisition efficiency",
            "Keyword performance monitored continuously",
            "Campaign structures optimized for scalability",
            "Continuous improvements implemented using conversion insights",
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
            oldValue: "8",
            newValue: "73",
            badges: ["10× growth", "Enterprise scale"],
          },
          {
            label: "COST PER ACQUISITION",
            oldValue: "₹12175",
            newValue: "₹3226",
            badges: ["73% reduction", "Sustained gains"],
          },
        ]}
        highlights={[
          "Improved targeting supported stronger funnel growth",
          "Consistent enterprise lead flow observed across optimized campaign phases",
        ]}
        details={[
          {
            title: "Performance Improvement",
            content:
              "Conversion volume increased steadily across the campaign duration, with improved consistency and stronger lead acquisition observed after optimization phases.",
          },
          {
            title: "Cost Efficiency Gains",
            content:
              "CPL reduced significantly from ₹12175 to the ₹3226–₹5979 range through refined targeting, bid optimization, and keyword-level performance improvements.",
          },
          {
            title: "Conversion / Revenue Impact",
            content:
              "Consistent generation of high-value enterprise leads contributed to a stronger sales pipeline for ERP, CRM, and digital transformation services.",
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