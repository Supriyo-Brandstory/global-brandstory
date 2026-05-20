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
        heading={"How Content Strategy Scaled Engagement Across Multiple Platforms"}
        description2={
          "Achieved 2–3X Growth in Engagement with Higher Reach and Stronger Audience Interaction"
        }
        description={
          "A coaching institute focused on competitive exam preparation and student engagement wanted to improve visibility, strengthen audience interaction, and maintain consistent engagement across multiple social media platforms."
        }
        meta={[
          { label: "Industry", value: "Education / Coaching" },
          {
            label: "Project Type",
            value: "Social Media Growth & Optimization",
          },
          {
            label: "Platforms Targeted",
            value: "Instagram, LinkedIn & Twitter",
          },
        ]}
      />

      <CommonChallengesObjectives
        desc={
          "The brand’s content lacked consistent reach and engagement across platforms, limiting visibility and audience interaction during critical student demand periods."
        }
        title="The Challenges and Objectives"
        challenges={{
          title: "Key Challenges",
          items: [
            "Inconsistent engagement performance across posts",
            "Low reach during non-peak academic periods",
            "Lack of structured content aligned with exam cycles and student intent",
            "Difficulty maintaining stable interaction across platforms",
          ],
        }}
        objectives={{
          title: "Campaign Objectives",
          items: [
            "Improve engagement consistency across all platforms",
            "Increase reach during key exam preparation periods",
            "Align content strategy with student interests and demand cycles",
            "Strengthen educational relevance and audience interaction",
            "Build a scalable and structured social media growth strategy",
          ],
        }}
      />

      <CommonDivider />
      <CommonImageGrid
        images={[
          "/images/case-study/education-social-media-growth-strategy/Motivational.png",
          "/images/case-study/education-social-media-growth-strategy/Post 10- Admissions Open.png",
          "/images/case-study/education-social-media-growth-strategy/Post 12 - Admissions Open.png",
          "/images/case-study/education-social-media-growth-strategy/Post 12- Quotes..png",
        ]}
      />

      <CsStepCards
        title="Strategic Approach"
        description="The strategy focused on aligning content with student demand cycles, educational intent, and platform behavior to improve engagement and visibility."
        cards={[
          {
            number: "1",
            title: "Audience Alignment",
            content:
              "Content was planned around exam preparation timelines, student interests, and educational relevance to improve interaction quality and engagement consistency.",
          },
          {
            number: "2",
            title: "Content Structuring",
            content:
              "A structured content framework was introduced to support educational value, engagement consistency, and platform-specific communication.",
          },
          {
            number: "3",
            title: "Platform Optimization",
            content:
              "Content formats and messaging styles were adapted for each platform’s audience behavior. Instagram focused on visual engagement and student interaction, LinkedIn on educational credibility, and Twitter on timely updates during exam cycles.",
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
              "<ul><li>Created content aligned with exam timelines and student demand periods</li><li>Focused on educational and engagement-driven content themes</li><li>Optimized content formats for each platform</li><li>Maintained a consistent posting cadence to improve reach stability</li></ul>",
          },
          {
            icon: "users",
            title: "Creative Approach",
            description:
              "<ul><li>Student-focused storytelling designed to improve engagement relevance</li><li>Educational content structured for readability and interaction</li><li>Platform-specific communication styles for stronger audience connection</li><li>Consistent messaging and visual direction across platforms</li></ul>",
          },
          {
            icon: "users",
            title: "Optimization Approach",
            description:
              "<ul><li>Continuously monitored engagement and reach performance</li><li>Refined content topics based on audience response</li><li>Improved timing around exam and demand cycles</li><li>Applied iterative updates to strengthen visibility and interaction</li></ul>",
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
              "A Structured Content Growth Framework Was Implemented To Improve Engagement Consistency And Align Content Performance With Student Demand Across Platforms.",
            points: [
              "Audience-Focused Educational Content Strategy",
              "Platform-Specific Execution For Engagement Growth",
              "Consistent Publishing Framework To Improve Visibility",
              "Structured Planning Designed For Scalable Interaction",
            ],
          },
          {
            number: "02",
            title: "Content Planning",
            description:
              "Content Was Planned Around Educational Relevance, Exam Preparation, And Engagement Opportunities.",
            points: [
              "Educational Content Focused On Competitive Exam Preparation",
              "Student-Focused Communication Aligned With Learning Interests",
              "Engagement-Driven Storytelling To Improve Audience Connection",
              "Content Structured Across Awareness And Consideration Stages",
            ],
          },
          {
            number: "03",
            title: "Distribution & Attribution (What Worked)",
            description:
              "Each Platform Contributed Differently To Engagement Growth And Audience Visibility.",
            points: [
              "Instagram Delivered Stronger Engagement Through Visual Educational Content",
              "LinkedIn Improved Credibility And Professional Educational Positioning",
              "Twitter Increased Visibility During Real-Time Academic Discussions",
              "Consistent Publishing Improved Reach Stability And Interaction Consistency",
            ],
          },
          {
            number: "04",
            title: "Best Practices Implemented",
            description:
              "Execution Focused On Consistency, Educational Relevance, And Audience-Focused Communication.",
            points: [
              "Audience-First Educational Content Planning",
              "Platform-Specific Messaging And Content Formats",
              "Consistent Posting Cadence Aligned With Exam Cycles",
              "Structured Storytelling For Stronger Engagement",
            ],
          },
          {
            number: "05",
            title: "Governance & Growth",
            description:
              "Performance Improvements Were Maintained Through Continuous Monitoring And Optimization.",
            points: [
              "Engagement Insights Guided Ongoing Content Refinement",
              "High-Performing Educational Themes Were Scaled Across Formats",
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
              "From inconsistent engagement and fluctuating reach → to a structured cross-platform strategy delivering stronger interaction and scalable growth.",
          },
          {
            title: "What Changed",
            content: [
              "Content became aligned with student demand and exam cycles",
              "Messaging improved in relevance, clarity, and educational value",
              "Platform-specific optimization strengthened audience interaction",
              "Consistency improved engagement stability and reach performance",
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
            label: "ENGAGEMENT GROWTH",
            oldValue: "Baseline",
            newValue: "2–3X",
            badges: ["peak-month growth", "stronger audience interaction"],
          },
          {
            label: "REACH INCREASED",
            oldValue: "Baseline",
            newValue: "+40–60%",
            badges: ["higher visibility", "cross-platform consistency"],
          },
        ]}
        highlights={[
          "Improved audience interaction and engagement consistency",
          "Reduced performance fluctuation across Instagram, LinkedIn, and Twitter",
        ]}
        details={[
          {
            content:
              "Peak-phase content consistently delivered stronger engagement, higher visibility, and more stable interaction patterns compared to earlier campaign phases.",
            fullWidth: true,
          },
        ]}
      />
      <CommonDivider />
      <StaticPaidCampaignPerformance ctaText={"Looking to improve your social media performance, audience engagement, and content reach? Let’s connect and build a strategy designed for measurable growth."} />
    </div>
  );
};

export default page;

export const metadata = {
  title: "Scaling Social Media Growth for an Education Brand",
  description: "Educational storytelling and platform-specific content increased engagement, strengthened reach, and improved student interaction across key channels.",
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