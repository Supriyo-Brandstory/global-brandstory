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
        heading={"SEO Drove 50% Organic Growth for a <br/>Laboratory Furniture Brand"}
        description={
          "A focused SEO framework improved visibility across high-value laboratory equipment searches, strengthening qualified B2B traffic and expanding discoverability within the research infrastructure market."
        }
        meta={[
          { label: "Industry", value: "Laboratory Furniture" },
          {
            label: "Market / Geography",
            value: "India",
          },
          { label: "Business Model", value: "B2B" },
          { label: "Services Delivered", value: "SEO" },
        ]}
        stats={[
          { value: "50%", label: "Increase in Organic Sessions" },
          { value: "70%", label: "Increase in Search Impressions" },
          { value: "40+", label: "New Keywords Ranked" },
        ]}
      />
      <CommonDivider />

      <CsChallenge
        title="Business Challenge"
        paragraphs={[
          "The laboratory furniture manufacturer offered strong technical capabilities and product expertise but lacked visibility across high-value laboratory and research infrastructure searches.",
          "Core product and category pages were under-optimized, limiting discoverability within competitive B2B search environments.",
          "Additionally, the website lacked structured content coverage for informational and industry-specific laboratory queries, reducing topical authority and limiting search visibility across research-driven searches.",
        ]}
      />
      <CommonDivider />

      <CsObjectives
        title="Objectives and Success Metrics"
        description="The primary objective was to position organic search as a scalable and consistent B2B demand generation channel for laboratory furniture and infrastructure solutions."
        points={[
          "Improve rankings for high-intent laboratory furniture keywords",
          "Increase organic traffic during the optimization cycle",
          "Expand keyword coverage across laboratory and research searches",
          "Improve organic click-through performance",
        ]}
        stats={[
          {
            title: "Organic Sessions",
            number: "+50%",
            description: "Growth",
            isHighlighted: true,
          },
          {
            title: "Search Impressions",
            number: "+70%",
            description: "Increase",
          },
          {
            title: "Keyword Rankings",
            number: "40+",
            description: "New Keywords Ranked",
          },
          {
            title: "Organic Clicks",
            number: "+42%",
            description: "Increase",
          },
        ]}
      />
      <CommonDivider />

      <CsStepCards
        title="Strategic Approach"
        description="The SEO strategy focused on aligning laboratory buyer intent, technical product relevance, and industry search demand before scaling organic visibility."
        cards={[
          {
            number: "1",
            title: "Market Benchmarking",
            content:
              "Conducted Competitor Analysis And Opportunity Mapping Across Laboratory Equipment And Infrastructure-Related Searches To Identify Ranking Gaps And Growth Opportunities.",
          },
          {
            number: "2",
            title: "Product-Led Optimization",
            content:
              "Rebuilt Core Product And Category Pages Around Technical Specifications, Buyer Intent, And Industry-Focused Keyword Relevance.",
          },
          {
            number: "3",
            title: "Authority Expansion",
            content:
              "Developed Informational Content Targeting Laboratory Setup, Compliance, Safety, And Research-Related Topics To Strengthen Topical Authority.",
          },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Implementation Highlights"
        points={[
          "Conducted a comprehensive SEO audit with competitor benchmarking",
          "Performed keyword mapping for laboratory furniture and infrastructure searches",
          "Optimized category, product, and solution pages for search relevance",
          "Developed informational content addressing laboratory and research queries",
          "Improved internal linking to strengthen topical authority clusters",
          "Optimized metadata, headings, and technical page structure",
          "Implemented Search Console monitoring and CTR optimization tracking",
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
              "A Structured SEO Framework Was Implemented To Improve B2B Search Visibility, Strengthen Technical Discoverability, And Increase Qualified Laboratory Infrastructure Traffic.",
            points: [
              "Focused On Laboratory And Research-Intent Keyword Visibility",
              "Improved Technical Relevance Across Product Pages",
              "Strengthened Internal Authority Across Solution Categories",
              "Aligned SEO Efforts With B2B Acquisition Objectives",
            ],
          },
          {
            number: "02",
            title: "Content Planning",
            description:
              "Content Was Structured Around Laboratory Buyer Intent, Technical Search Behavior, And Industry-Specific Informational Relevance.",
            points: [
              "Product Pages Targeting Laboratory Infrastructure Searches",
              "Informational Content Supporting Research And Compliance Queries",
              "Technical Content Aligned With Buyer Evaluation Stages",
              "Coverage Aligned From Discovery To Enquiry Intent",
            ],
          },
          {
            number: "03",
            title: "Distribution & Attribution (What Worked)",
            description:
              "Different SEO Content Layers Contributed To Stronger Rankings, Visibility, And Engagement Performance.",
            points: [
              "Product Pages Improved High-Intent Search Discoverability",
              "Technical Content Strengthened Topical Authority",
              "Internal Linking Improved Crawlability And Authority Distribution",
              "Search Optimization Improved Organic Click Engagement",
            ],
          },
          {
            number: "04",
            title: "Best Practices Implemented",
            description:
              "Structured Optimization Ensured Scalable Ranking Growth And Stronger B2B Search Performance.",
            points: [
              "Technical SEO Architecture For Crawl Efficiency",
              "Internal Linking Between Product And Informational Clusters",
              "Focus On Industry-Intent Keyword Targeting",
              "Metadata Optimization For Technical Search Relevance",
              "Continuous Monitoring Of Rankings And Organic CTR Performance",
            ],
          },
          {
            number: "05",
            title: "Governance & Growth",
            description:
              "Performance Was Maintained Through Ongoing Optimization, Keyword Monitoring, And Technical SEO Refinement.",
            points: [
              "Regular SEO Audits For Technical Consistency",
              "Keyword Tracking To Guide Content Expansion",
              "Search Visibility Analysis For Optimization Prioritization",
              "Ongoing Improvements For Sustained Organic Growth",
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
                  "Low Visibility For High-Value Laboratory And Infrastructure-Related Keywords",
              },
              {
                label: "Resolution",
                value:
                  "Implemented Structured Keyword Mapping And Intent-Focused Optimization Across Product And Category Pages",
              },
              {
                label: "Result",
                value: "40+ Laboratory-Related Keywords Achieved Rankings",
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
                  "Under-Optimized Product Pages Limited Search Relevance And Engagement",
              },
              {
                label: "Resolution",
                value:
                  "Rebuilt Metadata, Headings, And Content Structure Around Technical Buyer Intent And Search Clarity",
              },
              {
                label: "Result",
                value:
                  "Significant Improvement In Organic Clicks And Engagement",
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
                  "Limited Topical Authority Across Laboratory And Research-Focused Searches",
              },
              {
                label: "Resolution",
                value:
                  "Developed Informational And Technical Content Clusters Aligned With Research, Compliance, And Laboratory Setup Topics",
              },
              {
                label: "Result",
                value: "70% Growth In Search Impressions",
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
            label: "ORGANIC SESSIONS",
            oldValue: "0%",
            newValue: "50%",
            badges: ["+50% growth", "stronger B2B visibility"],
          },
          {
            label: "SEARCH IMPRESSIONS",
            oldValue: "0%",
            newValue: "70%",
            badges: ["+70% growth", "expanded industry reach"],
          },
        ]}
        highlights={[
          "Improved discoverability across laboratory infrastructure searches",
          "Stronger topical authority and B2B keyword visibility",
        ]}
        details={[
          {
            content:
              "Technical SEO optimization and industry-focused content development significantly improved laboratory-related search visibility and qualified B2B engagement.",
            fullWidth: true,
          },
        ]}
      />
      <CsResults
        title="Results and Business Impact"
        results={[
          { value: "50%", label: "Increase In Organic Sessions" },
          { value: "40+", label: "New Laboratory Keyword Rankings" },
          { value: "70%", label: "Increase In Search Impressions" },
          { value: "42%", label: "Increase In Organic Clicks" },
          {
            value: "Expanded",
            label: "Visibility Across Research Queries",
          },
          {
            value: "Improved",
            label: "Product Page Discoverability",
          },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Why This Worked"
        description="Performance improved because the SEO strategy aligned laboratory buyer intent with technical product relevance and scalable topical authority development."
        points={[
          "Technical product pages aligned with high-intent B2B searches",
          "Competitor keyword gaps created new ranking opportunities",
          "Informational content strengthened topical authority signals",
          "Internal linking improved authority flow across product clusters",
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
  title:"Scaling Organic Growth for a Laboratory Furniture Brand",
  description:"Technical and content-led SEO optimization improved laboratory search visibility, strengthened B2B discoverability, and increased qualified organic traffic."
}