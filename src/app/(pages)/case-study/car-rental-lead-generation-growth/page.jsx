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
        heading="Car Rental Leads Scaled with <span>42% Cost Efficiency Gain</span>"
        tags={[
          { icon: "Globe", text: "Car Rental / Mobility Services" },
          { icon: "Target", text: "Lead Generation" },
          { icon: "Briefcase", text: "B2C" },
          { icon: "Share2", text: "Google · Meta" },
          { icon: "Calendar", text: "₹10K – ₹5.6L / month" },
          { icon: "Clock", text: "Multi-phase campaign" },
        ]}
        googleLogo="/images/commonBanner4/google-logo.png"
      />
      {/* <Stats /> */}
      <CommonStats2
        summaryLabel="EXECUTIVE SUMMARY"
        summaryQuote="Scaled high-volume lead generation through multi-platform campaigns, optimizing cost efficiency while maintaining strong conversion performance across hiring-focused campaigns."
        stats={[
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
            subText: "Car Rental & Mobility Services",
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
        title="Business <span>Context</span>"
        cards={[
          {
            icon: "Building2",
            number: "01",
            title: "About the Business",
            description: "A self-drive car rental platform offering flexible vehicle rental solutions across major cities, focused on affordability, convenience, and a wide fleet of vehicles.",
          },
          {
            icon: "Users",
            number: "02",
            title: "Target Audience",
            description: "Urban consumers, working professionals, travelers, and individuals seeking flexible self-drive car rental solutions for daily use, travel, and long-term rentals.",
          },
          {
            icon: "TrendingUp",
            number: "03",
            title: "Previous Marketing Performance",
            description: "Earlier campaigns focused primarily on traffic generation, resulting in inconsistent lead flow and fluctuating acquisition efficiency due to limited funnel structuring.",
          },
          {
            icon: "Target",
            number: "04",
            title: "Business Goal Behind Campaign",
            description: "To scale lead generation, improve acquisition efficiency, and build a structured funnel to capture high-intent users across hiring and rental-focused campaigns.",
          },
        ]}
      />
      {/* <ChallengesObjectives /> */}
      <CommonChallengesObjectives
        title="Challenges <span>&</span> <span class='accent'>Objectives</span>"
        desc=""
        challenges={{
          title: "Key Challenges",
          items: [
            "Highly competitive rental market",
            "Fluctuating demand across seasons and hiring cycles",
            "Balancing high lead volume with acquisition efficiency",
            "Audience targeting optimization across locations",
            "Maintaining conversion consistency during scaling",
          ],
        }}
        objectives={{
          title: "Campaign Objectives",
          items: [
            "Scale qualified lead generation",
            "Reduce cost per acquisition",
            "Improve conversion consistency",
            "Strengthen high-intent targeting",
            "Optimize campaign performance across platforms",
          ],
        }}
      />
      {/* <StrategyPlanning /> */}
      <CommonStrategyPlanning
        title="Strategy <span>&</span> <span class='accent'>Planning</span>"
        items={[
          {
            icon: "users",
            title: "Audience Targeting Strategy",
            description: "Focused on urban audiences, travel-intent users, and individuals searching for self-drive rentals, combined with behavioral targeting and location-based segmentation."
          },
          {
            icon: "search",
            title: "Keyword / Interest Strategy",
            description: "Targeted high-intent rental keywords such as self-drive cars, car rentals, and city-based searches, supported by interest-based targeting across Meta platforms."
          },
          {
            icon: "layers",
            title: "Funnel Strategy",
            description: "TOFU: Awareness via Meta campaigns · MOFU: Engagement and retargeting campaigns · BOFU: High-intent Google search campaigns."
          },
          {
            icon: "pin",
            title: "Creative Strategy",
            description: "Used vehicle visuals, pricing-focused messaging, and convenience-driven communication highlighting affordability, flexibility, and ease of booking."
          },
          {
            icon: "dollar",
            title: "Budget Allocation Strategy",
            description: "Higher budget allocation toward Google Ads for conversion-focused campaigns, while Meta Ads supported audience scale and retargeting efforts."
          }
        ]}
      />
      {/* <CampaignExecution /> */}
      <CommonCampaignExecution
        title="Campaign <span class='accent'>Execution</span>"
        cards={[
          {
            icon: "chart",
            title: "Ad Structure",
            description: "Segmented campaigns based on location, audience intent, and campaign type, including hiring-focused and general demand campaigns."
          },
          {
            icon: "pin",
            title: "Creatives Used",
            description: "Static creatives, carousel ads, and performance-focused ad copies emphasizing pricing, availability, convenience, and rental flexibility."
          },
          {
            icon: "megaphone",
            title: "Landing Page Approach",
            description: "Directed users to booking-focused landing pages with strong CTAs, simplified lead forms, vehicle options, and messaging aligned with campaign intent."
          },
          {
            icon: "flask",
            title: "A/B Testing Strategy",
            description: "Tested multiple variations of ad copies, audience segments, and creative formats to identify high-performing combinations and improve engagement."
          },
          {
            icon: "settings",
            title: "Optimization Approach",
            description: "Continuously optimized campaigns through bid adjustments, audience refinement, campaign scaling, and ongoing performance monitoring to improve efficiency and lead quality."
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
              "A structured multi-platform lead generation framework was implemented to scale conversions efficiently while maintaining cost-effective acquisition performance.",
            points: [
              "Integrated search and retargeting strategies across platforms",
              "Aligned audience intent with conversion-focused campaigns",
              "Focused on balancing scale with acquisition efficiency",
              "Designed for consistent and scalable lead generation",
            ],
          },
          {
            number: "02",
            title: "Content Planning",
            description:
              "Campaign messaging was structured around convenience, pricing, flexibility, and booking ease.",
            points: [
              "Focused on affordability and rental accessibility",
              "Highlighted flexibility and vehicle availability",
              "Mapped messaging across awareness and conversion stages",
              "Ensured relevance across Google and Meta platforms",
            ],
          },
          {
            number: "03",
            title: "Distribution & Attribution (What Worked)",
            description:
              "Each platform contributed differently toward conversion scale and audience acquisition.",
            points: [
              "Google Ads captured high-intent rental demand",
              "Meta Ads strengthened retargeting and campaign scale",
              "Location-based targeting improved lead relevance",
              "Multi-platform execution improved funnel consistency",
            ],
          },
          {
            number: "04",
            title: "Best Practices Implemented",
            description:
              "Structured execution and continuous optimization improved overall campaign efficiency.",
            points: [
              "Funnel segmentation across TOFU, MOFU, and BOFU stages",
              "Continuous testing of creatives and messaging",
              "Audience optimization using behavioral targeting",
              "Bid adjustments focused on maintaining low CPL",
              "Platform-specific creative alignment",
            ],
          },
          {
            number: "05",
            title: "Governance & Growth",
            description:
              "Performance was managed through ongoing monitoring and controlled scaling strategies.",
            points: [
              "Budget allocation optimized across platforms",
              "Bid strategies refined for efficiency and scale",
              "Regular performance reviews and campaign audits",
              "Continuous optimization implemented for sustained growth",
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
            oldValue: "161",
            newValue: "7601",
            badges: ["48× growth", "Multi-platform scale"],
          },
          {
            label: "COST PER ACQUISITION",
            oldValue: "₹95",
            newValue: "₹55",
            badges: ["42% reduction", "Sustained gains"],
          },
        ]}
        highlights={[
          "High click volumes supported strong funnel growth",
          "Consistent lead flow maintained across campaign duration",
        ]}
        details={[
          {
            title: "Performance Improvement",
            content:
              "Strong improvement in conversion scale was observed during peak months, with stable campaign performance maintained across both Google and Meta platforms.",
          },
          {
            title: "Cost Efficiency Gains",
            content:
              "CPL improved from ₹95 to ₹55 on Google campaigns while maintaining efficient acquisition costs across Meta campaigns through refined targeting and optimization strategies.",
          },
          {
            title: "Conversion / Revenue Impact",
            content:
              "High-volume lead generation supported sustained business demand, particularly during hiring-focused campaign phases, contributing to scalable growth and stronger funnel performance.",
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
  title: "Scaling Car Rental Lead Generation",
  description: "Multi-platform paid campaigns increased car rental lead volume while improving conversion consistency and acquisition efficiency across high-intent audiences.",
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