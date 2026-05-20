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
        heading={"Doubling Organic Visibility for a <br/>Gold Buying Brand"}
        description={
          "A geo-clustered SEO strategy aligned with high-intent gold resale queries significantly improved visibility across South India and drove consistent walk-in enquiries."
        }
        meta={[
          { label: "Industry", value: "Gold Buying" },
          {
            label: "Market / Geography",
            value: "South India (Karnataka, Kerala, Andhra Pradesh, Telangana)",
          },
          { label: "Business Model", value: "B2C" },
          { label: "Services Delivered", value: "SEO" },
        ]}
        stats={[
          { value: "104%", label: "Increase in Organic Traffic" },
          { value: "113%", label: "Growth in Keyword Rankings" },
          { value: "23%", label: "Increase in Organic Traffic Value" },
        ]}
      />
      <CommonDivider />

      <CsChallenge
        title="Business Challenge"
        paragraphs={[
          "The brand operated in a highly competitive gold resale market where search demand is dominated by strong regional players with established local SEO presence.",
          "Visibility across high-intent queries such as “gold buyers near me,” city-based gold buyers, and valuation-related searches was limited, leading to missed opportunities in capturing transactional traffic.",
          "Additionally, the lack of structured city-level landing pages and weak internal linking architecture restricted search engine discoverability and ranking potential across key South Indian markets.",
        ]}
      />
      <CommonDivider />

      <CsObjectives
        title="Objectives and Success Metrics"
        description="The primary objective was to build a scalable SEO system that captures high-intent local search demand and converts it into qualified walk-in enquiries."
        points={[
          "Expand keyword rankings across South Indian city clusters",
          "Improve organic visibility for high-intent resale queries",
          "Strengthen topical authority across gold buying and valuation queries",
          "Increase traffic quality and commercial intent value",
        ]}
        stats={[
          {
            title: "Traffic Growth",
            number: "+104%",
            description: "Organic Increase",
            isHighlighted: true,
          },
          {
            title: "Keyword Expansion",
            number: "+113%",
            description: "Ranking Growth",
          },
          {
            title: "Traffic Value",
            number: "+23%",
            description: "Increase",
          },
          {
            title: "Local Coverage",
            number: "",
            description: "Presence Across Key South Indian Cities",
          },
        ]}
      />
      <CommonDivider />

      <CsStepCards
        title="Strategic Approach"
        description="The SEO strategy was built around geo-intent clustering combined with commercial keyword targeting to capture high-value search demand."
        cards={[
          {
            number: "1",
            title: "City-Level Clustering",
            content:
              "Developed Dedicated Landing Pages For Each Target City, Enabling Strong Alignment With Local Search Queries And Improving Ranking Potential Across Multiple Geographic Markets.",
          },
          {
            number: "2",
            title: "Commercial Keyword Mapping",
            content:
              "Focused On High-Intent Transactional Keywords Such As Gold Buyers, Gold Valuation, Gold Rate Queries, And Resale Intent Searches To Attract Users With Strong Conversion Potential.",
          },
          {
            number: "3",
            title: "Authority Consolidation",
            content:
              "Established A Strong Internal Linking Structure Between City Pages, Service Pages, And Informational Content To Improve Crawlability, Distribute Authority, And Strengthen Topical Relevance.",
          },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Implementation Highlights"
        points={[
          "Built a structured network of city-specific landing pages targeting local gold buying queries",
          "Optimized on-page elements including titles, headings, content, and schema for commercial keywords",
          "Resolved technical SEO issues impacting crawlability and indexation",
          "Strengthened internal linking across regional clusters to improve page authority",
          "Developed supporting blog content targeting valuation, pricing, and informational queries",
          "Implemented continuous tracking of rankings, impressions, and traffic value metrics",
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
              "A Scalable SEO System Was Built To Capture High-Intent Demand And Improve Regional Visibility.",
            points: [
              "Focused On Geo-Targeted Search Visibility",
              "Captured High-Commercial Intent Keywords",
              "Strengthened Internal Authority Across Pages",
              "Aligned SEO Efforts With Business Impact",
            ],
          },
          {
            number: "02",
            title: "Content Planning",
            description:
              "Content Was Structured To Cover User Intent Across The Full Search Journey.",
            points: [
              'City Pages Targeting "Gold Buyers Near Me" Queries',
              "Commercial Content Around Valuation And Pricing Intent",
              "Blog Content Supporting Awareness And Decision-Making",
              "Ensured Coverage From Discovery To Conversion",
            ],
          },
          {
            number: "03",
            title: "Distribution & Attribution (What Worked)",
            description:
              "Different Content Layers Contributed To Traffic Growth And Ranking Improvements.",
            points: [
              "City Pages Drove The Majority Of High-Intent Traffic",
              "Commercial Keywords Improved Transactional Visibility",
              "Blog Content Supported Engagement And Authority",
              "Internal Linking Improved Ranking Strength Across Clusters",
            ],
          },
          {
            number: "04",
            title: "Best Practices Implemented",
            description:
              "Structured Execution Ensured Consistent Growth And Performance.",
            points: [
              "Geo-Clustered SEO Architecture For Scalability",
              "Strong Internal Linking Between Key Pages",
              "Focus On Commercial-Intent Keyword Targeting",
              "Technical Improvements For Crawl And Index Efficiency",
              "Continuous Tracking Of Rankings And Traffic Trends",
            ],
          },
          {
            number: "05",
            title: "Governance & Growth",
            description:
              "Performance Was Maintained Through Continuous Monitoring And Optimization.",
            points: [
              "Regular SEO Audits To Maintain Technical Stability",
              "Keyword Tracking To Guide Content Expansion",
              "City-Level Performance Analysis For Prioritization",
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
                value: "Low Rankings For High-Intent Local Queries",
              },
              {
                label: "Resolution",
                value: "Built Geo-Focused City Landing Page Architecture",
              },
              { label: "Result", value: "113% Growth In Keyword Rankings" },
            ],
          },
          {
            number: "2",
            title2: "Outcome",
            sections: [
              {
                label: "Challenge",
                value: "Limited Organic Visibility In Competitive Markets",
              },
              {
                label: "Resolution",
                value:
                  "Strengthened On-Page Optimization And Technical SEO Foundation",
              },
              { label: "Result", value: "104% Increase In Organic Traffic" },
            ],
          },
          {
            number: "3",
            title2: "Outcome",
            sections: [
              {
                label: "Challenge",
                value: "Need To Attract Higher-Value Traffic",
              },
              {
                label: "Resolution",
                value: "Targeted Commercial-Intent Valuation Keywords",
              },
              { label: "Result", value: "23% Increase In Traffic Value" },
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
            label: "CTR IMPROVED",
            oldValue: "2.09%",
            newValue: "4.61%",
            badges: ["+121% growth", "consistent click volume"],
          },
          {
            label: "ENGAGEMENT INCREASED",
            oldValue: "5.98%",
            newValue: "7.55%",
            badges: ["+26% growth", "consistent click volume"],
          },
        ]}
        highlights={[
          "Improved reach and visibility across platforms",
          "Stronger audience interaction and response consistency",
        ]}
        details={[
          {
            content:
              "Later-phase content consistently delivered higher engagement and improved audience response compared to the initial phase.",
            fullWidth: true,
          },
        ]}
      />
      <CsResults
        title="Results and Business Impact"
        results={[
          { value: "104%", label: "Increase In Organic Traffic" },
          { value: "113%", label: "Growth In Keyword Rankings" },
          { value: "23%", label: "Increase In Organic Traffic Value" },
          { value: "38+", label: "City-Level Keywords Ranking On Page 1" },
          { value: "41%", label: "Growth In Search Impressions" },
          { value: "Consistent", label: "Increase In Walk-In Enquiries" },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Why This Worked"
        description="The growth was driven by aligning SEO strategy with real user intent and geographic search behavior."
        points={[
          "City-level pages directly captured transactional local queries",
          "Strong internal linking improved authority distribution across pages",
          "Commercial keyword targeting enhanced traffic quality and conversion potential",
          "Technical stability ensured consistent indexing and ranking performance",
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
  title:"Doubling Organic Visibility for a Gold Buying Brand",
  description:"Geo-focused SEO optimization strengthened visibility for high-intent gold resale searches and increased qualified walk-in inquiries across South India.",
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