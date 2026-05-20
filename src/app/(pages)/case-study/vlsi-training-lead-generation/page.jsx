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
      heading="35% Cost Efficiency in <span>VLSI Training Lead Generation</span>"
      tags = {[
        { icon: "Globe", text: "EdTech / VLSI Training" },
        { icon: "Target", text: "Lead Generation" },
        { icon: "Briefcase", text: "B2C" },
        { icon: "Share2", text: "Google · Meta" },
        { icon: "Calendar", text: "₹1.3L – ₹2.6L / month" },
        { icon: "Clock", text: "Multi-phase campaign" },
      ]}
      googleLogo = "/images/commonBanner4/google-logo.png"
      />
      {/* <Stats /> */}
      <CommonStats2 
        summaryLabel= "EXECUTIVE SUMMARY"
        summaryQuote= "Scaled student lead generation through structured multi-platform campaigns, improving conversion performance while optimizing cost efficiency in a highly competitive technical education segment."
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
          subText: "EdTech & VLSI Training",
        },
      ]}
      />
      {/* <ImageSection /> */}
      <CommonImageGrid 
        images={[
          "/images/case-study/ppc/vlsi-training-lead-generation/image1.jpg",
          "/images/case-study/ppc/vlsi-training-lead-generation/image2.jpg",
          "/images/case-study/ppc/vlsi-training-lead-generation/image3.jpg",
          "/images/case-study/ppc/vlsi-training-lead-generation/image4.jpg",
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
            description: "A VLSI skill development and training institute focused on preparing students and professionals for semiconductor careers through industry-aligned programs and hands-on technical learning.",
          },
          {
            icon: "Users",
            number: "02",
            title: "Target Audience",
            description: "Engineering students, fresh graduates, and working professionals looking to build careers in VLSI, semiconductor design, and chip design technologies.",
          },
          {
            icon: "TrendingUp",
            number: "03",
            title: "Previous Marketing Performance",
            description: "Earlier campaigns generated student enquiries but lacked structured funnel optimization, leading to inconsistent conversion performance and fluctuating acquisition costs.",
          },
          {
            icon: "Target",
            number: "04",
            title: "Business Goal Behind Campaign",
            description: "To increase student enquiries, improve acquisition efficiency, and capture high-intent demand for VLSI and semiconductor training programs.",
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
            "Highly competitive EdTech market",
            "High CPC for technical training keywords",
            "Demand fluctuations based on career and hiring cycles",
            "Audience segmentation refinement across platforms",
            "Balancing lead quality with conversion scale",
          ],
        }}
        objectives= {{
          title: "Campaign Objectives",
          items: [
            "Increase qualified student lead volume",
            "Reduce cost per acquisition",
            "Improve conversion consistency",
            "Capture high-intent student searches",
            "Scale performance across platforms",
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
            description: "Focused on engineering students and professionals searching for VLSI training, supported by geo-targeting across technology hubs and education-focused regions."
          },
          {
            icon: "search",
            title: "Keyword / Interest Strategy",
            description: "Targeted high-intent keywords such as VLSI training, chip design courses, and semiconductor training, supported by interest-based targeting across Meta platforms."
          },
          {
            icon: "layers",
            title: "Funnel Strategy",
            description: "TOFU: Awareness via Meta campaigns · MOFU: Retargeting and engagement campaigns · BOFU: High-intent Google search campaigns."
          },
          {
            icon: "pin",
            title: "Creative Strategy",
            description: "Used career-focused messaging highlighting placement support, industry relevance, practical learning, and career growth opportunities to improve trust and drive enquiries."
          },
          {
            icon: "dollar",
            title: "Budget Allocation Strategy",
            description: "Primary budget allocation focused on Google Ads for conversions, while Meta Ads supported scale, awareness, and retargeting efforts."
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
            description: "Segmented campaigns based on course categories, audience segments, and keyword intent to improve targeting precision and lead quality."
          },
          {
            icon: "pin",
            title: "Creatives Used",
            description: "Text-based search ads and performance creatives highlighting placements, career opportunities, semiconductor industry demand, and course benefits."
          },
          {
            icon: "megaphone",
            title: "Landing Page Approach",
            description: "Directed users to course-specific landing pages with enquiry forms, strong CTAs, and detailed program information aligned with search intent."
          },
          {
            icon: "flask",
            title: "A/B Testing Strategy",
            description: "Tested keyword variations, messaging structures, audience segments, and creative formats to improve engagement and conversion rates."
          },
          {
            icon: "settings",
            title: "Optimization Approach",
            description: "Continuously optimized campaigns through bid adjustments, keyword refinement, audience optimization, and scaling strategies based on campaign performance insights."
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
        "A structured multi-platform lead generation framework was implemented to scale student enquiries while maintaining acquisition efficiency across competitive technical education campaigns.",
        points: [
            "Integrated search and retargeting strategies across platforms",
            "Aligned student intent with conversion-focused campaigns",
            "Focused on balancing conversion scale with CPL efficiency",
            "Designed for stable lead generation across demand cycles",
        ],
    },
    {
        number: "02",
        title: "Content Planning",
        description:
            "Campaign messaging was aligned around career growth, placements, industry relevance, and technical learning outcomes.",
        points: [
            "Focused on VLSI and semiconductor career intent",
            "Highlighted placement support and hands-on learning",
            "Mapped messaging across awareness and conversion stages",
            "Ensured relevance across Google and Meta campaigns",
        ],
    },
    {
        number: "03",
        title: "Distribution & Attribution (What Worked)",
        description:
            "Each platform contributed differently toward lead generation scale and conversion performance.",
        points: [
            "Google Ads captured high-intent technical course searches",
            "Meta Ads strengthened retargeting and audience scale",
            "Geo-targeting improved student lead relevance",
            "Multi-platform execution improved funnel consistency",
        ],
    },
    {
        number: "04",
        title: "Best Practices Implemented",
        description:
            "Structured execution and continuous optimization improved campaign performance and acquisition efficiency.",
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
        "Performance was managed through ongoing optimization, campaign monitoring, and scaling strategies.",
        points: [
            "Budget allocation optimized based on performance insights",
            "Bid strategies refined for efficiency and scale",
            "Campaign audits conducted regularly",
            "Continuous improvements implemented using conversion data",
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
            oldValue: "193",
            newValue: "4146",
            badges: ["22× growth", "Multi-platform scale"],
          },
          {
            label: "COST PER ACQUISITION",
            oldValue: "₹820",
            newValue: "₹40",
            badges: ["35% reduction", "Sustained gains"],
          },
        ]}
        highlights={[
          "Strong click volumes supported high-intent lead generation",
          "Consistent lead flow maintained across campaign duration",
        ]}
        details={[
          {
            title: "Performance Improvement",
            content:
              "Conversion volumes increased significantly during high-demand periods, with stronger consistency and improved acquisition stability achieved through continuous optimization.",
          },
          {
            title: "Cost Efficiency Gains",
            content:
              "CPL was optimized substantially across campaign phases through refined targeting, bidding strategies, and audience segmentation, improving overall acquisition efficiency.",
          },
          {
            title: "Conversion / Revenue Impact",
            content:
              "Consistent student lead generation supported course enrolment demand, contributing to a strong admissions pipeline and scalable growth for career-focused training programs.",
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
  title: "Improving VLSI Training Lead Generation",
  description: "Performance-focused Google and Meta campaigns scaled student enquiries while improving acquisition efficiency across competitive VLSI training searches.",
};