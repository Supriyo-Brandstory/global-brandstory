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
  heading={"How Consistent Content Improved Engagement and CTR Over Time"}
  description2={
    "Improved CTR by 2X and Increased Engagement by ~35% Through Strategic Content Optimization"
  }
  description={
    "A global manufacturing brand specializing in engineering solutions and industrial innovation aimed to improve audience engagement, increase click-through performance, and build more consistent interaction across LinkedIn."
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
    "The brand’s LinkedIn content lacked consistent engagement and interaction, limiting visibility and reducing overall content effectiveness despite maintaining regular posting activity."
  }
  title="The Challenges and Objectives"
  challenges={{
    title: "Key Challenges",
    items: [
      "Low engagement across posts despite consistent publishing",
      "Inconsistent interaction and click-through behavior",
      "Lack of structured content direction aligned with audience interests",
      "Messaging that did not consistently encourage audience action",
      "Limited differentiation in communication and storytelling",
    ],
  }}
  objectives={{
    title: "Campaign Objectives",
    items: [
      "Improve CTR and engagement performance on LinkedIn",
      "Increase audience interaction and content relevance",
      "Align messaging with professional audience interests",
      "Strengthen storytelling and communication consistency",
      "Build a scalable content strategy for long-term growth",
    ],
  }}
/>

<CsStepCards
  title="Strategic Approach"
  description="The strategy focused on implementing a structured content framework designed to improve engagement, click behavior, and audience relevance across LinkedIn."
  cards={[
    {
      number: "1",
      title: "Audience Alignment",
      content:
        "Content was refined around industry-focused insights, engineering relevance, and professional audience interests to improve engagement quality and interaction consistency.",
    },
    {
      number: "2",
      title: "Content Structuring",
      content:
        "Messaging clarity, storytelling structure, and post formatting were improved to strengthen readability, engagement, and click intent.",
    },
    {
      number: "3",
      title: "Platform Optimization",
      content:
        "Content formats and communication styles were optimized specifically for LinkedIn’s professional audience and engagement behavior.",
    },
  ]}
/>

<CommonStrategyPlanning
  title="Campaign Execution"
  items={[
    {
      icon: "users",
      title: "Content Execution Strategy",
      description:
        "<ul><li>Improved content clarity and messaging consistency</li><li>Focused on audience-relevant engineering and manufacturing topics</li><li>Enhanced storytelling and visual communication</li><li>Maintained a disciplined posting cadence to improve visibility and interaction stability</li></ul>",
    },
    {
      icon: "users",
      title: "Creative Approach",
      description:
        "<ul><li>Professional messaging tailored for LinkedIn audiences</li><li>Industry-focused storytelling to strengthen audience relevance</li><li>Structured content layouts for better readability and engagement</li><li>Consistent branding and visual presentation across posts</li></ul>",
    },
    {
      icon: "users",
      title: "Optimization Approach",
      description:
        "<ul><li>Continuously monitored CTR and engagement performance</li><li>Refined content themes based on audience response</li><li>Improved messaging clarity and engagement triggers</li><li>Applied iterative updates to strengthen long-term content performance</li></ul>",
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
        "A Structured LinkedIn Content Framework Was Implemented To Improve Engagement Consistency, Audience Interaction, And Click-Through Performance.",
      points: [
        "Audience-Focused Content Strategy Aligned With Industry Interests",
        "Messaging Optimized For Stronger Engagement And Click Behavior",
        "Consistent Publishing Designed To Improve Visibility",
        "Structured Execution Framework Built For Scalable Performance Growth",
      ],
    },
    {
      number: "02",
      title: "Content Planning",
      description:
        "Content Was Planned Around Audience Relevance, Industry Value, And Engagement Opportunities.",
      points: [
        "Educational Content Focused On Engineering And Manufacturing Insights",
        "Industry-Focused Storytelling Aligned With Professional Interests",
        "Engagement-Driven Communication Designed To Improve Audience Interaction",
        "Content Structured Across Awareness And Consideration Stages",
      ],
    },
    {
      number: "03",
      title: "Distribution & Attribution (What Worked)",
      description:
        "Several Optimization Elements Contributed To Stronger LinkedIn Performance.",
      points: [
        "Audience-Relevant Topics Improved Engagement Quality",
        "Clearer Messaging Strengthened Click-Through Behavior",
        "Consistent Posting Improved Visibility Stability",
        "Structured Storytelling Enhanced Audience Interaction And Retention",
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
        "Professional Communication Aligned With Audience Interests",
      ],
    },
    {
      number: "05",
      title: "Governance & Growth",
      description:
        "Performance Was Maintained Through Continuous Monitoring And Optimization.",
      points: [
        "Engagement Metrics Used To Refine Content Direction",
        "High-Performing Themes Scaled Across Formats",
        "Regular Reviews Ensured Content Consistency",
        "Iterative Improvements Based On Audience Response",
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
        "From low interaction and inconsistent performance → to a structured LinkedIn strategy delivering steady growth in engagement and CTR.",
    },
    {
      title: "What Changed",
      content: [
        "Content became more audience-focused and professionally aligned",
        "Messaging improved in clarity, structure, and relevance",
        "Storytelling and visuals strengthened audience interaction",
        "Consistency improved overall engagement and click behavior over time",
      ],
    },
  ]}
/>

<CsPerformance
  title="Results /"
  titleHighlight="Impact"
  stats={[
    {
      label: "CTR IMPROVED",
      oldValue: "~2.1%",
      newValue: "~4.3%",
      badges: ["2X growth", "higher click-through performance"],
    },
    {
      label: "ENGAGEMENT GROWTH",
      oldValue: "Baseline",
      newValue: "+30–35%",
      badges: ["stronger interaction", "steady growth"],
    },
  ]}
  highlights={[
    "Clicks per post showed a steady upward trend",
    "Improved interaction consistency across LinkedIn content",
  ]}
  details={[
    {
      content:
        "Optimized content consistently delivered stronger click-through performance and more stable engagement patterns compared to the initial campaign phase.",
      fullWidth: true,
    },
  ]}
/>
    </div>
  );
};

export default page;
