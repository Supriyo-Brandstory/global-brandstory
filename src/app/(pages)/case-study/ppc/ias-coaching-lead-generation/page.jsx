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
      heading="49% Cost Efficiency in <span>Education Lead Generation Campaigns</span>"
      tags = {[
        { icon: "Globe", text: "Education / IAS Coaching" },
        { icon: "Target", text: "Lead Generation" },
        { icon: "Briefcase", text: "B2C" },
        { icon: "Share2", text: "Google Ads" },
        { icon: "Calendar", text: "₹39K – ₹2.5L / month" },
        { icon: "Clock", text: "Multi-phase campaign" },
      ]}
      googleLogo = "/images/commonBanner4/google-logo.png"
      />
      {/* <Stats /> */}
      <CommonStats2 
        summaryLabel= "EXECUTIVE SUMMARY"
        summaryQuote= "Scaled high-intent student lead generation through structured Google Ads campaigns, improving conversion volume while maintaining cost efficiency across competitive education keywords."
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
          value: "B2C",
          title: "BUSINESS MODEL",
          subText: "Education & IAS Coaching",
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
            description: "A leading IAS coaching institute offering structured preparation programs for civil services examinations, with over 28 years of experience and a strong track record of successful student selections.",
          },
          {
            icon: "Users",
            number: "02",
            title: "Target Audience",
            description: "Students, graduates, and working professionals preparing for UPSC and KAS examinations, seeking structured coaching, mentorship, and exam-oriented preparation.",
          },
          {
            icon: "TrendingUp",
            number: "03",
            title: "Previous Marketing Performance",
            description: "Earlier campaigns generated moderate enquiry volumes with fluctuating acquisition efficiency due to broad targeting and limited funnel optimization.",
          },
          {
            icon: "Target",
            number: "04",
            title: "Business Goal Behind Campaign",
            description: "To increase student enquiries, improve acquisition efficiency, and capture high-intent search demand during key admission cycles.",
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
            "Highly competitive education keywords",
            "Seasonal spikes in admission demand",
            "High CPC for IAS and UPSC-related searches",
            "Conversion dependency on admission cycles",
            "Audience targeting refinement across locations",
          ],
        }}
        objectives= {{
          title: "Campaign Objectives",
          items: [
            "Increase qualified lead volume",
            "Reduce cost per acquisition",
            "Improve conversion consistency",
            "Capture high-intent student searches",
            "Optimize campaign performance during admission periods",
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
            description: "Focused on students and aspirants searching for IAS coaching, combined with geo-targeting across Bangalore and high-density student locations."
          },
          {
            icon: "search",
            title: "Keyword / Interest Strategy",
            description: "Targeted high-intent keywords such as IAS coaching, UPSC coaching, and location-based admission searches aligned with student enquiry intent."
          },
          {
            icon: "layers",
            title: "Funnel Strategy",
            description: "TOFU: Awareness through search discovery · MOFU: Engagement through intent-based keyword targeting · BOFU: High-intent conversion campaigns."
          },
          {
            icon: "pin",
            title: "Creative Strategy",
            description: "Used result-driven messaging highlighting success rates, mentorship quality, faculty expertise, and structured coaching programs to improve trust and drive enquiries."
          },
          {
            icon: "dollar",
            title: "Budget Allocation Strategy",
            description: "Focused primarily on Google Ads to capture high-intent student demand, with budget scaling during peak admission cycles."
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
            description: "Segmented campaigns based on keyword intent, examination type (IAS/KAS), and geo-targeting to improve relevance and conversion performance."
          },
          {
            icon: "pin",
            title: "Creatives Used",
            description: "Text-based ads focused on student results, mentorship quality, success stories, and long-term coaching value propositions."
          },
          {
            icon: "megaphone",
            title: "Landing Page Approach",
            description: "Directed users to course-specific landing pages with enquiry forms, strong CTAs, and detailed program information aligned with search intent."
          },
          {
            icon: "flask",
            title: "A/B Testing Strategy",
            description: "Tested keyword variations, ad messaging, CTA structures, and landing page elements to improve engagement and enquiry conversion rates."
          },
          {
            icon: "settings",
            title: "Optimization Approach",
            description: "Continuously optimized campaigns through bid adjustments, keyword refinement, negative keyword filtering, and scaling during peak admission periods."
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
        "A structured Google Ads framework was implemented to scale student enquiries efficiently while maintaining cost-effective lead acquisition.",
        points: [
            "Focused on high-intent student search targeting",
            "Aligned keyword intent with admission-focused campaigns",
            "Structured campaigns for scalability and efficiency",
            "Designed to maintain stable enquiry flow across admission cycles",
        ],
    },
    {
        number: "02",
        title: "Content Planning",
        description:
            "Campaign messaging was aligned around exam preparation, coaching quality, mentorship, and student outcomes.",
        points: [
            "Focused on UPSC and IAS preparation intent",
            "Highlighted faculty expertise and student success",
            "Mapped messaging across awareness and conversion stages",
            "Ensured clarity and relevance across search campaigns",
        ],
    },
    {
        number: "03",
        title: "Distribution & Attribution (What Worked)",
        description:
            "Google Ads served as the primary acquisition channel for capturing high-intent student demand.",
        points: [
            "High-intent keywords improved enquiry quality",
            "Location targeting strengthened lead relevance",
            "Structured campaigns improved CTR and conversion consistency",
            "Continuous optimization supported stable enquiry flow",
        ],
    },
    {
        number: "04",
        title: "Best Practices Implemented",
        description:
            "Structured execution and continuous optimization improved campaign performance and acquisition efficiency.",
        points: [
            "Keyword segmentation based on search intent",
            "Continuous testing of messaging and CTAs",
            "Optimization focused on reducing CPL",
            "Conversion-focused landing page alignment",
            "Admission-cycle-based campaign scaling",
        ],
    },
    {
        number: "05",
        title: "Governance & Growth",
        description:
        "Performance was managed through ongoing monitoring, campaign audits, and optimization improvements.",
        points: [
            "Budget allocation refined during peak admission periods",
            "Bid strategies optimized for acquisition efficiency",
            "Keyword performance reviewed consistently",
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
            oldValue: "823",
            newValue: "6,000+",
            badges: ["7.29× growth", "Scalable lead generation"],
          },
          {
            label: "COST PER ACQUISITION",
            oldValue: "₹1,620",
            newValue: "₹129",
            badges: ["49% reduction", "Sustained gains"],
          },
        ]}
        highlights={[
          "Strong click volumes supported high-intent lead generation",
          "Consistent enquiry flow maintained across campaign duration",
        ]}
        details={[
          {
            title: "Performance Improvement",
            content:
              "Conversion volumes increased significantly during admission cycles, with improved acquisition stability and scalable lead generation maintained during later campaign stages.",
          },
          {
            title: "Cost Efficiency Gains",
            content:
              "CPL reduced substantially through improved targeting, bidding strategies, and funnel optimization, achieving stronger efficiency across high-performing admission periods.",
          },
          {
            title: "Conversion / Revenue Impact",
            content:
              "High enquiry volumes supported admissions pipeline growth, contributing to consistent student acquisition opportunities and long-term enrollment scalability.",
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