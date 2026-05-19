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
      heading="84% Cost Efficiency in <span>Luxury Real Estate Lead Campaigns</span>"
      tags = {[
        { icon: "Globe", text: "Real Estate / Luxury Villas" },
        { icon: "Target", text: "Lead Generation" },
        { icon: "Briefcase", text: "B2C" },
        { icon: "Share2", text: "Google · Meta" },
        { icon: "Calendar", text: "₹64K – ₹3.1L / month" },
        { icon: "Clock", text: "Multi-phase campaign" },
      ]}
      googleLogo = "/images/commonBanner4/google-logo.png"
      />
      {/* <Stats /> */}
      <CommonStats2 
        summaryLabel= "EXECUTIVE SUMMARY"
        summaryQuote= "Generated high-intent real estate leads for luxury villas through a multi-platform PPC strategy, improving conversion consistency and optimizing acquisition cost within a high-ticket real estate segment."
        stats= {[
        {
          value: "2",
          title: "PLATFORMS",
          subText: "Google · Meta",
        },
        {
          value: "PPC",
          title: "CAMPAIGN TYPE",
          subText: "Lead Generation Focus",
        },
        {
          value: "B2C",
          title: "BUSINESS MODEL",
          subText: "Luxury Real Estate",
        },
      ]}
      />
      {/* <ImageSection /> */}
      <CommonImageGrid 
        images={[
          "/images/case-study/ppc/luxury-villa-lead-generation/image1.png",
          "/images/case-study/ppc/luxury-villa-lead-generation/image2.png",
          "/images/case-study/ppc/luxury-villa-lead-generation/image3.png",
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
            description: "A premium residential villa project in Whitefield, Bangalore, offering 4 BHK luxury villas with modern amenities, gated-community living, and premium lifestyle experiences within a major IT corridor.",
          },
          {
            icon: "Users",
            number: "02",
            title: "Target Audience",
            description: "High-income professionals, NRIs, investors, and property buyers seeking luxury villas in Bangalore, particularly around Whitefield and nearby IT hubs.",
          },
          {
            icon: "TrendingUp",
            number: "03",
            title: "Previous Marketing Performance",
            description: "Earlier campaigns generated limited lead flow with inconsistent performance due to broad targeting, limited audience qualification, and lack of structured funnel optimization.",
          },
          {
            icon: "Target",
            number: "04",
            title: "Business Goal Behind Campaign",
            description: "To generate qualified real estate leads, improve acquisition efficiency, and capture high-intent buyers actively searching for luxury villa properties.",
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
            "High-ticket real estate buying cycle",
            "Lower conversion frequency compared to mass-market segments",
            "High CPL within luxury real estate campaigns",
            "Audience qualification and intent filtering challenges",
            "Demand fluctuations based on market conditions",
          ],
        }}
        objectives= {{
          title: "Campaign Objectives",
          items: [
            "Generate qualified luxury real estate leads",
            "Optimize cost per acquisition",
            "Improve lead consistency and quality",
            "Capture high-intent property searches",
            "Strengthen overall campaign performance",
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
            description: "Focused on high-income audiences, property seekers, investors, and users searching for villas in Whitefield, combined with geo-targeting and behavior-based segmentation."
          },
          {
            icon: "search",
            title: "Keyword / Interest Strategy",
            description: "Targeted high-intent keywords such as luxury villas in Whitefield, 4 BHK villas, gated community villas, and premium real estate searches, supported by Meta interest targeting."
          },
          {
            icon: "layers",
            title: "Funnel Strategy",
            description: "TOFU: Awareness via Meta campaigns · MOFU: Retargeting and engagement campaigns · BOFU: High-intent Google search campaigns."
          },
          {
            icon: "pin",
            title: "Creative Strategy",
            description: "Used luxury-focused visuals, premium positioning, and location-driven messaging to attract high-quality prospects and improve enquiry intent."
          },
          {
            icon: "dollar",
            title: "Budget Allocation Strategy",
            description: "Balanced budget allocation between Google Ads for high-intent conversions and Meta Ads for reach, awareness, and retargeting."
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
            description: "Segmented campaigns based on location targeting, audience intent, property type, and buyer interest to improve targeting precision and lead quality."
          },
          {
            icon: "pin",
            title: "Creatives Used",
            description: "High-quality visuals, carousel creatives, and premium messaging focused on luxury living, villa amenities, connectivity advantages, and gated-community experiences."
          },
          {
            icon: "megaphone",
            title: "Landing Page Approach",
            description: "Directed users to project-specific landing pages with detailed property information, premium visuals, enquiry forms, and strong CTAs aligned with buyer intent."
          },
          {
            icon: "flask",
            title: "A/B Testing Strategy",
            description: "Tested creative formats, messaging variations, audience segments, and CTA structures to improve engagement and conversion performance."
          },
          {
            icon: "settings",
            title: "Optimization Approach",
            description: "Continuously optimized campaigns through bid adjustments, audience refinement, funnel optimization, and performance tracking to improve acquisition efficiency."
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
        "A structured multi-platform lead generation framework was implemented to improve conversion quality while maintaining acquisition efficiency within a high-ticket real estate segment.",
        points: [
            "Integrated search and retargeting strategies across platforms",
            "Aligned audience intent with conversion-focused campaigns",
            "Focused on balancing lead quality with CPL efficiency",
            "Designed for consistent lead generation across campaign phases",
        ],
    },
    {
        number: "02",
        title: "Content Planning",
        description:
            "Campaign messaging was aligned around luxury living, premium amenities, investment value, and location advantages.",
        points: [
            "Focused on luxury villa and investment intent",
            "Highlighted premium amenities and connectivity benefits",
            "Mapped messaging across awareness and conversion stages",
            "Ensured relevance across Google and Meta campaigns",
        ],
    },
    {
        number: "03",
        title: "Distribution & Attribution (What Worked)",
        description:
            "Each platform contributed differently toward conversion performance and audience acquisition.",
        points: [
            "Google Ads captured high-intent property searches",
            "Meta Ads strengthened retargeting and awareness scale",
            "Audience segmentation improved lead quality",
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
        "Performance was managed through ongoing optimization, audience analysis, and campaign scaling strategies.",
        points: [
            "Budget allocation optimized based on performance trends",
            "Bid strategies refined for acquisition efficiency",
            "Campaign audits conducted regularly",
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
            oldValue: "18",
            newValue: "113",
            badges: ["6.2× growth", "Multi-platform scale"],
          },
          {
            label: "COST PER ACQUISITION",
            oldValue: "₹5554",
            newValue: "₹1073",
            badges: ["84% reduction", "Sustained gains"],
          },
        ]}
        highlights={[
          "Improved click quality supported funnel growth",
          "Consistent MQL flow observed across later campaign phases",
        ]}
        details={[
          {
            title: "Performance Improvement",
            content:
              "Lead generation improved significantly during later campaign phases, with stronger consistency achieved after retargeting implementation and funnel optimization.",
          },
          {
            title: "Cost Efficiency Gains",
            content:
              "CPL improved substantially through refined audience targeting, bid optimization, and funnel improvements, resulting in stronger acquisition efficiency within a competitive luxury real estate segment.",
          },
          {
            title: "Conversion / Revenue Impact",
            content:
              "Consistent lead generation supported the sales pipeline for high-value villa inventory, improving opportunities for conversions within a long real estate buying cycle.",
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
