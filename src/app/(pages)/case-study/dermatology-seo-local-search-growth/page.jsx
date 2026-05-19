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
        heading={"Turning Local Search Demand into <br/>Dermatology Growth"}
        description={
          "A local search-focused SEO restructuring improved treatment visibility, strengthened ranking performance for aesthetic procedures, and increased appointment-focused organic enquiries."
        }
        meta={[
          { label: "Industry", value: "Healthcare / Aesthetic & Dermatology" },
          {
            label: "Market / Geography",
            value: "India",
          },
          { label: "Business Model", value: "B2C" },
          { label: "Services Delivered", value: "SEO" },
        ]}
        stats={[
          { value: "60+", label: "Keywords Ranked" },
          { value: "25+", label: "Page 1 Rankings" },
          { value: "40%", label: "Increase in Organic Traffic" },
        ]}
      />
      <CommonDivider />

      <CsChallenge
        title="Business Challenge"
        paragraphs={[
          "The dermatology clinic operated in a highly competitive local market dominated by established aesthetic centers with strong digital authority and aggressive search visibility across high-value treatment keywords.",
          "Core dermatology and aesthetic procedure pages lacked structured search optimization, limiting discoverability for treatment-focused queries and reducing visibility across competitive local searches.",
          "SEO was required to strengthen local ranking signals, improve treatment-intent targeting, and build structured landing pages capable of converting organic discovery into appointment enquiries.",
        ]}
      />
      <CommonDivider />

      <CsObjectives
        title="Objectives and Success Metrics"
        description="The primary objective was to improve search visibility for treatment-focused queries while increasing patient appointment enquiries through structured SEO optimization and landing page refinement."
        points={[
          "Increase keyword coverage across dermatology and aesthetic treatments",
          "Secure Page 1 rankings for high-intent local procedures",
          "Improve organic traffic acquisition within the optimization cycle",
          "Strengthen visibility across competitive treatment keywords",
        ]}
        stats={[
          {
            title: "Keyword Rankings",
            number: "60+",
            description: "Total Rankings",
            isHighlighted: true,
          },
          {
            title: "Page 1 Visibility",
            number: "25+",
            description: "Keyword Positions",
          },
          {
            title: "Organic Traffic",
            number: "+40%",
            description: "Increase",
          },
          {
            title: "Search Visibility",
            number: "+70%",
            description: "Growth",
          },
        ]}
      />
      <CommonDivider />

      <CsStepCards
        title="Strategic Approach"
        description="The SEO strategy focused on aligning treatment intent, local search relevance, and conversion-focused content architecture to strengthen visibility and enquiry generation."
        cards={[
          {
            number: "1",
            title: "Local Authority Signals",
            content:
              "Strengthened Geo-Targeted Service Relevance, Local SEO Foundations, And Location-Based Optimization Signals To Improve Treatment Discoverability.",
          },
          {
            number: "2",
            title: "Landing Page Precision",
            content:
              "Developed Dedicated Treatment Landing Pages Aligned With Specific Dermatology And Aesthetic Procedures To Improve Keyword Targeting And Conversion Intent.",
          },
          {
            number: "3",
            title: "Competitive Positioning",
            content:
              "Analyzed Competitor Visibility Gaps And Targeted Underserved Keyword Clusters With High Commercial And Appointment-Focused Search Intent.",
          },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Implementation Highlights"
        points={[
          "Performed local SEO optimization across core treatment and service pages",
          "Created keyword-focused landing pages for aesthetic and dermatology procedures",
          "Conducted competitor keyword gap analysis and opportunity mapping",
          "Optimized metadata, page hierarchy, and structured headings for treatment relevance",
          "Strengthened internal linking between treatment categories and service clusters",
          "Integrated conversion-focused CTAs across service and landing pages",
          "Implemented ongoing tracking for rankings, impressions, and organic engagement metrics",
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
              "A Structured SEO Framework Was Implemented To Strengthen Local Visibility, Improve Treatment-Focused Rankings, And Increase Appointment-Driven Organic Engagement.",
            points: [
              "Focused On Localized Dermatology And Aesthetic Search Visibility",
              "Captured High-Intent Treatment And Procedure Keywords",
              "Improved Internal Authority Across Treatment Pages",
              "Aligned SEO Efforts With Patient Acquisition Goals",
            ],
          },
          {
            number: "02",
            title: "Content Planning",
            description:
              "Content Was Structured Around Treatment Intent, Patient Education, And Local Search Relevance Across The Decision-Making Journey.",
            points: [
              "Procedure Pages Targeting Aesthetic And Dermatology Searches",
              "Educational Content Supporting Patient Awareness And Trust",
              "Treatment-Focused Landing Pages Improving Conversion Intent",
              "Coverage Aligned From Discovery To Consultation Enquiry",
            ],
          },
          {
            number: "03",
            title: "Distribution & Attribution (What Worked)",
            description:
              "Different SEO Content Layers Contributed To Stronger Rankings, Visibility, And Enquiry Performance.",
            points: [
              "Procedure Pages Improved High-Intent Treatment Visibility",
              "Local SEO Optimization Strengthened Geographic Discoverability",
              "Internal Linking Improved Crawlability And Authority Flow",
              "Conversion-Focused CTAs Improved Appointment Engagement",
            ],
          },
          {
            number: "04",
            title: "Best Practices Implemented",
            description:
              "Structured Optimization Ensured Consistent Ranking Growth And Improved Search Performance.",
            points: [
              "Geo-Targeted SEO Architecture For Local Scalability",
              "Internal Linking Between Treatment And Service Pages",
              "Focus On Procedure-Intent Keyword Targeting",
              "Technical Optimization For Crawl And Index Efficiency",
              "Continuous Monitoring Of Rankings And Visibility Trends",
            ],
          },
          {
            number: "05",
            title: "Governance & Growth",
            description:
              "Performance Was Maintained Through Continuous SEO Monitoring, Content Refinement, And Optimization Improvements.",
            points: [
              "Regular SEO Audits For Technical Consistency",
              "Keyword Tracking To Guide Content Expansion",
              "Local Ranking Analysis For Optimization Prioritization",
              "Ongoing Improvements For Sustained Visibility Growth",
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
                  "Strong Competition From Established Aesthetic Clinics With High Local Authority",
              },
              {
                label: "Resolution",
                value:
                  "Focused On High-Intent Localized Treatment Keywords Aligned With Patient Search Behavior",
              },
              {
                label: "Result",
                value: "25+ Keywords Ranked On Page 1",
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
                  "Limited Visibility For Core Dermatology And Aesthetic Services",
              },
              {
                label: "Resolution",
                value:
                  "Developed Dedicated Landing Pages For Individual Procedures And Treatment Categories",
              },
              { label: "Result", value: "60+ Total Keyword Rankings Achieved" },
            ],
          },
          {
            number: "3",
            title2: "Outcome",
            sections: [
              {
                label: "Challenge",
                value:
                  "Organic Traffic Lacked Strong Consultation Conversion Pathways",
              },
              {
                label: "Resolution",
                value:
                  "Integrated Structured CTAs And Optimized Service Page Flow Around Patient Enquiry Intent",
              },
              {
                label: "Result",
                value:
                  "40% Increase In Organic Traffic With Improved Consultation Enquiries",
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
            label: "SEARCH VISIBILITY",
            oldValue: "0%",
            newValue: "70%",
            badges: ["+70% growth", "stronger treatment visibility"],
          },
          {
            label: "ORGANIC TRAFFIC",
            oldValue: "0%",
            newValue: "40%",
            badges: ["+40% growth", "improved consultation flow"],
          },
        ]}
        highlights={[
          "Improved local treatment discoverability across high-intent searches",
          "Stronger appointment enquiry flow through optimized landing pages",
        ]}
        details={[
          {
            content:
              "Treatment-focused SEO restructuring significantly improved local search visibility, keyword rankings, and consultation-focused engagement performance.",
            fullWidth: true,
          },
        ]}
      />
      <CsResults
        title="Results and Business Impact"
        results={[
          { value: "60+", label: "Total Keyword Rankings" },
          { value: "25+", label: "Page 1 Keyword Positions" },
          { value: "40%", label: "Increase In Organic Traffic" },
          { value: "70%", label: "Increase In Search Visibility" },
          { value: "Improved", label: "Local Treatment Discoverability" },
          { value: "Stronger", label: "Appointment Enquiry Flow" },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Why This Worked"
        description="Performance improved because the SEO strategy aligned local treatment demand with highly structured landing pages designed for search precision and patient decision-making."
        points={[
          "Procedure-specific pages captured high-intent treatment searches",
          "Local SEO improvements strengthened geographic visibility signals",
          "Competitor keyword gaps created new ranking opportunities",
          "Conversion-focused page structures improved consultation intent",
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