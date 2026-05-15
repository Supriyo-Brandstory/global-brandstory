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
      heading="108% Revenue Growth in <span>D2C Jewellery Campaigns</span>"
      tags = {[
        { icon: "Globe", text: "Jewellery / D2C E-commerce" },
        { icon: "Target", text: "Sales / Conversion" },
        { icon: "Briefcase", text: "B2C" },
        { icon: "Share2", text: "Google · Meta" },
        { icon: "Calendar", text: "₹15K / month" },
        { icon: "Clock", text: "Multi-phase campaign" },
      ]}
      googleLogo = "/images/commonBanner4/google-logo.png"
      />
      {/* <Stats /> */}
      <CommonStats2 
        summaryLabel= "EXECUTIVE SUMMARY"
        summaryQuote= "Scaled online jewellery sales through performance marketing campaigns, improving conversion efficiency while maintaining strong cost control across Google and Meta platforms."
        stats= {[
        {
          value: "2",
          title: "PLATFORMS",
          subText: "Google · Meta",
        },
        {
          value: "PPC",
          title: "CAMPAIGN TYPE",
          subText: "Sales & Conversion Focus",
        },
        {
          value: "B2C",
          title: "BUSINESS MODEL",
          subText: "D2C Jewellery E-commerce",
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
            description: "A luxury jewellery brand specializing in handcrafted 925 silver jewellery, offering a wide range of traditional and contemporary designs tailored for modern consumers.",
          },
          {
            icon: "Users",
            number: "02",
            title: "Target Audience",
            description: "Women consumers, jewellery enthusiasts, and online shoppers seeking premium handcrafted silver jewellery for daily wear, gifting, and special occasions.",
          },
          {
            icon: "TrendingUp",
            number: "03",
            title: "Previous Marketing Performance",
            description: "Earlier campaigns lacked structured scaling and optimization, resulting in inconsistent conversion performance and underutilized revenue potential across digital channels.",
          },
          {
            icon: "Target",
            number: "04",
            title: "Business Goal Behind Campaign",
            description: "To increase online sales, improve conversion efficiency, and scale revenue through performance-driven digital campaigns across Google and Meta platforms.",
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
            "Highly competitive jewellery e-commerce market",
            "Managing customer acquisition costs profitably",
            "Scaling revenue while maintaining ROAS efficiency",
            "Conversion optimization across funnel stages",
            "Balancing platform performance and budget allocation",
          ],
        }}
        objectives= {{
          title: "Campaign Objectives",
          items: [
            "Increase online sales volume",
            "Optimize cost per acquisition",
            "Improve conversion consistency",
            "Scale revenue through paid campaigns",
            "Strengthen cross-platform performance",
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
            description: "Focused on women audiences, jewellery buyers, gifting shoppers, and fashion-focused consumers using interest-based and behavioral targeting across Meta and Google platforms."
          },
          {
            icon: "search",
            title: "Keyword / Interest Strategy",
            description: "Targeted high-intent shopping keywords for jewellery on Google, supported by Meta audience targeting for product discovery, engagement, and retargeting."
          },
          {
            icon: "layers",
            title: "Funnel Strategy",
            description: "TOFU: Awareness via Meta campaigns · MOFU: Retargeting and engagement campaigns · BOFU: High-intent Google conversion campaigns."
          },
          {
            icon: "pin",
            title: "Creative Strategy",
            description: "Used product-focused creatives, lifestyle imagery, festive positioning, and value-driven messaging highlighting craftsmanship, elegance, and premium quality."
          },
          {
            icon: "dollar",
            title: "Budget Allocation Strategy",
            description: "Balanced spend allocation between Google Ads for conversion-driven traffic and Meta Ads for audience scaling, retargeting, and product discovery."
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
            description: "Segmented campaigns based on product categories, customer intent, audience segments, and funnel stages to improve conversion efficiency."
          },
          {
            icon: "pin",
            title: "Creatives Used",
            description: "Product visuals, carousel creatives, collection-focused ads, and performance-driven messaging highlighting jewellery designs, offers, and premium craftsmanship."
          },
          {
            icon: "megaphone",
            title: "Landing Page Approach",
            description: "Directed traffic to product-specific pages with optimized purchase flows, clear CTAs, seamless checkout experiences, and mobile-friendly conversion paths."
          },
          {
            icon: "flask",
            title: "A/B Testing Strategy",
            description: "Tested product creatives, audience segments, messaging formats, and campaign structures to identify high-performing combinations and improve ROAS."
          },
          {
            icon: "settings",
            title: "Optimization Approach",
            description: "Continuously optimized campaigns through bid adjustments, audience refinement, retargeting improvements, and scaling strategies to maximize conversion performance."
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
        "A structured multi-platform e-commerce framework was implemented to scale online jewellery sales while maintaining acquisition efficiency and conversion stability.",
        points: [
            "Integrated conversion and retargeting strategies across platforms",
            "Aligned campaigns with shopping intent and buying behavior",
            "Focused on balancing sales scale with ROAS efficiency",
            "Designed for consistent purchase-driven campaign performance",
        ],
    },
    {
        number: "02",
        title: "Content Planning",
        description:
            "Campaign messaging was aligned around jewellery craftsmanship, premium quality, gifting appeal, and lifestyle positioning.",
        points: [
            "Focused on fashion and jewellery buying intent",
            "Highlighted handcrafted collections and premium designs",
            "Mapped messaging across awareness and purchase stages",
            "Ensured consistency across Google and Meta campaigns",
        ],
    },
    {
        number: "03",
        title: "Distribution & Attribution (What Worked)",
        description:
            "Each platform contributed differently toward revenue generation and conversion performance.",
        points: [
            "Google Ads captured high-intent purchase demand",
            "Meta Ads improved discovery, engagement, and retargeting",
            "Product-focused creatives improved shopping engagement",
            "Multi-platform execution strengthened conversion consistency",
        ],
    },
    {
        number: "04",
        title: "Best Practices Implemented",
        description:
            "Structured execution and continuous optimization improved campaign efficiency and revenue performance.",
        points: [
            "Funnel segmentation across TOFU, MOFU, and BOFU stages",
            "Continuous testing of creatives and product messaging",
            "Audience refinement using behavioral targeting",
            "Bid optimization focused on improving ROAS",
            "Platform-specific campaign structuring",
        ],
    },
    {
        number: "05",
        title: "Governance & Growth",
        description:
        "Performance was managed through ongoing optimization, audience analysis, and campaign scaling strategies.",
        points: [
            "Budget allocation optimized based on platform performance",
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
            oldValue: "9",
            newValue: "11",
            badges: ["1.3× growth", "Multi-platform scale"],
          },
          {
            label: "COST PER ACQUISITION",
            oldValue: "₹9887",
            newValue: "₹2260",
            badges: ["23% reduction", "Sustained gains"],
          },
        ]}
        highlights={[
          "Strong click volumes supported consistent purchase intent",
          "Stable conversion flow maintained across campaign duration",
        ]}
        details={[
          {
            title: "Performance Improvement",
            content:
              "Conversion activity improved after the initial campaign setup, with stronger stability and more consistent performance observed as campaigns scaled across Google and Meta platforms.",
          },
          {
            title: "Cost Efficiency Gains",
            content:
              "CPA stabilized across campaign phases, with improved efficiency achieved through refined audience targeting, bidding optimization, and funnel improvements.",
          },
          {
            title: "Conversion / Revenue Impact",
            content:
              "Revenue scaled significantly, reaching ₹72,710 during peak performance months, indicating stronger sales contribution and improved e-commerce performance through paid campaigns.",
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