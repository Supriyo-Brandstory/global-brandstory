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
        heading={"Securing Top Rankings for <br/>Interior Design Searches"}
        description={
          "An intent-driven SEO framework improved visibility for high-value apartment design searches, helping the brand secure Top 3 rankings across two highly competitive metro markets."
        }
        meta={[
          { label: "Industry", value: "Interior Design" },
          {
            label: "Market / Geography",
            value: "Bangalore & Hyderabad – India",
          },
          { label: "Business Model", value: "B2C – Service-Based" },
          { label: "Services Delivered", value: "SEO" },
        ]}
        stats={[
          { value: "58.9%", label: "Increase in Organic Traffic" },
          { value: "53%", label: "Growth in Ranking Keywords" },
          { value: "Top 3", label: "Positions for 1BHK & 3BHK Searches" },
        ]}
      />
      <CommonDivider />

      <CsChallenge
        title="Business Challenge"
        paragraphs={[
          "The interior design brand operated in highly competitive metro markets where established firms dominated high-intent apartment design searches such as “1BHK interior design” and “3BHK interior designers.”",
          "Visibility for commercially valuable residential design queries remained limited, reducing opportunities for qualified consultation enquiries.",
          "Additionally, the website lacked structured topical authority around apartment-type searches and localized search intent, weakening discoverability across Bangalore and Hyderabad markets.",
        ]}
      />
      <CommonDivider />

      <CsObjectives
        title="Objectives and Success Metrics"
        description="The primary objective was to capture high-intent apartment design searches and convert organic visibility into qualified interior design consultations."
        points={[
          "Improve rankings for 1BHK, 2BHK, and 3BHK interior design keywords",
          "Increase organic traffic across Bangalore and Hyderabad markets",
          "Strengthen local SEO signals and topical authority",
          "Improve qualified consultation enquiries from organic search",
        ]}
        stats={[
          {
            title: "Organic Traffic",
            number: "+58.9%",
            description: "Growth",
            isHighlighted: true,
          },
          {
            title: "Keyword Rankings",
            number: "+53%",
            description: "Growth",
          },
          {
            title: "Top Rankings",
            number: "Top 3",
            description: "1BHK & 3BHK Searches",
          },
          {
            title: "Traffic Value",
            number: "+14%",
            description: "Increase",
          },
        ]}
      />
      <CommonDivider />

      <CsStepCards
        title="Strategic Approach"
        description="The SEO strategy focused on aligning apartment-type search demand, localized intent signals, and residential design authority to strengthen organic visibility."
        cards={[
          {
            number: "1",
            title: "Intent Mapping",
            content:
              "Structured Landing Pages Around Apartment-Size Searches And City-Specific Interior Design Queries Aligned With High-Intent Residential Demand.",
          },
          {
            number: "2",
            title: "Authority Building",
            content:
              "Developed Content Clusters Around Residential Interior Themes, Apartment Layouts, Design Styles, And Home Transformation Topics.",
          },
          {
            number: "3",
            title: "Local Optimization",
            content:
              "Strengthened Geo-Targeted SEO Signals And Local Discoverability Across Bangalore And Hyderabad Markets To Improve Competitive Search Visibility.",
          },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Implementation Highlights"
        points={[
          "Built intent-based keyword architecture across apartment categories",
          "Optimized service and location pages for apartment-focused searches",
          "Implemented technical SEO improvements for crawlability and performance stability",
          "Developed content targeting apartment-size and interior style queries",
          "Strengthened internal linking across topical residential design clusters",
          "Improved local SEO signals across Bangalore and Hyderabad markets",
          "Implemented continuous monitoring for rankings, traffic, and visibility trends",
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
              "A Structured SEO Framework Was Implemented To Improve Apartment-Design Discoverability, Strengthen Local Rankings, And Increase Qualified Consultation Enquiries.",
            points: [
              "Focused On Apartment-Intent Keyword Visibility",
              "Improved Topical Authority Across Residential Searches",
              "Strengthened Local SEO Signals Across Metro Markets",
              "Aligned SEO Strategy With Consultation-Focused Acquisition Goals",
            ],
          },
          {
            number: "02",
            title: "Content Planning",
            description:
              "Content Was Structured Around Apartment Design Intent, Residential Inspiration, And City-Level Search Relevance Across The Customer Journey.",
            points: [
              "Apartment-Focused Landing Pages Targeting Residential Searches",
              "Content Clusters Supporting Design Inspiration And Discovery",
              "Residential Design Themes Aligned With Buyer Intent",
              "Coverage Aligned From Search Discovery To Consultation Enquiry",
            ],
          },
          {
            number: "03",
            title: "Distribution & Attribution (What Worked)",
            description:
              "Different SEO Content Layers Contributed To Stronger Rankings, Visibility, And Engagement Performance.",
            points: [
              "Apartment-Type Pages Improved High-Intent Search Visibility",
              "Local SEO Strengthened Geographic Discoverability",
              "Content Clusters Improved Topical Authority And Engagement",
              "Internal Linking Improved Crawlability And Authority Flow",
            ],
          },
          {
            number: "04",
            title: "Best Practices Implemented",
            description:
              "Structured Optimization Ensured Scalable Ranking Growth And Stronger Local Search Performance.",
            points: [
              "Geo-Targeted SEO Architecture For Metro Market Visibility",
              "Internal Linking Between Apartment And Service Clusters",
              "Focus On Apartment-Intent Keyword Targeting",
              "Technical Optimization For Crawl And Performance Stability",
              "Continuous Monitoring Of Rankings And Traffic Value Growth",
            ],
          },
          {
            number: "05",
            title: "Governance & Growth",
            description:
              "Performance Was Maintained Through Continuous SEO Monitoring, Local Optimization, And Content Expansion Strategies.",
            points: [
              "Regular SEO Audits For Technical Consistency",
              "Keyword Tracking To Guide Content Scaling",
              "Local Ranking Analysis For Optimization Prioritization",
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
                  "Low Rankings For High-Intent Apartment Design Keywords",
              },
              {
                label: "Resolution",
                value:
                  "Developed Dedicated Landing Pages Targeting 1BHK, 2BHK, And 3BHK Interior Design Searches",
              },
              {
                label: "Result",
                value:
                  "Secured Top 3 Rankings For Priority Apartment-Related Queries",
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
                  "Heavy Dependency On Paid Traffic For Lead Generation",
              },
              {
                label: "Resolution",
                value:
                  "Strengthened Organic Visibility And Improved Traffic Value Through Structured SEO Optimization",
              },
              {
                label: "Result",
                value: "₹1.45L+ Annual Paid Media Savings Achieved",
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
                  "Limited Brand Exposure Across Highly Competitive Metro Markets",
              },
              {
                label: "Resolution",
                value:
                  "Implemented Content-Led Authority Building Combined With Localized SEO Optimization",
              },
              {
                label: "Result",
                value:
                  "Brand Visibility Expanded Through Inclusion In Google AI Overview",
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
            newValue: "58.9%",
            badges: ["+58.9% growth", "higher consultation visibility"],
          },
          {
            label: "KEYWORD RANKINGS",
            oldValue: "0%",
            newValue: "53%",
            badges: ["+53% growth", "stronger apartment search rankings"],
          },
        ]}
        highlights={[
          "Improved apartment-design discoverability across metro markets",
          "Reduced long-term dependency on paid acquisition channels",
        ]}
        details={[
          {
            content:
              "Apartment-focused SEO optimization and localized authority building significantly improved rankings, visibility, and consultation-focused organic acquisition.",
            fullWidth: true,
          },
        ]}
      />
      <CsResults
        title="Results and Business Impact"
        results={[
          { value: "58.9%", label: "Increase In Organic Traffic" },
          { value: "53%", label: "Growth In Ranking Keywords" },
          {
            value: "Top 3",
            label: "Positions For 1BHK & 3BHK Searches",
          },
          { value: "14%", label: "Increase In Organic Traffic Value" },
          { value: "₹1.45L+", label: "Annual Paid Media Savings" },
          { value: "Featured in", label: "Google AI Overview" },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Why This Worked"
        description="Performance improved because apartment-specific search intent was aligned directly with optimized landing pages supported by strong local SEO signals."
        points={[
          "Apartment-size searches mapped to dedicated content clusters",
          "Local SEO strengthened discoverability across metro markets",
          "Topical authority improved rankings for residential design queries",
          "Internal linking improved authority distribution across apartment pages",
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
  title:"Securing Top Rankings for Interior Design Searches",
  description:"Intent-driven SEO optimization improved apartment design search visibility and secured Top 3 rankings across competitive metro markets."
}