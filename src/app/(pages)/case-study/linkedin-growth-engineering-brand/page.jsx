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
import { CommonChallengesObjectives } from "@/component/pages/common/CommonChallengesObjectives";
import { CommonImageGrid } from "@/component/pages/common/CommonImageGrid";
import { CommonStrategyPlanning } from "@/component/pages/common/CommonStrategyPlanning";
import CommonTransformation from "@/component/pages/common/CommonTransformation";
import StaticPaidCampaignPerformance from "@/component/pages/common/StaticPaidCampaignPerformance";
import { getPageUrl } from "@/utils/getPageUrl";

const page = () => {
  return (
    <div>
      <CsSEOBanner
  heading={"How Content Strategy Transformed Performance From Decline to Growth"}
  description2={
    "Scaled Engagement by 5X and Reach by 7X After Strategic Performance Recovery"
  }
  description={
    "A technology company focused on data analytics, AI solutions, and enterprise digital transformation wanted to recover declining social media performance, improve audience engagement, and strengthen visibility across LinkedIn."
  }
  meta={[
    { label: "Industry", value: "Technology / Data & Analytics" },
    {
      label: "Project Type",
      value: "Social Media Growth & Optimization",
    },
    {
      label: "Platform Targeted",
      value: "LinkedIn",
    },
  ]}
/>

<CommonChallengesObjectives
  desc={
    "The brand experienced declining social media performance, with reduced reach, engagement, and audience interaction over consecutive months, affecting visibility and overall content effectiveness."
  }
  title="The Challenges and Objectives"
  challenges={{
    title: "Key Challenges",
    items: [
      "Continuous drop in impressions and engagement",
      "Low CTR and weak audience interaction",
      "Content fatigue caused by repetitive messaging",
      "Lack of structured performance direction",
      "Reduced visibility despite regular posting",
    ],
  }}
  objectives={{
    title: "Campaign Objectives",
    items: [
      "Recover LinkedIn performance and visibility",
      "Improve engagement and audience interaction",
      "Increase CTR and content effectiveness",
      "Strengthen positioning within the technology and AI space",
      "Build a scalable content framework for long-term growth",
    ],
  }}
/>

      <CommonDivider />
      <CommonImageGrid 
        images={[
          "/images/case-study/linkedin-growth-engineering-brand/Copy of Image 1.jpg",
          "/images/case-study/linkedin-growth-engineering-brand/Copy of Image 2.jpg",
          "/images/case-study/linkedin-growth-engineering-brand/Copy of image (36).png",
          "/images/case-study/linkedin-growth-engineering-brand/Copy of image (37).png",
        ]}
      />

<CsStepCards
  title="Strategic Approach"
  description="The strategy focused on revamping the content framework to recover performance, improve engagement quality, and scale audience interaction across LinkedIn."
  cards={[
    {
      number: "1",
      title: "Audience Alignment",
      content:
        "Content was restructured around enterprise technology trends, AI insights, and audience-relevant industry topics to improve engagement and relevance.",
    },
    {
      number: "2",
      title: "Content Structuring",
      content:
        "Messaging, storytelling, and content hooks were refined to improve clarity, strengthen engagement triggers, and encourage higher click-through behavior.",
    },
    {
      number: "3",
      title: "Platform Optimization",
      content:
        "Content formats and communication styles were optimized specifically for LinkedIn’s professional audience.",
    },
  ]}
/>

      <CommonDivider />
<CommonStrategyPlanning
  title="Campaign Execution"
  items={[
    {
      icon: "users",
      title: "Content Execution Strategy",
      description:
        "<ul><li>Repositioned content with stronger hooks and messaging</li><li>Focused on high-intent, value-driven content themes</li><li>Improved visual storytelling and brand consistency</li><li>Increased posting consistency to improve visibility</li></ul>",
    },
    {
      icon: "users",
      title: "Creative Approach",
      description:
        "<ul><li>Professional messaging designed for technology audiences</li><li>AI and analytics-focused storytelling to strengthen relevance</li><li>Structured layouts for improved readability and interaction</li><li>Consistent visual communication aligned with brand positioning</li></ul>",
    },
    {
      icon: "users",
      title: "Optimization Approach",
      description:
        "<ul><li>Continuously monitored engagement, CTR, and reach performance</li><li>Refined content themes based on audience behavior</li><li>Improved messaging clarity and audience targeting</li><li>Applied iterative updates to strengthen long-term recovery</li></ul>",
    },
  ]}
/>

<CsProcess
  title="Our Process"
  steps={[
    {
      number: "01",
      title: "Process Overview",
      description:
        "A Structured LinkedIn Content System Was Implemented To Recover Performance, Improve Interaction, And Scale Engagement Growth.",
      points: [
        "Audience-Focused Content Aligned With Technology Interests",
        "Messaging Optimized For Stronger Engagement And Click Behavior",
        "Consistent Publishing Designed To Improve Visibility",
        "Structured Execution Framework Built For Scalable Growth",
      ],
    },
    {
      number: "02",
      title: "Content Planning",
      description:
        "Content Was Planned Around Technology Relevance, Audience Interests, And Engagement Opportunities.",
      points: [
        "Educational Content Focused On AI, Analytics, And Enterprise Insights",
        "Industry-Focused Communication Aligned With Professional Interests",
        "Engagement-Driven Storytelling Designed To Improve Audience Interaction",
        "Content Structured Across Awareness And Consideration Stages",
      ],
    },
    {
      number: "03",
      title: "Distribution & Attribution (What Worked)",
      description:
        "Several Optimization Elements Contributed To Stronger LinkedIn Performance.",
      points: [
        "High-Value Industry Topics Improved Engagement",
        "Clearer Messaging Strengthened CTR And Interaction Quality",
        "Consistent Posting Improved Visibility Stability",
        "Structured Storytelling Enhanced Audience Retention And Reach Growth",
      ],
    },
    {
      number: "04",
      title: "Best Practices Implemented",
      description:
        "Execution Focused On Consistency, Audience Relevance, And Engagement-Driven Communication.",
      points: [
        "Audience-First Messaging Strategy",
        "LinkedIn-Focused Content Formatting",
        "Consistent Posting Cadence",
        "Structured Storytelling And Visual Consistency",
      ],
    },
    {
      number: "05",
      title: "Governance & Growth",
      description:
        "Performance Improvements Were Maintained Through Continuous Monitoring And Optimization.",
      points: [
        "Engagement Metrics Guided Ongoing Content Refinement",
        "High-Performing Themes Were Scaled Across Formats",
        "Regular Reviews Ensured Consistency And Quality Control",
        "Iterative Improvements Strengthened Long-Term Growth Performance",
      ],
    },
  ]}
/>

<CommonTransformation
  title="The Transformation"
  cards={[
    {
      title: "Before vs After Line",
      content:
        "From declining performance and reduced visibility → to stronger engagement, audience interaction, and scalable LinkedIn growth.",
    },
    {
      title: "What Changed",
      content: [
        "Content shifted from generic posts to audience-focused communication",
        "Messaging improved in clarity and relevance",
        "Storytelling and visuals strengthened interaction",
        "Consistency improved overall reach, CTR, and engagement stability",
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
      label: "IMPRESSIONS GROWTH",
      oldValue: "7,575",
      newValue: "53,747",
      badges: ["~7X growth", "higher visibility"],
    },
    {
      label: "CTR IMPROVED",
      oldValue: "0.64%",
      newValue: "6.47%",
      badges: ["~10X growth", "stronger click-through performance"],
    },
    {
      label: "ENGAGEMENT GROWTH",
      oldValue: "1.05%",
      newValue: "9.66%+",
      badges: ["~5–8X growth", "higher audience interaction"],
    },
  ]}
  highlights={[
    "Significant increase in audience interaction and visibility",
    "Stronger engagement consistency and content relevance",
  ]}
  details={[
    {
      content:
        "Follower growth increased from 14,470 to 17,268, including a spike of 1,390 new followers in January, highlighting stronger audience acquisition and improved content relevance.",
      fullWidth: true,
    },
  ]}
/>
      <CommonDivider />
      <StaticPaidCampaignPerformance ctaText={"Looking to recover declining social media performance and scale audience engagement with a structured content strategy? Let’s connect and build a growth-focused approach designed for measurable results."}/>
    </div>
  );
};

export default page;

export const metadata = {
  title:"Transforming LinkedIn Growth for a Technology Brand",
  description:"Performance-driven LinkedIn optimization transformed declining visibility into scalable engagement, stronger reach, and sustained audience growth.",
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