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
  heading={"How Content Strategy Improved Engagement and Reach on LinkedIn"}
  description2={
    "Lifted Reach by 2.5X and Engagement by 4X Through Strategic Content Optimization"
  }
  description={
    "A global engineering and manufacturing brand specializing in industrial solutions and innovation wanted to improve visibility, strengthen audience interaction, and build more consistent engagement on LinkedIn."
  }
  meta={[
    { label: "Industry", value: "Industrial / Engineering" },
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
    "The brand’s LinkedIn content lacked consistent reach and interaction, making it difficult to maintain steady audience engagement despite regular posting activity."
  }
  title="The Challenges and Objectives"
  challenges={{
    title: "Key Challenges",
    items: [
      "Inconsistent post performance and engagement",
      "Low interaction despite consistent publishing",
      "Lack of structured content direction aligned with audience interests",
      "Weak messaging consistency across posts",
    ],
  }}
  objectives={{
    title: "Campaign Objectives",
    items: [
      "Improve reach and visibility across LinkedIn",
      "Increase engagement and audience interaction",
      "Align content with industry-relevant audience interests",
      "Strengthen messaging clarity and consistency",
      "Build a scalable content framework for long-term performance",
    ],
  }}
/>

      <CommonDivider />
      <CommonImageGrid 
        images={[
          "/images/case-study/industrial-content-engagement-growth/Artboard 1.png",
          "/images/case-study/industrial-content-engagement-growth/Artboard 2.png",
          "/images/case-study/industrial-content-engagement-growth/Artboard 3.png",
          "/images/case-study/industrial-content-engagement-growth/dOVER VICE PRESIDENT.png",
        ]}
      />

<CsStepCards
  title="Strategic Approach"
  description="The strategy focused on refining content structure, messaging, and audience alignment to improve LinkedIn performance and engagement consistency."
  cards={[
    {
      number: "1",
      title: "Audience Alignment",
      content:
        "Content was restructured around industry insights, innovation topics, and professional audience interests to improve relevance and interaction quality.",
    },
    {
      number: "2",
      title: "Content Structuring",
      content:
        "Messaging clarity, storytelling structure, and post formatting were refined to improve readability, engagement, and click intent.",
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
        "<ul><li>Improved messaging clarity and content structure</li><li>Focused on audience-relevant engineering and industry topics</li><li>Strengthened storytelling and visual consistency</li><li>Maintained a disciplined posting cadence to improve visibility stability</li></ul>",
    },
    {
      icon: "users",
      title: "Creative Approach",
      description:
        "<ul><li>Professional communication tailored for LinkedIn audiences</li><li>Industry-focused storytelling to improve audience relevance</li><li>Structured content formats designed for engagement and readability</li><li>Consistent branding and visual communication across posts</li></ul>",
    },
    {
      icon: "users",
      title: "Optimization Approach",
      description:
        "<ul><li>Continuously monitored reach, engagement, and CTR metrics</li><li>Refined content themes based on audience interaction</li><li>Improved messaging clarity and engagement triggers</li><li>Applied iterative updates to strengthen content performance over time</li></ul>",
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
        "A Structured LinkedIn Content Framework Was Implemented To Improve Engagement Consistency, Audience Interaction, And Long-Term Reach Performance.",
      points: [
        "Audience-Focused Content Strategy Aligned With Industry Interests",
        "Messaging Optimized For Stronger Engagement And Interaction",
        "Consistent Publishing Designed To Improve Visibility",
        "Structured Execution Framework Built For Scalable Growth",
      ],
    },
    {
      number: "02",
      title: "Content Planning",
      description:
        "Content Was Planned Around Industry Relevance, Audience Interests, And Engagement Opportunities.",
      points: [
        "Educational Content Focused On Engineering And Innovation Topics",
        "Industry-Focused Communication Aligned With Professional Interests",
        "Engagement-Driven Storytelling To Strengthen Audience Connection",
        "Content Structured Across Awareness And Consideration Stages",
      ],
    },
    {
      number: "03",
      title: "Distribution & Attribution (What Worked)",
      description:
        "Several Optimization Elements Contributed To Stronger LinkedIn Performance.",
      points: [
        "Industry-Relevant Topics Improved Audience Engagement",
        "Clearer Messaging Increased Readability And Interaction",
        "Consistent Posting Improved Visibility Stability",
        "Structured Storytelling Strengthened Audience Retention And Reach",
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
        "Consistent Publishing Cadence",
        "Structured Storytelling And Visual Consistency",
      ],
    },
    {
      number: "05",
      title: "Governance & Growth",
      description:
        "Performance Improvements Were Maintained Through Continuous Monitoring And Optimization.",
      points: [
        "Engagement Insights Guided Ongoing Content Refinement",
        "High-Performing Themes Were Scaled Across Formats",
        "Regular Reviews Ensured Consistency And Quality Control",
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
        "From inconsistent LinkedIn performance and fluctuating engagement → to a more structured strategy delivering stronger reach, interaction, and engagement consistency.",
    },
    {
      title: "What Changed",
      content: [
        "Content became more audience-focused and professionally aligned",
        "Messaging improved in clarity, structure, and relevance",
        "Storytelling and visuals strengthened audience interaction",
        "Consistency improved overall reach and engagement stability",
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
      label: "AVERAGE REACH PER POST",
      oldValue: "1,983",
      newValue: "5,051",
      badges: ["2.5X growth", "higher visibility"],
    },
    {
      label: "LIKES PER POST",
      oldValue: "23",
      newValue: "73",
      badges: ["3X growth", "stronger interaction"],
    },
    {
      label: "ENGAGEMENT RATE",
      oldValue: "2.55%",
      newValue: "13.25%",
      badges: ["4X+ growth", "improved engagement"],
    },
    {
      label: "CTR IMPROVED",
      oldValue: "1.37%",
      newValue: "11.82%",
      badges: ["higher click-through rate", "stronger content performance"],
    },
  ]}
  highlights={[
    "Improved audience interaction and content relevance",
    "More consistent LinkedIn performance during peak campaign phases",
  ]}
  details={[
    {
      content:
        "Optimized content delivered stronger audience interaction, improved content relevance, and more consistent LinkedIn performance during the peak campaign phase.",
      fullWidth: true,
    },
  ]}
/>
      <CommonDivider />
      <StaticPaidCampaignPerformance ctaText={"Looking to improve your social media performance, audience engagement, and LinkedIn visibility? Let’s connect and build a strategy designed for measurable growth." }/>
    </div>
  );
};

export default page;

export const metadata = {
  title:"Improving LinkedIn Reach and Engagement for an Industrial Brand",
  description:"Industry-focused LinkedIn communication increased reach, strengthened engagement, and improved audience interaction through structured content optimization."
}