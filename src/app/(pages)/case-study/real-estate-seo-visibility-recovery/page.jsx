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

const page = () => {
  return (
    <div>
      <CsSEOBanner
        heading={"Rebuilding Search Visibility for a <br/>Real Estate Project"}
        description={
          "A technical and intent-led SEO restructuring improved indexation, strengthened property-level rankings, and increased qualified enquiry generation from high-intent homebuyer searches."
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
          { value: "54%", label: "Increase in Organic Traffic" },
          { value: "26+", label: "Primary Keywords Ranked on Page 1" },
          { value: "38%", label: "Increase in Property Enquiries" },
        ]}
      />
      <CommonDivider />

      <CsChallenge
        title="Business Challenge"
        paragraphs={[
          "The real estate project faced low organic visibility due to technical indexing gaps, weak site architecture, and limited optimization for high-intent property searches.",
          "Core project pages were not effectively discoverable across competitive homebuyer queries, reducing exposure within a saturated real estate market.",
          "Additionally, inconsistent internal linking and weak search-intent alignment limited crawlability, keyword rankings, and organic enquiry generation.",
        ]}
      />
      <CommonDivider />

      <CsObjectives
        title="Objectives and Success Metrics"
        description="The primary objective was to improve project-level discoverability and generate qualified property enquiries through structured SEO optimization and buyer-intent search targeting."
        points={[
          "Increase rankings for primary property and location-based keywords",
          "Improve organic traffic acquisition from high-intent searches",
          "Strengthen technical crawlability and indexation health",
          "Improve enquiry conversion from organic visitors",
        ]}
        stats={[
          {
            title: "Organic Traffic",
            number: "+54%",
            description: "Increase",
            isHighlighted: true,
          },
          {
            title: "Page 1 Rankings",
            number: "26+",
            description: "Primary Keywords",
          },
          {
            title: "Property Enquiries",
            number: "+38%",
            description: "Growth",
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
        description="The SEO strategy focused on resolving technical discoverability issues first before scaling property-level visibility through buyer-intent optimization."
        cards={[
          {
            number: "1",
            title: "Indexation Recovery",
            content:
              "Resolved Crawl Barriers, Sitemap Inconsistencies, And Indexing Issues Affecting Search Engine Discoverability And Ranking Performance.",
          },
          {
            number: "2",
            title: "Intent-Driven Structure",
            content:
              "Optimized Landing Pages Around Property-Specific And Location-Focused Search Queries Aligned With Homebuyer Intent.",
          },
          {
            number: "3",
            title: "Conversion Alignment",
            content:
              "Strengthened Internal Linking, Enquiry Pathways, And User Navigation Flow To Improve Engagement And Lead Generation From Organic Traffic.",
          },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Implementation Highlights"
        points={[
          "Built and optimized dedicated project landing pages for property-focused searches",
          "Reworked website architecture to improve crawl efficiency and discoverability",
          "Fixed indexing issues, crawl errors, and technical SEO gaps",
          "Enhanced content targeting for high-intent property and location keywords",
          "Strengthened internal linking between project, location, and service pages",
          "Optimized metadata, headings, and on-page structure for search clarity",
          "Implemented continuous monitoring for rankings, impressions, and indexing health",
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
              "A Structured SEO Framework Was Implemented To Improve Project Discoverability, Strengthen Technical Visibility, And Increase Qualified Property Enquiries.",
            points: [
              "Focused On Buyer-Intent Search Visibility",
              "Improved Crawlability And Indexation Performance",
              "Strengthened Internal Authority Across Project Pages",
              "Aligned SEO Efforts With Property Lead Generation Goals",
            ],
          },
          {
            number: "02",
            title: "Content Planning",
            description:
              "Content Was Structured Around Homebuyer Intent, Location Relevance, And Property-Focused Search Behavior Across The Organic Discovery Journey.",
            points: [
              "Landing Pages Targeting Location And Property Searches",
              "Property-Focused Content Supporting Buyer Decision-Making",
              "Optimized Content For Transactional Real Estate Intent",
              "Coverage Aligned From Discovery To Enquiry Conversion",
            ],
          },
          {
            number: "03",
            title: "Distribution & Attribution (What Worked)",
            description:
              "Different SEO Layers Contributed To Stronger Rankings, Discoverability, And Enquiry Growth.",
            points: [
              "Project Pages Improved High-Intent Property Visibility",
              "Technical SEO Improvements Strengthened Indexation Consistency",
              "Internal Linking Improved Crawlability And Authority Flow",
              "Conversion-Focused Page Structures Improved Enquiry Engagement",
            ],
          },
          {
            number: "04",
            title: "Best Practices Implemented",
            description:
              "Structured Optimization Ensured Sustainable Visibility Growth And Stronger Organic Performance.",
            points: [
              "Technical SEO Architecture For Crawl Efficiency",
              "Internal Linking Between Project And Location Pages",
              "Focus On High-Intent Property Keyword Targeting",
              "On-Page Optimization For Ranking Clarity",
              "Continuous Monitoring Of Rankings And Indexing Trends",
            ],
          },
          {
            number: "05",
            title: "Governance & Growth",
            description:
              "Performance Was Maintained Through Continuous SEO Monitoring, Technical Optimization, And Content Refinement.",
            points: [
              "Regular Technical Audits For Indexing Consistency",
              "Keyword Tracking To Guide Content Expansion",
              "Crawl Monitoring For Technical Stability",
              "Ongoing Optimization For Sustained Ranking Growth",
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
                  "Website Indexing Issues Limited Visibility Across Property-Related Search Queries",
              },
              {
                label: "Resolution",
                value:
                  "Implemented Sitemap Corrections, Crawl Fixes, And Technical SEO Improvements To Strengthen Indexation",
              },
              {
                label: "Result",
                value: "100% Of Priority Pages Successfully Indexed",
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
                  "Weak Rankings For Competitive Property And Location Keywords",
              },
              {
                label: "Resolution",
                value:
                  "Rebuilt Landing Pages Aligned With Buyer-Intent Search Behavior And Transactional Property Queries",
              },
              {
                label: "Result",
                value: "26+ Primary Keywords Secured On Page 1",
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
                  "Organic Traffic Was Not Effectively Converting Into Qualified Property Enquiries",
              },
              {
                label: "Resolution",
                value:
                  "Strengthened CTAs, Enquiry Pathways, And Page Flow To Improve User Engagement And Lead Generation",
              },
              {
                label: "Result",
                value: "38% Increase In Qualified Property Enquiries",
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
            newValue: "54%",
            badges: ["+54% growth", "higher buyer engagement"],
          },
          {
            label: "PROPERTY ENQUIRIES",
            oldValue: "0%",
            newValue: "38%",
            badges: ["+38% growth", "improved lead generation"],
          },
        ]}
        highlights={[
          "Improved discoverability across high-intent property searches",
          "Stronger enquiry generation through conversion-focused optimization",
        ]}
        details={[
          {
            content:
              "Technical SEO restructuring and buyer-intent optimization significantly improved property visibility, indexation performance, and qualified enquiry generation.",
            fullWidth: true,
          },
        ]}
      />
      <CsResults
        title="Results and Business Impact"
        results={[
          { value: "54%", label: "Increase In Organic Traffic" },
          { value: "26+", label: "Page 1 Property Keyword Rankings" },
          { value: "38%", label: "Increase In Property Enquiries" },
          { value: "44%", label: "Increase In Search Impressions" },
          { value: "29%", label: "Improvement In Average Session Duration" },
          { value: "23%", label: "Reduction In Bounce Rate" },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Why This Worked"
        description="Performance improved because technical indexing barriers were resolved before scaling buyer-intent keyword targeting and content visibility."
        points={[
          "Property pages aligned directly with high-intent homebuyer searches",
          "Technical SEO improvements strengthened crawlability and indexation consistency",
          "Internal linking improved authority flow across property and location pages",
          "Conversion-focused page structures improved enquiry generation",
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