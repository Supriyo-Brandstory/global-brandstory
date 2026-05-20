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
      heading="Scaling Online Saree Sales Through <span>Performance Marketing</span>"
      tags = {[
        { icon: "Globe", text: "Textile / Saree Retail" },
        { icon: "Target", text: "Sales / Conversion" },
        { icon: "Briefcase", text: "B2C" },
        { icon: "Share2", text: "Google · Meta" },
        { icon: "Calendar", text: "₹97K – ₹2.9L / month" },
        { icon: "Clock", text: "Multi-phase campaign" },
      ]}
      googleLogo = "/images/commonBanner4/google-logo.png"
      />
      {/* <Stats /> */}
      <CommonStats2 
        summaryLabel= "EXECUTIVE SUMMARY"
        summaryQuote= "Scaled online saree sales through performance-driven campaigns, improving conversion volume and cost efficiency while driving consistent revenue growth across Google and Meta platforms."
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
          subText: "Textile & Saree Retail",
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
            description: "A heritage saree brand specializing in premium silk saree collections including Kanchivaram, Banarasi, bridal silk, and soft silk sarees, blending traditional craftsmanship with contemporary fashion preferences.",
          },
          {
            icon: "Users",
            number: "02",
            title: "Target Audience",
            description: "Women shoppers, bridal buyers, festive shoppers, and saree enthusiasts looking for premium silk sarees for weddings, occasions, festivals, and daily wear.",
          },
          {
            icon: "TrendingUp",
            number: "03",
            title: "Previous Marketing Performance",
            description: "Earlier campaigns lacked structured scaling and optimization, resulting in inconsistent conversions and untapped revenue potential across digital platforms.",
          },
          {
            icon: "Target",
            number: "04",
            title: "Business Goal Behind Campaign",
            description: "To increase online saree sales, improve acquisition efficiency, and scale revenue through performance-driven Google and Meta campaigns.",
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
            "Highly competitive textile and saree market",
            "Seasonal demand fluctuations across festive and wedding periods",
            "Maintaining profitability while scaling campaigns",
            "Audience targeting precision across platforms",
            "Conversion optimization for e-commerce purchases",
          ],
        }}
        objectives= {{
          title: "Campaign Objectives",
          items: [
            "Increase online sales volume",
            "Optimize cost per acquisition",
            "Improve conversion consistency",
            "Scale revenue growth through paid campaigns",
            "Strengthen cross-platform campaign performance",
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
            description: "Focused on women shoppers, wedding buyers, saree enthusiasts, and festive shoppers using interest-based and behavior-driven targeting across Google and Meta platforms."
          },
          {
            icon: "search",
            title: "Keyword / Interest Strategy",
            description: "Targeted high-intent keywords such as silk sarees, Kanchivaram sarees, bridal sarees, and wedding sarees on Google, supported by interest-based targeting on Meta platforms."
          },
          {
            icon: "layers",
            title: "Funnel Strategy",
            description: "TOFU: Awareness via Meta campaigns · MOFU: Retargeting and engagement campaigns · BOFU: High-intent Google conversion campaigns."
          },
          {
            icon: "pin",
            title: "Creative Strategy",
            description: "Used product-focused creatives highlighting premium saree collections, craftsmanship, festive styling, bridal appeal, and occasion-based shopping use cases."
          },
          {
            icon: "dollar",
            title: "Budget Allocation Strategy",
            description: "Balanced campaign spend between Google Ads for conversion-focused traffic and Meta Ads for audience scaling, product discovery, and retargeting."
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
            description: "Segmented campaigns based on product categories, purchase intent, customer segments, and shopping behavior to improve targeting precision and conversion efficiency."
          },
          {
            icon: "pin",
            title: "Creatives Used",
            description: "Product visuals, carousel creatives, festive collections, and wedding-focused messaging highlighting premium silk sarees and craftsmanship."
          },
          {
            icon: "megaphone",
            title: "Landing Page Approach",
            description: "Directed users to product and category pages with optimized purchase journeys, clear CTAs, mobile-friendly browsing, and seamless checkout experiences."
          },
          {
            icon: "flask",
            title: "A/B Testing Strategy",
            description: "Tested creatives, audience segments, product messaging, and campaign structures to identify high-performing combinations and improve ROAS."
          },
          {
            icon: "settings",
            title: "Optimization Approach",
            description: "Continuously optimized campaigns through bid adjustments, audience refinement, retargeting improvements, and scaling strategies based on performance insights."
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
        "A structured multi-platform e-commerce framework was implemented to scale saree sales while maintaining acquisition efficiency and revenue growth consistency.",
        points: [
            "Integrated shopping and retargeting strategies across platforms",
            "Aligned campaigns with purchase intent and festive demand",
            "Focused on balancing sales scale with ROAS efficiency",
            "Designed for consistent conversion-driven performance",
        ],
    },
    {
        number: "02",
        title: "Content Planning",
        description:
            "Campaign messaging was aligned around premium craftsmanship, festive shopping, wedding collections, and traditional elegance.",
        points: [
            "Focused on saree shopping and bridal purchase intent",
            "Highlighted silk collections and handcrafted quality",
            "Mapped messaging across awareness and purchase stages",
            "Ensured consistency across Google and Meta campaigns",
        ],
    },
    {
        number: "03",
        title: "Distribution & Attribution (What Worked)",
        description:
            "Each platform contributed differently toward revenue generation and conversion growth.",
        points: [
            "Google Ads captured high-intent shopping demand",
            "Meta Ads improved product discovery and retargeting",
            "Product-focused creatives improved shopping engagement",
            "Multi-platform execution strengthened funnel consistency",
        ],
    },
    {
        number: "04",
        title: "Best Practices Implemented",
        description:
            "Structured execution and continuous optimization improved campaign efficiency and conversion performance.",
        points: [
            "Funnel segmentation across TOFU, MOFU, and BOFU stages",
            "Continuous testing of creatives and audience segments",
            "Audience refinement using behavioral targeting",
            "Bid optimization focused on improving ROAS",
            "Platform-specific campaign structuring",
        ],
    },
    {
        number: "05",
        title: "Governance & Growth",
        description:
        "Performance was managed through ongoing optimization, scaling strategies, and campaign performance reviews.",
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
            oldValue: "10",
            newValue: "17",
            badges: ["1.7× growth", "Multi-platform scale"],
          },
          {
            label: "COST PER ACQUISITION",
            oldValue: "₹12171",
            newValue: "₹4193",
            badges: ["66% reduction", "Sustained gains"],
          },
        ]}
        highlights={[
          "Improved engagement supported stronger conversions",
          "Better funnel performance observed during optimized campaign phases",
        ]}
        details={[
          {
            title: "Performance Improvement",
            content:
              "Conversion performance improved steadily during the scaling phase, with stronger consistency observed across both Google and Meta campaigns.",
          },
          {
            title: "Cost Efficiency Gains",
            content:
              "CPA stabilized across campaigns, with improved acquisition efficiency achieved through audience refinement, bid optimization, and retargeting improvements.",
          },
          {
            title: "Conversion / Revenue Impact",
            content:
              "Revenue scaled significantly from ₹54,558 in January to ₹113,710 in March on Meta campaigns, while Google campaigns generated ₹82,881 in March, reflecting strong e-commerce sales growth and campaign effectiveness.",
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
  title: "Scaling Saree E-commerce Sales Growth",
  description: "Conversion-focused Google and Meta campaigns increased saree sales while improving acquisition efficiency and strengthening online revenue growth.",
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