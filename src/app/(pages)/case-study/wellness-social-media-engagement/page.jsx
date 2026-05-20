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
  heading={"How Structured Content Improved Engagement Consistency Across Platforms"}
  description2={
    "Achieved 20–30% Higher Engagement with More Consistent Audience Interaction"
  }
  description={
    "A wellness-focused retreat brand offering holistic health experiences, nature-based programs, and lifestyle-focused wellness solutions aimed at building stronger audience engagement and brand visibility across digital platforms."
  }
  meta={[
    { label: "Industry", value: "Wellness / Retreat / Hospitality" },
    {
      label: "Project Type",
      value: "Social Media Optimization",
    },
    {
      label: "Platforms Targeted",
      value: "Instagram & LinkedIn",
    },
  ]}
/>

<CommonChallengesObjectives
  desc={
    "The brand’s social media content lacked consistency and a clearly defined direction, resulting in fluctuating engagement levels and unpredictable performance across platforms."
  }
  title="The Challenges and Objectives"
  challenges={{
    title: "Key Challenges",
    items: [
      "Inconsistent engagement performance across posts",
      "Lack of structured content direction and audience alignment",
      "Performance variability between Instagram and LinkedIn",
      "Messaging inconsistency across content formats",
      "Limited audience connection through storytelling and positioning",
    ],
  }}
  objectives={{
    title: "Campaign Objectives",
    items: [
      "Improve engagement consistency across platforms",
      "Strengthen audience interaction and content relevance",
      "Create a more structured and scalable content strategy",
      "Align messaging with wellness-focused audience interests",
      "Build stable and predictable engagement performance",
    ],
  }}
/>

      <CommonDivider />
      <CommonImageGrid 
        images={[
          "/images/case-study/wellness-social-media-engagement/image (8).png",
          "/images/case-study/wellness-social-media-engagement/image (9).png",
          "/images/case-study/wellness-social-media-engagement/image (10).png",
          "/images/case-study/wellness-social-media-engagement/image (11).png",
          "/images/case-study/wellness-social-media-engagement/image (12).png",
          "/images/case-study/wellness-social-media-engagement/image (13).png",
          "/images/case-study/wellness-social-media-engagement/image (15).png",
          "/images/case-study/wellness-social-media-engagement/image (16).png",
          "/images/case-study/wellness-social-media-engagement/image (17).png",
        ]}
      />

<CsStepCards
  title="Strategic Approach"
  description="The strategy focused on implementing a structured content framework designed to improve consistency, audience alignment, and engagement performance across Instagram and LinkedIn."
  cards={[
    {
      number: "1",
      title: "Audience Alignment",
      content:
        "Content was refined around wellness interests, lifestyle aspirations, and audience engagement behavior to improve relevance and interaction quality.",
    },
    {
      number: "2",
      title: "Content Structuring",
      content:
        "Clear content themes, messaging pillars, and storytelling formats were introduced to create consistency across platforms.",
    },
    {
      number: "3",
      title: "Platform Optimization",
      content:
        "Content formats and communication styles were adapted for Instagram’s visual engagement and LinkedIn’s professional and credibility-driven audience.",
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
        "<ul><li>Defined clear content themes and messaging direction</li><li>Improved storytelling consistency across platforms</li><li>Focused on audience-relevant wellness and lifestyle content</li><li>Maintained a consistent publishing cadence to support visibility and engagement</li></ul>",
    },
    {
      icon: "users",
      title: "Creative Approach",
      description:
        "<ul><li>Visual-first storytelling for stronger Instagram engagement</li><li>Professional and informative communication for LinkedIn audiences</li><li>Clean, consistent layouts to improve readability and brand recognition</li><li>Wellness-focused messaging aligned with audience interests and lifestyle aspirations</li></ul>",
    },
    {
      icon: "users",
      title: "Optimization Approach",
      description:
        "<ul><li>Continuously monitored engagement trends and interaction patterns</li><li>Refined content topics based on audience response</li><li>Improved content structure and messaging clarity</li><li>Applied iterative updates to strengthen consistency and engagement stability</li></ul>",
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
        "A Structured Content System Was Implemented To Improve Engagement Consistency By Aligning Audience Intent With Platform Behavior And Content Relevance.",
      points: [
        "Audience-Focused Content Strategy Aligned With Wellness Interests",
        "Consistent Messaging And Storytelling Framework",
        "Structured Execution Designed To Improve Engagement Stability",
        "Scalable Content Approach Across Instagram And LinkedIn",
      ],
    },
    {
      number: "02",
      title: "Content Planning",
      description:
        "Content Was Planned Around Wellness, Lifestyle, And Aspirational Engagement Themes.",
      points: [
        "Wellness-Focused Educational And Lifestyle Content",
        "Nature-Based And Experience-Driven Storytelling",
        "Aspirational Content To Strengthen Emotional Audience Connection",
        "Content Mapped Across Awareness, Engagement, And Consideration Stages",
      ],
    },
    {
      number: "03",
      title: "Distribution & Attribution (What Worked)",
      description:
        "Each Platform Contributed Differently To Engagement Consistency And Audience Interaction.",
      points: [
        "Instagram Delivered Stronger Visual Engagement And Interaction",
        "LinkedIn Improved Credibility And Professional Audience Reach",
        "Consistent Posting Improved Visibility And Reduced Performance Fluctuation",
        "Structured Storytelling Strengthened Audience Retention And Interaction Quality",
      ],
    },
    {
      number: "04",
      title: "Best Practices Implemented",
      description:
        "Execution Focused On Consistency, Relevance, And Audience-Focused Communication.",
      points: [
        "Audience-First Content Planning",
        "Platform-Specific Messaging And Formatting",
        "Consistent Publishing Cadence",
        "Structured Storytelling For Stronger Engagement",
        "Visual Consistency To Strengthen Brand Identity",
      ],
    },
    {
      number: "05",
      title: "Governance & Growth",
      description:
        "Performance Was Sustained Through Continuous Optimization And Content Refinement.",
      points: [
        "Engagement Insights Guided Ongoing Content Improvements",
        "High-Performing Themes Were Expanded Across Formats",
        "Regular Reviews Ensured Consistency And Quality Control",
        "Iterative Updates Improved Long-Term Engagement Stability",
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
        "From inconsistent content performance and fluctuating engagement → to a more stable, audience-aligned strategy delivering stronger interaction consistency.",
    },
    {
      title: "What Changed",
      content: [
        "Content evolved into a more structured and audience-focused strategy",
        "Messaging became clearer and more aligned with audience interests",
        "Storytelling and visuals improved engagement quality",
        "Consistency strengthened visibility and interaction stability across platforms",
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
      label: "ENGAGEMENT IMPROVED",
      oldValue: "Baseline",
      newValue: "+20–30%",
      badges: ["higher engagement", "improved interaction consistency"],
    },
    {
      label: "CONTENT STABILITY",
      oldValue: "Fluctuating",
      newValue: "Consistent",
      badges: ["reduced performance fluctuation", "better predictability"],
    },
  ]}
  highlights={[
    "Stronger audience interaction consistency across platforms",
    "Improved content stability and performance predictability",
  ]}
  details={[
    {
      content:
        "The optimized content strategy delivered more stable engagement trends and stronger audience interaction compared to the initial campaign phase.",
      fullWidth: true,
    },
  ]}
/>
      <CommonDivider />
      <StaticPaidCampaignPerformance ctaText={"Looking to improve your social media engagement, consistency, and brand visibility? Let’s connect and build a strategy designed for long-term growth." }/>
    </div>
  );
};

export default page;

export const metadata = {
  title:"Strengthening Social Media Engagement for a Wellness Brand",
  description:"Platform-focused storytelling and consistent communication improved engagement stability, audience connection, and brand visibility.",
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