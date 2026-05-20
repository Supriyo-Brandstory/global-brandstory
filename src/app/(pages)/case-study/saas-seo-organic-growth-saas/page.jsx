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
        heading={"Scaling High-Intent Organic Growth for a <br/>US SaaS Platform"}
        description={
          "A cluster-led SEO framework improved high-intent keyword visibility, stabilized rankings during shifting SERP behavior, and strengthened AI-driven discoverability across commercial SaaS searches."
        }
        meta={[
          { label: "Industry", value: "SaaS" },
          {
            label: "Market / Geography",
            value: "United States",
          },
          { label: "Business Model", value: "B2B" },
          { label: "Services Delivered", value: "SEO" },
        ]}
        stats={[
          { value: "49%", label: "Increase in Qualified Organic Traffic" },
          { value: "34+", label: "Primary & Secondary Keywords on Page 1" },
          { value: "41%", label: "Improvement in Page Speed Performance" },
        ]}
      />
      <CommonDivider />

      <CsChallenge
        title="Business Challenge"
        paragraphs={[
          "The SaaS platform experienced declining keyword visibility across core commercial search terms while frequent SERP intent shifts reduced ranking consistency and content stability.",
          "Primary product and solution pages were losing visibility to competitors adapting faster to evolving search behavior and AI-driven search formats.",
          "Additionally, technical bottlenecks affecting page speed, crawlability, and internal authority flow limited discoverability across high-intent product searches.",
        ]}
      />
      <CommonDivider />

      <CsObjectives
        title="Objectives and Success Metrics"
        description="The primary objective was to regain competitive rankings for commercial SaaS searches while improving technical performance and AI-driven search visibility."
        points={[
          "Improve rankings for primary commercial SaaS keywords",
          "Increase qualified organic traffic from high-intent searches",
          "Stabilize rankings during evolving SERP intent shifts",
          "Improve page speed and crawl efficiency",
        ]}
        stats={[
          {
            title: "Organic Traffic",
            number: "+49%",
            description: "Qualified Growth",
            isHighlighted: true,
          },
          {
            title: "Page 1 Rankings",
            number: "34+",
            description: "Primary & Secondary Keywords",
          },
          {
            title: "Page Speed",
            number: "+41%",
            description: "Performance Improvement",
          },
          {
            title: "Demo Requests",
            number: "+27%",
            description: "Organic Growth",
          },
        ]}
      />
      <CommonDivider />

      <CsStepCards
        title="Strategic Approach"
        description="The SEO strategy focused on strengthening topical authority, improving semantic relevance, and stabilizing technical performance before scaling organic acquisition."
        cards={[
          {
            number: "1",
            title: "Cluster Architecture",
            content:
              "Developed Structured Content Clusters Targeting High-Intent SaaS Queries Aligned With Commercial Product Searches And User Intent.",
          },
          {
            number: "2",
            title: "Authority Linking",
            content:
              "Strengthened Internal Linking Architecture To Improve Semantic Authority Flow And Reinforce Product-Level Relevance Across Key Landing Pages.",
          },
          {
            number: "3",
            title: "Technical Stabilization",
            content:
              "Resolved Crawl Inefficiencies, Page Speed Bottlenecks, And Technical SEO Issues Impacting Discoverability And Ranking Stability.",
          },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Implementation Highlights"
        points={[
          "Built structured content clusters around primary SaaS product themes",
          "Expanded supporting content aligned with high-intent commercial searches",
          "Reworked internal linking to strengthen semantic authority distribution",
          "Optimized page speed through code refinement and performance improvements",
          "Resolved crawlability and indexation inefficiencies affecting visibility",
          "Monitored SERP behavior shifts and adjusted content alignment accordingly",
          "Implemented continuous tracking for rankings, impressions, and AI visibility signals",
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
              "A Structured SEO Framework Was Implemented To Strengthen Commercial Search Visibility, Improve Technical Performance, And Increase Qualified Organic Acquisition.",
            points: [
              "Focused On High-Intent SaaS Keyword Visibility",
              "Improved Semantic Authority Across Product Clusters",
              "Strengthened Crawlability And Technical Performance",
              "Aligned SEO Strategy With Demo-Driven Acquisition Goals",
            ],
          },
          {
            number: "02",
            title: "Content Planning",
            description:
              "Content Was Structured Around Commercial SaaS Intent, Product Discovery, And Solution-Focused Search Behavior Across The Buyer Journey.",
            points: [
              "Product Pages Targeting Commercial SaaS Searches",
              "Supporting Articles Strengthening Topical Authority",
              "Commercial-Intent Content Aligned With Evaluation Stages",
              "Coverage Aligned From Discovery To Demo Request Intent",
            ],
          },
          {
            number: "03",
            title: "Distribution & Attribution (What Worked)",
            description:
              "Different SEO Layers Contributed To Stronger Rankings, Visibility, And Acquisition Performance.",
            points: [
              "Content Clusters Improved Semantic Authority And Discoverability",
              "Internal Linking Strengthened Authority Flow Across Product Pages",
              "Technical Optimization Improved Crawl Consistency And Ranking Stability",
              "Search-Intent Alignment Improved Qualified Traffic Acquisition",
            ],
          },
          {
            number: "04",
            title: "Best Practices Implemented",
            description:
              "Structured Optimization Ensured Scalable Visibility Growth And Long-Term Search Stability.",
            points: [
              "Cluster-Based SEO Architecture For Topical Scalability",
              "Internal Linking Across Commercial And Informational Pages",
              "Focus On High-Intent SaaS Keyword Targeting",
              "Technical Optimization For Crawl And Page Speed Efficiency",
              "Continuous Monitoring Of SERP Behavior And Ranking Shifts",
            ],
          },
          {
            number: "05",
            title: "Governance & Growth",
            description:
              "Performance Was Maintained Through Continuous SEO Monitoring, Technical Refinement, And Search Behavior Analysis.",
            points: [
              "Regular Technical Audits For Crawl And Index Stability",
              "Keyword Tracking To Guide Cluster Expansion",
              "SERP Monitoring For Intent-Driven Optimization Updates",
              "Ongoing Improvements For Sustained Ranking Growth",
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
                  "Declining Rankings For Primary SaaS And Commercial Product Keywords",
              },
              {
                label: "Resolution",
                value:
                  "Implemented A Cluster-Based Content Strategy Aligned With High-Intent Commercial Search Behavior",
              },
              {
                label: "Result",
                value:
                  "34+ Primary And Secondary Keywords Secured On Page 1",
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
                  "SERP Intent Volatility Affected Ranking Consistency And Content Stability",
              },
              {
                label: "Resolution",
                value:
                  "Continuously Re-Optimized Pages Based On Evolving Search Behavior And Updated SERP Patterns",
              },
              {
                label: "Result",
                value:
                  "Improved Visibility Across High-Intent Commercial Searches",
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
                  "Page Speed Bottlenecks Impacted User Experience, Crawlability, And Search Performance",
              },
              {
                label: "Resolution",
                value:
                  "Optimized Technical Performance Metrics And Refined Page Structure For Stability And Speed",
              },
              {
                label: "Result",
                value: "41% Improvement In Page Speed Performance",
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
            label: "QUALIFIED ORGANIC TRAFFIC",
            oldValue: "0%",
            newValue: "49%",
            badges: ["+49% growth", "stronger SaaS discoverability"],
          },
          {
            label: "PAGE SPEED PERFORMANCE",
            oldValue: "0%",
            newValue: "41%",
            badges: ["+41% improvement", "better crawl efficiency"],
          },
        ]}
        highlights={[
          "Improved visibility across high-intent SaaS searches",
          "Stronger AI-driven discoverability and demo acquisition",
        ]}
        details={[
          {
            content:
              "Cluster-led SEO optimization and technical stabilization significantly improved commercial SaaS rankings, organic acquisition, and AI search visibility.",
            fullWidth: true,
          },
        ]}
      />
      <CsResults
        title="Results and Business Impact"
        results={[
          { value: "49%", label: "Increase In Qualified Organic Traffic" },
          {
            value: "34+",
            label: "Primary & Secondary Keywords On Page 1",
          },
          {
            value: "41%",
            label: "Improvement In Page Speed Performance",
          },
          { value: "53%", label: "Growth In Search Impressions" },
          {
            value: "27%",
            label: "Increase In Demo Requests From Organic",
          },
          {
            value: "Higher",
            label: "Citations In AI Overviews & Generative Responses",
          },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Why This Worked"
        description="Performance improved because the SEO strategy combined topical authority expansion with technical stabilization across a rapidly evolving SaaS search environment."
        points={[
          "Content clusters aligned with commercial SaaS search intent",
          "Internal linking strengthened semantic authority distribution",
          "Technical optimization improved crawl consistency and page performance",
          "Search-intent refinement stabilized rankings amid SERP volatility",
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
  title:"Scaling High-Intent Organic Growth for a SaaS Platform",
  description:"Cluster-led SEO optimization improved commercial keyword visibility, strengthened AI-driven discoverability, and increased qualified organic traffic.",
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