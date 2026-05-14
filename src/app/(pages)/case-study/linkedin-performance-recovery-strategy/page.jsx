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
    "Achieved 54% Higher CTR and 26% Better Engagement Through Strategic Content Improvements"
  }
  description={
    "A global industrial brand specializing in precision components and manufacturing solutions, focused on improving audience engagement, strengthening content visibility, and driving more meaningful interaction through LinkedIn."
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
    "Despite maintaining a consistent posting schedule, the brand’s content was not generating strong engagement or click-through performance, limiting audience interaction and reducing overall content effectiveness."
  }
  title="The Challenges and Objectives"
  challenges={{
    title: "Key Challenges",
    items: [
      "Low CTR and limited audience interaction across posts",
      "Weak engagement despite consistent content publishing",
      "Lack of content direction aligned with audience interests",
      "Messaging that did not effectively encourage clicks or engagement",
      "Limited differentiation in communication and positioning",
    ],
  }}
  objectives={{
    title: "Campaign Objectives",
    items: [
      "Improve click-through rates across LinkedIn content",
      "Increase engagement and audience interaction",
      "Align content strategy with professional audience interests",
      "Improve messaging clarity and content relevance",
      "Create more consistent and measurable content performance",
    ],
  }}
/>

      <CommonDivider />
      <CommonImageGrid 
        images={[
          "/images/case-study/linkedin-performance-recovery-strategy/Ads.jpg",
          "/images/case-study/linkedin-performance-recovery-strategy/Earth Day-1.jpg",
          "/images/case-study/linkedin-performance-recovery-strategy/Engineers.jpg",
          "/images/case-study/linkedin-performance-recovery-strategy/Holi-2.jpg",
          "/images/case-study/linkedin-performance-recovery-strategy/Idex pump copy.png",
          "/images/case-study/linkedin-performance-recovery-strategy/Paintindia.jpg",
        ]}
      />

<CsStepCards
  title="Strategic Approach"
  description="The strategy focused on optimizing content structure, messaging, and audience alignment to improve engagement quality and click behavior across LinkedIn."
  cards={[
    {
      number: "1",
      title: "Audience Alignment",
      content:
        "Content was refined around industry relevance, professional interests, and audience behavior to improve engagement and interaction quality.",
    },
    {
      number: "2",
      title: "Content Structuring",
      content:
        "Post structures, messaging clarity, and content hooks were improved to strengthen click intent and audience engagement.",
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
        "<ul><li>Clear and professional messaging designed for LinkedIn audiences</li><li>Structured post formats for better readability and interaction</li><li>Industry-focused storytelling to improve relevance and engagement</li><li>Consistent visual communication to strengthen brand credibility</li></ul>",
    },
    {
      icon: "users",
      title: "Optimization Approach",
      description:
        "<ul><li>Continuously monitored CTR and engagement metrics</li><li>Refined content themes based on audience response and performance insights</li><li>Improved messaging clarity and interaction triggers</li><li>Applied iterative content updates to improve engagement performance over time</li></ul>",
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
        "A Structured Content Optimization Framework Was Implemented To Improve Engagement, Strengthen Click Intent, And Create More Consistent Audience Interaction Across LinkedIn.",
      points: [
        "Audience-Focused Content Strategy Aligned With Professional Interests",
        "Messaging Optimized For Stronger Engagement And Click Behavior",
        "Consistent Publishing Designed To Improve Visibility And Reach",
        "Structured Execution Framework Built For Scalable Performance Growth",
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
        "Thought Leadership Content To Improve Credibility And Engagement",
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
        "Consistent Posting Improved Visibility And Performance Stability",
        "Structured Messaging Improved Readability And Interaction Rates",
      ],
    },
    {
      number: "04",
      title: "Best Practices Implemented",
      description:
        "Execution Focused On Performance-Driven Optimization And Communication Consistency.",
      points: [
        "Audience-First Messaging Approach",
        "Clear And Concise Communication Structure",
        "Consistent Publishing Frequency",
        "LinkedIn-Focused Content Positioning",
        "Engagement-Oriented Formatting And Storytelling",
      ],
    },
    {
      number: "05",
      title: "Governance & Growth",
      description:
        "Performance Improvements Were Sustained Through Continuous Monitoring And Optimization.",
      points: [
        "Engagement Insights Guided Future Content Direction",
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
        "From low-performing content with limited interaction → to optimized communication delivering higher CTR and stronger audience engagement.",
    },
    {
      title: "What Changed",
      content: [
        "Content became more audience-focused and professionally aligned",
        "Messaging improved in clarity, relevance, and engagement intent",
        "Post formats were optimized for stronger interaction and readability",
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
      badges: ["+26% growth", "stable click volume"],
    },
  ]}
  highlights={[
    "Improved audience interaction across LinkedIn content",
    "Stronger engagement consistency while maintaining stable click volume",
  ]}
  details={[
    {
      content:
        "Optimized content consistently delivered higher engagement and stronger click-through performance compared to the initial campaign phase.",
      fullWidth: true,
    },
  ]}
/>
      <CommonDivider />
      <StaticPaidCampaignPerformance ctaText={"Looking to improve your social media performance, engagement, and content impact? Let’s connect and build a strategy that drives measurable results."} />
    </div>
  );
};

export default page;
