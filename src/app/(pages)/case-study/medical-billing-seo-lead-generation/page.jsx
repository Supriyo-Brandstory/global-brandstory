import { CsSEOBanner } from "@/component/pages/common/CsSEOBanner";
import CsChallenge from "@/component/pages/common/CsChallenge";
import CsObjectives from "@/component/pages/common/CsObjectives";
import CsStepCards from "@/component/pages/common/CsStepCards";
import CsImageText from "@/component/pages/common/CsImageText";
import CsProcess from "@/component/pages/common/CsProcess";
import CsResults from "@/component/pages/common/CsResults";
import CsPerformance from "@/component/pages/common/CsPerformance";
import React from "react";
import CommonDivider from "@/component/pages/common/CommonDivider";
import { getPageUrl } from "@/utils/getPageUrl";

const page = () => {
  return (
    <div>
      <CsSEOBanner
        heading={"Capturing Qualified Clinic Leads Through <br/>SEO"}
        description={
          "A city-focused SEO strategy improved visibility among clinic owners and hospital administrators, strengthening qualified inbound lead generation across competitive healthcare billing markets."
        }
        meta={[
          { label: "Industry", value: "Medical Billing" },
          {
            label: "Market / Geography",
            value: "USA",
          },
          { label: "Business Model", value: "B2B" },
          { label: "Services Delivered", value: "SEO" },
        ]}
        stats={[
          { value: "65–90%", label: "Increase in Qualified Inbound Leads" },
          { value: "40%", label: "Landing Page Conversion Improvement" },
          { value: "18+", label: "US City Pages Ranking" },
        ]}
      />
      <CommonDivider />

      <CsChallenge
        title="Business Challenge"
        paragraphs={[
          "The medical billing provider operated in a highly competitive US healthcare market where national firms dominated high-value medical billing and revenue cycle management searches.",
          "Visibility among clinic owners, hospital administrators, and healthcare decision-makers was limited, restricting access to qualified procurement-focused enquiries.",
          "Additionally, existing landing pages lacked geographic relevance and conversion-focused structure, resulting in inconsistent inbound lead quality and lower conversion efficiency.",
        ]}
      />
      <CommonDivider />

      <CsObjectives
        title="Objectives and Success Metrics"
        description="The primary objective was to capture procurement-focused search demand across key US healthcare markets and convert organic visibility into high-quality inbound opportunities."
        points={[
          "Improve visibility for city-specific medical billing searches",
          "Increase qualified inbound enquiries from clinics and hospitals",
          "Improve landing page conversion efficiency",
          "Strengthen search visibility among healthcare administrators",
        ]}
        stats={[
          {
            title: "Inbound Leads",
            number: "65–90%",
            description: "Qualified Growth",
            isHighlighted: true,
          },
          {
            title: "Landing Page Conversion",
            number: "+40%",
            description: "Improvement",
          },
          {
            title: "City Rankings",
            number: "18+",
            description: "US City Pages",
          },
          {
            title: "Organic Clicks",
            number: "+42%",
            description: "Growth",
          },
        ]}
      />
      <CommonDivider />

      <CsStepCards
        title="Strategic Approach"
        description="The SEO strategy focused on aligning city-level search intent, healthcare procurement behavior, and conversion-focused content architecture to improve acquisition quality."
        cards={[
          {
            number: "1",
            title: "Geographic Structuring",
            content:
              "Developed City-Specific Landing Pages Targeting Healthcare Markets With Active Demand For Medical Billing And Revenue Cycle Management Services.",
          },
          {
            number: "2",
            title: "Decision-Maker Messaging",
            content:
              "Optimized Content, Service Positioning, And CTAs Around The Operational Pain Points Of Clinic Owners, Administrators, And Healthcare Procurement Teams.",
          },
          {
            number: "3",
            title: "Funnel Integration",
            content:
              "Integrated Workshop-Led Lead Qualification Funnels And Consultation Pathways To Improve Inbound Lead Quality Before Direct Sales Engagement.",
          },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Implementation Highlights"
        points={[
          "Developed city-focused landing pages across priority US healthcare markets",
          "Optimized metadata and content for local medical billing and RCM-related searches",
          "Implemented conversion-focused CTAs targeting clinic administrators and decision-makers",
          "Designed workshop-led qualification funnels for inbound lead filtering",
          "Strengthened internal linking across service and geographic content clusters",
          "Conducted continuous CRO testing across landing page structure and messaging",
          "Implemented ongoing tracking for rankings, clicks, and conversion performance",
        ]}
        image="/images/cs-2.png"
      />
      <CommonDivider />

      <CsProcess
        title="Our Process"
        steps={[
          {
            number: "01",
            title: "Process Overview",
            description:
              "A Structured SEO Framework Was Implemented To Improve Healthcare Market Visibility, Strengthen Qualified Lead Generation, And Increase Conversion Efficiency.",
            points: [
              "Focused On City-Targeted Healthcare Search Visibility",
              "Captured Procurement-Driven Medical Billing Keywords",
              "Improved Internal Authority Across Service And City Pages",
              "Aligned SEO Strategy With Qualified Lead Acquisition Goals",
            ],
          },
          {
            number: "02",
            title: "Content Planning",
            description:
              "Content Was Structured Around Healthcare Procurement Intent, Administrator Decision-Making, And Local Market Relevance.",
            points: [
              "City Pages Targeting Clinic And Hospital Billing Searches",
              "Service Content Aligned With Revenue Cycle Management Intent",
              "Educational Content Supporting Procurement Evaluation",
              "Coverage Aligned From Discovery To Consultation Intent",
            ],
          },
          {
            number: "03",
            title: "Distribution & Attribution (What Worked)",
            description:
              "Different SEO Content Layers Contributed To Stronger Visibility And Qualified Lead Growth.",
            points: [
              "City Pages Improved Local Healthcare Search Discoverability",
              "Decision-Maker Messaging Improved Enquiry Quality",
              "Internal Linking Strengthened Crawlability And Authority Flow",
              "Conversion-Focused Funnels Improved Lead Qualification",
            ],
          },
          {
            number: "04",
            title: "Best Practices Implemented",
            description:
              "Structured Optimization Ensured Scalable Visibility Growth And Improved Conversion Performance.",
            points: [
              "Geo-Clustered SEO Architecture For Healthcare Market Scalability",
              "Internal Linking Between City And Service Clusters",
              "Focus On Procurement-Intent Keyword Targeting",
              "CRO Optimization Across Landing Page Pathways",
              "Continuous Monitoring Of Rankings And Conversion Metrics",
            ],
          },
          {
            number: "05",
            title: "Governance & Growth",
            description:
              "Performance Was Maintained Through Ongoing Optimization, CRO Testing, And Search Visibility Improvements.",
            points: [
              "Regular SEO Audits For Technical Consistency",
              "Keyword Tracking To Guide Geographic Expansion",
              "Conversion Analysis For Landing Page Optimization",
              "Ongoing Improvements For Sustained Inbound Growth",
            ],
          },
        ]}
      />

      <CsStepCards
        title="Challenges and Resolutions"
        cards={[
          {
            number: "1",
            title2: "Outcome",
            sections: [
              {
                label: "Challenge",
                value:
                  "Low Visibility Among Clinic Owners And Hospital Administrators Evaluating Billing Partners",
              },
              {
                label: "Resolution",
                value:
                  "Developed Geo-Specific Landing Pages Targeting Healthcare Procurement And Billing-Related Searches",
              },
              {
                label: "Result",
                value:
                  "Established Search Presence Across Multiple US Healthcare Markets",
              },
            ],
          },
          {
            number: "2",
            title2: "Outcome",
            sections: [
              {
                label: "Challenge",
                value:
                  "Inbound Leads Lacked Consistency And Qualification Quality",
              },
              {
                label: "Resolution",
                value:
                  "Introduced Workshop-Led Lead Qualification Funnels Integrated Into The Organic Acquisition Process",
              },
              {
                label: "Result",
                value: "65–90% Growth In Qualified Inbound Enquiries",
              },
            ],
          },
          {
            number: "3",
            title2: "Outcome",
            sections: [
              {
                label: "Challenge",
                value:
                  "Landing Pages Were Not Effectively Converting Healthcare Search Traffic Into Sales Conversations",
              },
              {
                label: "Resolution",
                value:
                  "Rebuilt CTAs And Landing Page Structure Around Administrator Intent And Conversion Behavior",
              },
              {
                label: "Result",
                value:
                  "30–40% Improvement In Landing Page Conversion Rates",
              },
            ],
          },
        ]}
      />
      <CommonDivider />
      <CsPerformance
        title="Results /"
        titleHighlight="Impact"
        stats={[
          {
            label: "QUALIFIED LEADS",
            oldValue: "0%",
            newValue: "90%",
            badges: ["+65–90% growth", "better inbound quality"],
          },
          {
            label: "LANDING PAGE CONVERSIONS",
            oldValue: "0%",
            newValue: "40%",
            badges: ["+30–40% growth", "higher sales intent"],
          },
        ]}
        highlights={[
          "Improved healthcare market discoverability across US cities",
          "Stronger lead qualification and sales conversation consistency",
        ]}
        details={[
          {
            content:
              "City-focused SEO restructuring and conversion-led optimization significantly improved qualified inbound lead generation and healthcare procurement visibility.",
            fullWidth: true,
          },
        ]}
      />
      <CsResults
        title="Results and Business Impact"
        results={[
          { value: "65–90%", label: "Increase In Qualified Inbound Leads" },
          { value: "30–40%", label: "Landing Page Conversion Improvement" },
          { value: "15+", label: "US City-Based Keywords Ranked" },
          { value: "42%", label: "Increase In Organic Click Volume" },
          {
            value: "Consistent",
            label: "Month-on-Month Growth In Sales Conversations",
          },
          {
            value: "Higher",
            label: "Lead Qualification From Clinics & Hospital Administrators",
          },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Why This Worked"
        description="Performance improved because the SEO strategy aligned city-level healthcare demand with procurement-focused messaging and structured conversion pathways."
        points={[
          "City-specific pages captured high-intent healthcare procurement searches",
          "Decision-maker messaging improved lead quality and engagement",
          "Conversion-focused landing pages strengthened sales conversation intent",
          "Internal linking improved authority flow across geographic clusters",
        ]}
        image="/images/cs-3.png"
        buttonText="Plan Your Growth Roadmap"
        buttonLink="/"
      />
      <CommonDivider />
    </div>
  );
};

export default page;

export const metadata = {
  title:"Capturing Qualified Clinic Leads Through Organic Search",
  description:"City-focused SEO optimization improved healthcare search visibility, strengthened inbound lead quality, and increased conversion-focused engagement.",
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
}