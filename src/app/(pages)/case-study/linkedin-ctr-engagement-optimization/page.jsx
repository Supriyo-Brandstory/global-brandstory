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

const page = () => {
  return (
    <div>
      <CsSEOBanner
  heading={"How Content Optimization Improved CTR and Engagement in 90 Days"}
  description2={
    "Achieved 54% Higher CTR and 26% Better Engagement Through Strategic Content Optimization"
  }
  description={
    "A global industrial brand specializing in precision components and advanced manufacturing solutions, focused on strengthening audience engagement and improving content-driven interaction on LinkedIn."
  }
  meta={[
    { label: "Industry", value: "Industrial / Manufacturing" },
    {
      label: "Project Type",
      value: "Social Media Optimization",
    },
    {
      label: "Platform Targeted",
      value: "LinkedIn",
    },
  ]}
/>

<CommonChallengesObjectives
  desc={
    "Despite maintaining a consistent posting schedule, the brand’s content was not generating strong engagement or click-through performance, limiting audience interaction and overall content impact."
  }
  title="The Challenges and Objectives"
  challenges={{
    title: "Key Challenges",
    items: [
      "Low CTR and limited audience interaction across posts",
      "Weak engagement despite regular content publishing",
      "Content lacked alignment with audience interests and industry intent",
      "Messaging was not optimized to encourage clicks or engagement",
      "Limited differentiation in content positioning",
    ],
  }}
  objectives={{
    title: "Campaign Objectives",
    items: [
      "Improve click-through rates across LinkedIn content",
      "Increase audience engagement and post interaction",
      "Align content strategy with audience interests and professional intent",
      "Strengthen content relevance and messaging clarity",
      "Build more consistent performance across campaigns",
    ],
  }}
/>

      <CommonDivider />
      <CommonImageGrid 
        images={[
          "/images/case-study/linkedin-ctr-engagement-optimization/Earth day=1.jpg",
          "/images/case-study/linkedin-ctr-engagement-optimization/PN-1 Branding.jpg",
          "/images/case-study/linkedin-ctr-engagement-optimization/PN-10.jpg",
          "/images/case-study/linkedin-ctr-engagement-optimization/PN-8.jpg",
          "/images/case-study/linkedin-ctr-engagement-optimization/Women_s Day-1.jpg",
        ]}
      />

<CsStepCards
  title="Strategic Approach"
  description="The strategy focused on refining content relevance, improving messaging clarity, and aligning communication with audience behavior on LinkedIn."
  cards={[
    {
      number: "1",
      title: "Audience Alignment",
      content:
        "Content was restructured around industry interests, professional relevance, and audience engagement behavior to improve interaction quality.",
    },
    {
      number: "2",
      title: "Content Structuring",
      content:
        "Messaging, hooks, and post structures were refined to increase clarity, strengthen click intent, and improve overall engagement.",
    },
    {
      number: "3",
      title: "Platform Optimization",
      content:
        "Content formats and communication styles were optimized specifically for LinkedIn’s professional audience and engagement patterns.",
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
        "<ul><li>Improved content hooks to capture audience attention more effectively</li><li>Focused on audience-relevant and industry-focused content themes</li><li>Optimized posting consistency and publishing timing</li><li>Enhanced visual alignment with brand communication standards</li></ul>",
    },
    {
      icon: "users",
      title: "Creative Approach",
      description:
        "<ul><li>Clear, professional messaging designed for LinkedIn audiences</li><li>Structured post formats for improved readability and engagement</li><li>Industry-focused storytelling to strengthen audience relevance</li><li>Visual consistency to support brand credibility and recognition</li></ul>",
    },
    {
      icon: "users",
      title: "Optimization Approach",
      description:
        "<ul><li>Continuously monitored CTR and engagement metrics</li><li>Refined content themes based on performance insights</li><li>Improved messaging clarity and interaction triggers</li><li>Applied iterative content updates to strengthen engagement performance</li></ul>",
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
        "A Structured Content Optimization System Was Implemented To Improve Engagement, Strengthen Click Intent, And Create More Consistent Audience Interaction.",
      points: [
        "Audience-Focused Content Strategy Aligned With Professional Interests",
        "Messaging Optimized For Stronger Engagement And Click Behavior",
        "Consistent Publishing Designed To Improve Visibility And Reach",
        "Structured Execution Framework To Support Scalable Performance Growth",
      ],
    },
    {
      number: "02",
      title: "Content Planning",
      description:
        "Content Was Planned Around Audience Relevance, Industry Value, And Engagement Potential.",
      points: [
        "Industry-Focused Educational And Informational Content",
        "Professional Insights Aligned With Audience Interests",
        "Thought Leadership And Engagement-Driven Communication",
        "Content Structured Across Awareness And Consideration Stages",
      ],
    },
    {
      number: "03",
      title: "Distribution & Attribution (What Worked)",
      description:
        "Different Optimization Elements Contributed To Stronger Content Performance.",
      points: [
        "Improved Hooks Increased Click-Through Behavior",
        "Audience-Focused Topics Strengthened Engagement Quality",
        "Consistent Publishing Improved Visibility Stability",
        "Structured Messaging Enhanced Readability And Interaction",
      ],
    },
    {
      number: "04",
      title: "Best Practices Implemented",
      description:
        "Execution Focused On Performance-Driven Content Optimization And Consistency.",
      points: [
        "Audience-First Messaging Approach",
        "Clear And Concise Communication Structure",
        "Consistent Publishing Frequency",
        "LinkedIn-Focused Content Positioning",
        "Engagement-Oriented Content Formatting",
      ],
    },
    {
      number: "05",
      title: "Governance & Growth",
      description:
        "Performance Improvements Were Sustained Through Ongoing Optimization And Review.",
      points: [
        "Engagement Insights Guided Future Content Direction",
        "High-Performing Topics Were Expanded Across Formats",
        "Regular Reviews Ensured Consistency And Quality",
        "Iterative Improvements Strengthened Long-Term Engagement Performance",
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
        "From low-performing content with limited interaction → to optimized messaging delivering higher CTR and stronger audience engagement.",
    },
    {
      title: "What Changed",
      content: [
        "Content became more audience-focused and professionally aligned",
        "Messaging improved in clarity, relevance, and engagement intent",
        "Post formats were optimized for stronger interaction",
        "Consistency improved overall visibility and engagement stability",
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
      oldValue: "2.99%",
      newValue: "4.61%",
      badges: ["+54% growth", "higher click-through performance"],
    },
    {
      label: "ENGAGEMENT INCREASED",
      oldValue: "5.98%",
      newValue: "7.55%",
      badges: ["+26% growth", "stronger audience interaction"],
    },
  ]}
  highlights={[
    "Improved audience interaction across LinkedIn content",
    "Stronger engagement consistency and click performance",
  ]}
  details={[
    {
      content:
        "Optimized content consistently delivered stronger engagement and higher click-through performance compared to the initial campaign phase.",
      fullWidth: true,
    },
  ]}
/>
      <CommonDivider />
      <StaticPaidCampaignPerformance ctaText={"Looking to improve engagement, visibility, and content performance on LinkedIn? Let’s connect and build a strategy that drives measurable results."}/>
    </div>
  );
};

export default page;
