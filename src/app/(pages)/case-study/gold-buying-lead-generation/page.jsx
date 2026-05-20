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
      heading="Scaling Gold Buying Leads with <span>Low CPL at High Volume</span>"
      tags = {[
        { icon: "Globe", text: "Gold Buying / Financial Services" },
        { icon: "Target", text: "Lead Generation" },
        { icon: "Briefcase", text: "B2C" },
        { icon: "Share2", text: "Google · Meta" },
        { icon: "Calendar", text: "₹2L – ₹36L / month" },
        { icon: "Clock", text: "Multi-phase campaign" },
      ]}
      googleLogo = "/images/commonBanner4/google-logo.png"
      />
      {/* <Stats /> */}
      <CommonStats2 
        summaryLabel= "EXECUTIVE SUMMARY"
        summaryQuote= "Scaled high-volume lead generation through multi-platform campaigns, achieving strong conversion performance while optimizing cost efficiency across highly competitive gold-buying keywords."
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
          subText: "Gold Buying & Financial Services",
        },
      ]}
      />
      {/* <ImageSection /> */}
      <CommonImageGrid 
        images={[
          "/images/case-study/ppc/gold-buying-lead-generation/image1.png",
          "/images/case-study/ppc/gold-buying-lead-generation/image2.png",
          "/images/case-study/ppc/gold-buying-lead-generation/image3.png",
          "/images/case-study/ppc/gold-buying-lead-generation/image4.png",
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
            description: "One of South India’s leading organized gold-buying companies, offering services such as old gold buying, pledged gold release, and instant payment solutions through a transparent valuation process.",
          },
          {
            icon: "Users",
            number: "02",
            title: "Target Audience",
            description: "Individuals looking to sell gold, release pledged gold, or convert gold assets into instant cash across urban and semi-urban regions.",
          },
          {
            icon: "TrendingUp",
            number: "03",
            title: "Previous Marketing Performance",
            description: "Earlier campaigns generated strong demand but lacked structured optimization, resulting in fluctuating acquisition efficiency and inconsistent conversion patterns.",
          },
          {
            icon: "Target",
            number: "04",
            title: "Business Goal Behind Campaign",
            description: "To scale high-volume lead generation, improve cost efficiency, and capture high-intent users actively searching for gold-selling services.",
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
            "Highly competitive gold-buying keywords",
            "Fluctuating demand influenced by gold price trends",
            "High CPC environment across search campaigns",
            "Managing large-scale lead generation efficiently",
            "Maintaining cost efficiency while scaling campaigns",
          ],
        }}
        objectives= {{
          title: "Campaign Objectives",
          items: [
            "Scale qualified lead generation",
            "Optimize cost per acquisition",
            "Improve conversion consistency",
            "Strengthen high-intent targeting",
            "Maintain stable performance across large-scale campaigns",
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
            description: "Focused on users actively searching for gold-selling services, supported by strong geo-targeting across high-demand regions and branch locations."
          },
          {
            icon: "search",
            title: "Keyword / Interest Strategy",
            description: "Targeted high-intent keywords such as sell gold, gold buyers near me, and pledged gold release searches aligned with immediate transaction intent."
          },
          {
            icon: "layers",
            title: "Funnel Strategy",
            description: "TOFU: Awareness via Meta campaigns · MOFU: Engagement and retargeting campaigns · BOFU: High-intent Google search campaigns."
          },
          {
            icon: "pin",
            title: "Creative Strategy",
            description: "Used trust-focused messaging, instant payment highlights, and transparency-driven communication to build confidence and improve conversion intent."
          },
          {
            icon: "dollar",
            title: "Budget Allocation Strategy",
            description: "Major budget allocation focused on Google Ads for conversion-driven campaigns, while Meta Ads supported scale and retargeting across high-volume audiences."
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
            description: "Segmented campaigns based on keyword intent, service categories, and geo-targeting to maximize relevance, conversion quality, and scale."
          },
          {
            icon: "pin",
            title: "Creatives Used",
            description: "Static creatives, trust-focused messaging, and urgency-driven ad copies emphasizing instant cash, transparent pricing, and fast gold valuation."
          },
          {
            icon: "megaphone",
            title: "Landing Page Approach",
            description: "Directed users to location-based and service-specific landing pages with strong CTAs, simplified lead forms, and branch-focused enquiry flows."
          },
          {
            icon: "flask",
            title: "A/B Testing Strategy",
            description: "Tested keyword clusters, messaging variations, audience segments, and landing page structures to identify high-performing combinations."
          },
          {
            icon: "settings",
            title: "Optimization Approach",
            description: "Continuously optimized campaigns through bid adjustments, keyword refinement, negative keyword filtering, and scaling strategies to maintain efficiency at high volume."
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
        "A structured multi-platform lead generation framework was implemented to scale conversions efficiently while maintaining acquisition efficiency across large campaign volumes.",
        points: [
            "Integrated search and retargeting strategies across platforms",
            "Aligned high-intent targeting with transaction-focused campaigns",
            "Focused on balancing conversion scale with CPL efficiency",
            "Designed for sustained lead generation across demand cycles",
        ],
    },
    {
        number: "02",
        title: "Content Planning",
        description:
            "Campaign messaging was structured around trust, transparency, instant payment, and service convenience.",
        points: [
            "Focused on gold-selling and pledged gold-release intent",
            "Highlighted instant cash and transparent valuation",
            "Mapped messaging across awareness and conversion stages",
            "Ensured relevance across Google and Meta campaigns",
        ],
    },
    {
        number: "03",
        title: "Distribution & Attribution (What Worked)",
        description:
            "Each platform contributed differently toward conversion scale and acquisition performance.",
        points: [
            "Google Ads captured high-intent transactional searches",
            "Meta Ads strengthened retargeting and campaign scale",
            "Geo-targeting improved branch-level lead relevance",
            "Multi-platform execution improved funnel consistency and volume",
        ],
    },
    {
        number: "04",
        title: "Best Practices Implemented",
        description:
            "Structured execution and continuous optimization improved campaign efficiency and scalability.",
        points: [
            "Funnel segmentation across TOFU, MOFU, and BOFU stages",
            "Continuous testing of creatives and messaging",
            "Audience refinement using behavioral and geo-targeting",
            "Bid optimization focused on maintaining low CPL",
            "Platform-specific campaign structuring",
        ],
    },
    {
        number: "05",
        title: "Governance & Growth",
        description:
        "Performance was managed through ongoing optimization, scaling strategies, and campaign monitoring.",
        points: [
            "Budget allocation optimized based on platform performance",
            "Bid strategies refined for efficiency and scale",
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
            oldValue: "43,003",
            newValue: "87,932",
            badges: ["2× growth", "Multi-platform scale"],
          },
          {
            label: "COST PER ACQUISITION",
            oldValue: "₹150",
            newValue: "₹30",
            badges: ["80% reduction", "Sustained gains"],
          },
        ]}
        highlights={[
          "Strong click volumes supported large-scale funnel growth",
          "Consistent lead flow maintained across campaign duration",
        ]}
        details={[
          {
            title: "Performance Improvement",
            content:
              "High conversion volumes were maintained consistently across campaign phases, with stronger stability and improved acquisition efficiency achieved through continuous optimization.",
          },
          {
            title: "Cost Efficiency Gains",
            content:
              "CPL was optimized across both Google and Meta campaigns, maintaining strong cost control despite large-scale campaign execution and fluctuating market demand.",
          },
          {
            title: "Conversion / Revenue Impact",
            content:
              "Large-scale lead generation supported continuous business demand, enabling sustained transaction flow and stronger branch-level acquisition performance across regions.",
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
  title: "Scaling Gold Buying Lead Generation",
  description: "High-volume Google and Meta campaigns increased gold buying leads while maintaining strong cost efficiency across competitive transactional searches.",
};