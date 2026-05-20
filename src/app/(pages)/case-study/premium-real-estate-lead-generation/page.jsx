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
import { getPageUrl } from "@/utils/getPageUrl";

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
        { icon: "Calendar", text: "₹27K – ₹1.56L / month" },
        { icon: "Clock", text: "Multi-phase campaign" },
      ]}
      googleLogo = "/images/commonBanner4/google-logo.png"
      />
      {/* <Stats /> */}
      <CommonStats2 
        summaryLabel= "EXECUTIVE SUMMARY"
        summaryQuote= "Generated high-intent leads for luxury villa projects through structured multi-channel campaigns, improving conversion consistency while optimizing acquisition efficiency within a high-value real estate segment."
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
          "/images/case-study/ppc/premium-real-estate-lead-generation/image1.png",
          "/images/case-study/ppc/premium-real-estate-lead-generation/image2.png",
          "/images/case-study/ppc/premium-real-estate-lead-generation/image3.png",
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
            description: "A luxury villa project in Varthur, Bangalore, offering premium 4 BHK villas within a gated community designed around open green spaces, modern amenities, and premium residential living.",
          },
          {
            icon: "Users",
            number: "02",
            title: "Target Audience",
            description: "High-income professionals, investors, NRIs, and homebuyers seeking premium villas near Whitefield and Bangalore’s major IT corridors.",
          },
          {
            icon: "TrendingUp",
            number: "03",
            title: "Previous Marketing Performance",
            description: "Earlier campaigns generated limited leads with high acquisition costs due to broad targeting, inconsistent audience qualification, and limited funnel optimization within a high-ticket real estate segment.",
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
            "High-ticket real estate purchase cycle",
            "Lower lead volume relative to campaign spend",
            "High CPL within luxury property campaigns",
            "Audience qualification and intent filtering challenges",
            "Demand variability influenced by market conditions",
          ],
        }}
        objectives= {{
          title: "Campaign Objectives",
          items: [
            "Generate qualified luxury real estate leads",
            "Reduce cost per acquisition",
            "Improve conversion consistency",
            "Capture high-intent property searches",
            "Strengthen campaign performance across platforms",
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
            description: "Focused on high-income audiences and property seekers across Bangalore using geo-targeting and intent-based segmentation aligned with villa buyers."
          },
          {
            icon: "search",
            title: "Keyword / Interest Strategy",
            description: "Targeted high-intent keywords such as luxury villas in Whitefield, 4 BHK villas, gated community villas, and premium property searches, supported by Meta interest targeting."
          },
          {
            icon: "layers",
            title: "Funnel Strategy",
            description: "TOFU: Awareness via Meta campaigns · MOFU: Retargeting and engagement campaigns · BOFU: High-intent Google search campaigns."
          },
          {
            icon: "pin",
            title: "Creative Strategy",
            description: "Used premium visuals, luxury positioning, and lifestyle-focused messaging highlighting exclusivity, greenery, location advantages, and gated-community living."
          },
          {
            icon: "dollar",
            title: "Budget Allocation Strategy",
            description: "Balanced budget allocation between Google Ads for high-intent conversions and Meta Ads for awareness, reach, and retargeting campaigns."
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
            description: "Segmented campaigns based on intent keywords, audience behavior, location targeting, and property-specific messaging to improve lead quality and conversion relevance."
          },
          {
            icon: "pin",
            title: "Creatives Used",
            description: "High-quality visuals, carousel creatives, and premium messaging focused on luxury lifestyle, villa amenities, connectivity, and project highlights."
          },
          {
            icon: "megaphone",
            title: "Landing Page Approach",
            description: "Directed users to project-specific landing pages with enquiry forms, premium visuals, detailed project information, and strong CTAs aligned with buyer intent."
          },
          {
            icon: "flask",
            title: "A/B Testing Strategy",
            description: "Tested variations of creatives, messaging angles, CTA structures, and audience segments to improve engagement and conversion performance."
          },
          {
            icon: "settings",
            title: "Optimization Approach",
            description: "Continuously optimized campaigns through bid adjustments, audience refinement, funnel optimization, and campaign restructuring to improve acquisition efficiency."
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
        "A structured multi-platform lead generation framework was implemented to improve conversion quality while maintaining acquisition efficiency within a competitive luxury real estate segment.",
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
            "Campaign messaging was aligned around premium living, luxury amenities, investment value, and location-driven advantages.",
        points: [
            "Focused on luxury villa and property investment intent",
            "Highlighted exclusivity, greenery, and lifestyle benefits",
            "Mapped messaging across awareness and conversion stages",
            "Ensured relevance across Google and Meta campaigns",
        ],
    },
    {
        number: "03",
        title: "Distribution & Attribution (What Worked)",
        description:
            "Each platform contributed differently toward lead generation scale and conversion quality.",
        points: [
            "Google Ads captured high-intent property searches",
            "Meta Ads strengthened retargeting and awareness campaigns",
            "Audience segmentation improved lead relevance and quality",
            "Multi-platform execution improved funnel consistency",
        ],
    },
    {
        number: "04",
        title: "Best Practices Implemented",
        description:
            "Structured execution and continuous optimization improved campaign efficiency and acquisition performance.",
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
        "Performance was managed through ongoing optimization, campaign audits, and scaling strategies.",
        points: [
            "Budget allocation optimized based on campaign performance",
            "Bid strategies refined for acquisition efficiency",
            "Campaign monitoring conducted regularly",
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
            oldValue: "12",
            newValue: "46",
            badges: ["3.9× growth", "Multi-platform scale"],
          },
          {
            label: "COST PER ACQUISITION",
            oldValue: "₹4200",
            newValue: "₹1800",
            badges: ["57% reduction", "Sustained gains"],
          },
        ]}
        highlights={[
          "Improved click quality supported stronger funnel performance",
          "Consistent lead flow observed across optimized campaign phases",
        ]}
        details={[
          {
            title: "Performance Improvement",
            content:
              "Lead generation improved significantly after optimization, with conversions increasing from near-zero levels to more stable and consistent monthly performance.",
          },
          {
            title: "Cost Efficiency Gains",
            content:
              "CPL reduced substantially through improved audience targeting, funnel optimization, and bid refinement, resulting in stronger acquisition efficiency within a high-ticket real estate segment.",
          },
          {
            title: "Conversion / Revenue Impact",
            content:
              "Improved lead generation supported stronger sales pipeline development for high-value villa inventory, enhancing conversion opportunities within a long real estate buying cycle.",
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
  title: "Scaling Premium Real Estate Lead Generation",
  description: "Strategic Google and Meta campaigns improved luxury villa lead quality, strengthened conversion consistency, and optimized acquisition efficiency.",
  alternates: {
    canonical: getPageUrl(import.meta.url),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};