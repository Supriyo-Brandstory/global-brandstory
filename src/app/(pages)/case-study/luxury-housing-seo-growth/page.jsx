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
        heading={"Strengthening Luxury Housing Visibility in <br/>Search"}
        description={
          "A precision-led SEO refinement improved visibility for premium housing searches, strengthening discoverability for luxury project pages and increasing qualified property enquiries."
        }
        meta={[
          { label: "Industry", value: "Real Estate" },
          {
            label: "Market / Geography",
            value: "India",
          },
          { label: "Business Model", value: "B2C" },
          { label: "Services Delivered", value: "SEO" },
        ]}
        stats={[
          { value: "46%", label: "Increase in Organic Traffic" },
          { value: "24+", label: "Luxury Housing Keywords on Page 1" },
          { value: "32%", label: "Increase in Qualified Property Enquiries" },
        ]}
      />
      <CommonDivider />

      <CsChallenge
        title="Business Challenge"
        paragraphs={[
          "The real estate developer faced limited visibility across competitive luxury housing and premium property searches within a highly saturated real estate market.",
          "Core project and location pages were not fully aligned with luxury buyer search behavior, reducing discoverability for commercially valuable housing queries.",
          "Additionally, technical performance bottlenecks and inconsistent page-level optimization affected crawlability, ranking stability, and organic engagement across project-focused searches.",
        ]}
      />
      <CommonDivider />

      <CsObjectives
        title="Objectives and Success Metrics"
        description="The primary objective was to improve search visibility for luxury housing searches while increasing qualified property enquiries from organic discovery."
        points={[
          "Improve rankings for high-intent luxury housing keywords",
          "Increase organic traffic from premium property searches",
          "Strengthen technical SEO performance and crawl efficiency",
          "Improve enquiry generation from project landing pages",
        ]}
        stats={[
          {
            title: "Organic Traffic",
            number: "+46%",
            description: "Growth",
            isHighlighted: true,
          },
          {
            title: "Page 1 Rankings",
            number: "24+",
            description: "Luxury Housing Keywords",
          },
          {
            title: "Property Enquiries",
            number: "+32%",
            description: "Qualified Growth",
          },
          {
            title: "Search Impressions",
            number: "+44%",
            description: "Increase",
          },
        ]}
      />
      <CommonDivider />

      <CsStepCards
        title="Strategic Approach"
        description="The SEO strategy focused on aligning luxury buyer intent, technical stability, and project-level keyword precision before scaling organic visibility."
        cards={[
          {
            number: "1",
            title: "Intent Refinement",
            content:
              "Updated Metadata, Page Hierarchy, And Headings Aligned With Premium Housing And Luxury Property Search Behavior.",
          },
          {
            number: "2",
            title: "Structural Optimization",
            content:
              "Improved Internal Linking Architecture, On-Page Structure, And Authority Flow Across Project And Location Pages.",
          },
          {
            number: "3",
            title: "Technical Enhancement",
            content:
              "Resolved Technical SEO And Performance Issues Impacting Crawl Efficiency, Page Experience, And Ranking Consistency.",
          },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Implementation Highlights"
        points={[
          "Optimized meta titles and descriptions using high-intent luxury housing keywords",
          "Refined on-page structure across project and location-specific pages",
          "Rebuilt internal linking hierarchy to strengthen topical authority flow",
          "Implemented technical SEO fixes for crawl and indexing improvements",
          "Improved page speed performance and Core Web Vitals alignment",
          "Enhanced content targeting for premium housing searches",
          "Conducted continuous monitoring of keyword rankings and visibility performance",
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
              "A Structured SEO Framework Was Implemented To Strengthen Luxury Housing Discoverability, Improve Technical SEO Stability, And Increase Qualified Property Enquiries.",
            points: [
              "Focused On High-Intent Luxury Property Search Visibility",
              "Improved Crawlability And Technical Ranking Stability",
              "Strengthened Authority Flow Across Project Pages",
              "Aligned SEO Strategy With Premium Buyer Acquisition Goals",
            ],
          },
          {
            number: "02",
            title: "Content Planning",
            description:
              "Content Was Structured Around Luxury Housing Intent, Premium Property Searches, And Buyer-Focused Discovery Journeys.",
            points: [
              "Project Pages Targeting Luxury Housing Searches",
              "Location-Focused Content Supporting Premium Property Visibility",
              "Buyer-Intent Optimization Aligned With Enquiry Generation",
              "Coverage Aligned From Search Discovery To Property Consultation",
            ],
          },
          {
            number: "03",
            title: "Distribution & Attribution (What Worked)",
            description:
              "Different SEO Layers Contributed To Stronger Visibility, Engagement, And Enquiry Performance.",
            points: [
              "Project Pages Improved Premium Housing Discoverability",
              "Technical Optimization Strengthened Crawl And Ranking Consistency",
              "Internal Linking Improved Authority Distribution Across Property Clusters",
              "Buyer-Focused Page Structures Improved Enquiry Engagement",
            ],
          },
          {
            number: "04",
            title: "Best Practices Implemented",
            description:
              "Structured Optimization Ensured Scalable Ranking Growth And Stronger Organic Search Performance.",
            points: [
              "Technical SEO Architecture For Crawl Efficiency",
              "Internal Linking Between Project And Location Clusters",
              "Focus On Luxury Housing Keyword Targeting",
              "Page Speed Optimization For Improved User Experience",
              "Continuous Monitoring Of Rankings And Visibility Trends",
            ],
          },
          {
            number: "05",
            title: "Governance & Growth",
            description:
              "Performance Was Maintained Through Ongoing SEO Monitoring, Technical Optimization, And Content Refinement.",
            points: [
              "Regular SEO Audits For Technical Consistency",
              "Keyword Tracking To Guide Visibility Expansion",
              "Crawl Monitoring For Performance Stability",
              "Ongoing Optimization For Sustained Organic Growth",
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
                  "Low Rankings For Competitive Luxury Housing Keywords",
              },
              {
                label: "Resolution",
                value:
                  "Refined Project Page Structure And Keyword Alignment Around Premium Buyer Intent",
              },
              {
                label: "Result",
                value:
                  "24+ Luxury Housing Keywords Secured On Page 1",
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
                  "Technical Performance Issues Impacted Crawlability And Discoverability",
              },
              {
                label: "Resolution",
                value:
                  "Implemented Targeted Technical SEO Fixes And Performance Optimization Improvements",
              },
              {
                label: "Result",
                value:
                  "38% Improvement In Technical Performance Metrics",
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
                  "Organic Traffic Was Not Converting Efficiently Into Qualified Property Enquiries",
              },
              {
                label: "Resolution",
                value:
                  "Strengthened CTA Placement, User Flow, And Enquiry Pathways Across Project Pages",
              },
              {
                label: "Result",
                value:
                  "32% Increase In Qualified Property Enquiries",
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
            label: "ORGANIC TRAFFIC",
            oldValue: "0%",
            newValue: "46%",
            badges: ["+46% growth", "stronger luxury visibility"],
          },
          {
            label: "PROPERTY ENQUIRIES",
            oldValue: "0%",
            newValue: "32%",
            badges: ["+32% growth", "improved buyer engagement"],
          },
        ]}
        highlights={[
          "Improved discoverability for premium housing searches",
          "Stronger enquiry generation from luxury project pages",
        ]}
        details={[
          {
            content:
              "Luxury housing SEO refinement and technical optimization significantly improved premium property visibility, search engagement, and qualified enquiry generation.",
            fullWidth: true,
          },
        ]}
      />
      <CsResults
        title="Results and Business Impact"
        results={[
          { value: "46%", label: "Increase In Organic Traffic" },
          {
            value: "24+",
            label: "Luxury Housing Keywords Ranked On Page 1",
          },
          {
            value: "32%",
            label: "Increase In Qualified Property Enquiries",
          },
          { value: "44%", label: "Increase In Search Impressions" },
          {
            value: "27%",
            label: "Improvement In Average Session Duration",
          },
          { value: "21%", label: "Reduction In Bounce Rate" },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Why This Worked"
        description="Performance improved because luxury buyer intent was aligned directly with optimized project pages supported by strong technical SEO foundations."
        points={[
          "Project pages matched high-intent premium housing searches",
          "Technical SEO improvements strengthened crawl and ranking stability",
          "Internal linking improved authority flow across luxury property pages",
          "Conversion pathways optimized engagement for premium buyer journeys",
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
  title:"Strengthening Luxury Housing Visibility in Search",
  description:"Precision-led SEO improvements strengthened premium housing discoverability, improved keyword rankings, and increased qualified property enquiries.",
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