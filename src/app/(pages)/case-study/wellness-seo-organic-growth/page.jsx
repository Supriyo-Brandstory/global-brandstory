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
        heading={"Strengthening Organic Visibility for a <br/>Wellness Brand"}
        description={
          "A search-led SEO restructuring improved visibility for high-intent wellness and therapy-related searches, helping the brand strengthen local discoverability and increase appointment-focused organic engagement."
        }
        meta={[
          { label: "Industry", value: "Healthcare & Wellness" },
          {
            label: "Market / Geography",
            value: "India",
          },
          { label: "Business Model", value: "B2C" },
          { label: "Services Delivered", value: "SEO" },
        ]}
        stats={[
          { value: "55%", label: "Increase in Organic Sessions" },
          { value: "65%", label: "Increase in Search Impressions" },
          { value: "35+", label: "New Keywords Ranked" },
        ]}
      />
      <CommonDivider />

      <CsChallenge
        title="Business Challenge"
        paragraphs={[
          "The wellness provider operated in a highly competitive local market where established clinics, healthcare directories, and aggregator platforms dominated high-intent search visibility.",
          "Existing service pages lacked search-intent alignment, limiting rankings for therapy, treatment, and wellness-related queries.",
          "Additionally, the website lacked a structured local SEO framework, reducing discoverability for geo-targeted searches and weakening visibility across patient-focused informational topics influencing booking decisions.",
        ]}
      />
      <CommonDivider />

      <CsObjectives
        title="Objectives and Success Metrics"
        description="The primary objective was to capture high-intent wellness search demand, improve local ranking strength, and increase appointment-focused organic engagement through structured SEO optimization."
        points={[
          "Increase rankings for location-based wellness services",
          "Improve organic session growth during the optimization cycle",
          "Secure Top 10 rankings for high-intent local keywords",
          "Improve click-through rates across service pages",
        ]}
        stats={[
          {
            title: "Organic Sessions",
            number: "+55%",
            description: "Growth",
            isHighlighted: true,
          },
          {
            title: "Search Impressions",
            number: "+65%",
            description: "Increase",
          },
          {
            title: "Keyword Rankings",
            number: "35+",
            description: "New Keywords Ranked",
          },
          {
            title: "Local Rankings",
            number: "8+",
            description: "Top 10 Keyword Positions",
          },
        ]}
      />
      <CommonDivider />

      <CsStepCards
        title="Strategic Approach"
        description="The SEO strategy focused on aligning treatment intent, local discoverability, and informational relevance to strengthen organic visibility and engagement."
        cards={[
          {
            number: "1",
            title: "Local Intent Mapping",
            content:
              "Structured Service Pages Around Geo-Specific Wellness And Therapy-Related Search Queries To Improve Local Ranking Relevance And Transactional Visibility.",
          },
          {
            number: "2",
            title: "Search-Focused Optimization",
            content:
              "Rebuilt Metadata, Page Structure, Headings, And Internal Architecture To Improve Keyword Relevance, Crawlability, And Search Clarity.",
          },
          {
            number: "3",
            title: "Informational Authority Development",
            content:
              "Created Wellness-Focused Informational Content Targeting Symptom-Related Searches, Therapy Education, And Preventive Care Topics Influencing Patient Decisions.",
          },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Implementation Highlights"
        points={[
          "Conducted a comprehensive SEO audit and competitive market analysis",
          "Performed wellness-focused keyword research with local search modifiers",
          "Optimized treatment and therapy pages for high-intent search visibility",
          "Strengthened internal linking between service and informational pages",
          "Improved local SEO signals including Google Business Profile optimization",
          "Developed educational content targeting wellness symptoms and therapy intent",
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
              "A Structured SEO Framework Was Implemented To Improve Local Discoverability, Strengthen Search Visibility, And Increase Treatment-Focused Organic Engagement.",
            points: [
              "Focused On Geo-Targeted Wellness Search Visibility",
              "Captured High-Intent Therapy And Treatment Keywords",
              "Improved Internal Authority Across Service Content",
              "Aligned SEO Strategy With Patient Acquisition Goals",
            ],
          },
          {
            number: "02",
            title: "Content Planning",
            description:
              "Content Was Structured Around Treatment Intent, Wellness Education, And Local Search Relevance Across The Patient Journey.",
            points: [
              "Service Pages Targeting Wellness And Therapy Searches",
              "Educational Content Supporting Awareness And Trust-Building",
              "Symptom-Focused Blogs Improving Informational Visibility",
              "Coverage Aligned From Discovery To Appointment Intent",
            ],
          },
          {
            number: "03",
            title: "Distribution & Attribution (What Worked)",
            description:
              "Different SEO Content Layers Contributed To Visibility Growth And Stronger Engagement Performance.",
            points: [
              "Service Pages Improved High-Intent Local Traffic",
              "Informational Content Strengthened Topical Authority",
              "Internal Linking Improved Crawlability And Ranking Distribution",
              "Local SEO Optimization Improved Geo-Specific Discoverability",
            ],
          },
          {
            number: "04",
            title: "Best Practices Implemented",
            description:
              "Structured Optimization Ensured Consistent Growth In Rankings, Impressions, And Engagement.",
            points: [
              "Geo-Targeted SEO Architecture For Local Scalability",
              "Internal Linking Between Services And Informational Content",
              "Focus On Treatment-Intent Keyword Targeting",
              "Technical Optimization For Crawl And Index Efficiency",
              "Continuous Monitoring Of Rankings And Organic Engagement",
            ],
          },
          {
            number: "05",
            title: "Governance & Growth",
            description:
              "Performance Was Maintained Through Continuous SEO Monitoring, Optimization, And Content Refinement.",
            points: [
              "Regular SEO Audits For Technical Stability",
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
                  "Strong Competition From Established Wellness Centers And Healthcare Aggregators",
              },
              {
                label: "Resolution",
                value:
                  "Prioritized Geo-Modified Wellness And Therapy-Related Keywords Aligned With High-Intent Local Searches",
              },
              {
                label: "Result",
                value: "8+ Priority Keywords Ranked Within Top 10 Positions",
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
                  "Limited Informational Visibility Influencing Patient Awareness And Booking Decisions",
              },
              {
                label: "Resolution",
                value:
                  "Developed Educational Wellness Content Targeting Symptom-Related And Therapy-Focused Search Queries",
              },
              { label: "Result", value: "65% Increase In Search Impressions" },
            ],
          },
          {
            number: "3",
            title2: "Outcome",
            sections: [
              {
                label: "Challenge",
                value:
                  "Service Pages Lacked Alignment With Patient Search Behavior And Treatment Intent",
              },
              {
                label: "Resolution",
                value:
                  "Rebuilt On-Page SEO Structure Around Therapy-Focused Search Intent And Keyword Relevance",
              },
              { label: "Result", value: "40% Improvement In Organic Clicks" },
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
            newValue: "55%",
            badges: ["+55% growth", "higher local engagement"],
          },
          {
            label: "SEARCH IMPRESSIONS",
            oldValue: "0%",
            newValue: "65%",
            badges: ["+65% growth", "stronger visibility"],
          },
        ]}
        highlights={[
          "Improved local discoverability across wellness-related searches",
          "Stronger appointment-focused engagement through SEO optimization",
        ]}
        details={[
          {
            content:
              "SEO restructuring and treatment-intent optimization significantly improved visibility, search impressions, and engagement quality across local wellness searches.",
            fullWidth: true,
          },
        ]}
      />
      <CsResults
        title="Results and Business Impact"
        results={[
          { value: "55%", label: "Increase In Organic Sessions" },
          { value: "35+", label: "New Wellness Keyword Rankings" },
          { value: "8+", label: "Top 10 Local Keyword Positions" },
          { value: "65%", label: "Increase In Search Impressions" },
          { value: "40%", label: "Increase In Organic Clicks" },
          { value: "Improved", label: "Service Page Engagement" },
        ]}
      />
      <CommonDivider />

      <CsImageText
        title="Why This Worked"
        description="Performance improved because the SEO strategy was aligned directly with patient search behavior, local intent signals, and wellness-focused informational discovery."
        points={[
          "Treatment-focused landing pages improved transactional visibility",
          "Local SEO improvements strengthened geo-specific rankings",
          "Informational content addressed pre-booking wellness intent",
          "Internal linking improved authority distribution across service pages",
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
  title: "Strengthening Organic Visibility for a Wellness Brand",
  description: "Search-focused SEO improvements increased wellness search visibility, strengthened local rankings, and improved appointment-focused organic engagement.",
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