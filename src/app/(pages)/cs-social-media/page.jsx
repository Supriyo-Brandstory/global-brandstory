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
        heading={"How Content Strategy Scaled Engagement for an EdTech Brand"}
        description2={
          "Achieved 2–3X growth in engagement with improved reach and interaction"
        }
        description={
            "An EdTech brand focused on VLSI training and career-focused technical education, aiming to build awareness, engage students, and drive interest in technical learning programs."
        }
        meta={[
          { label: "Industry", value: "Education / EdTech" },
          {
            label: "Project Type",
            value: "Social Media Optimization",
          },
          { 
            label: "Platform Targeted", 
            value: "Instagram & LinkedIn" 
          },
        ]}
        // stats={[
        //   { value: "104%", label: "Increase in Organic Traffic" },
        //   { value: "113%", label: "Growth in Keyword Rankings" },
        //   { value: "23%", label: "Increase in Organic Traffic Value" },
        // ]}
      />
      <CommonChallengesObjectives 
      desc={"The brand’s social media presence lacked consistency in engagement and reach, resulting in low audience interaction and limited content impact despite regular posting."}
      title="The Challenges and Objectives"
        challenges={{
          title: "Key Challenges",
          items: [
            "Low engagement across posts despite consistent activity",
            "Inconsistent reach due to lack of algorithm alignment",
            "Content not structured around audience intent",
            "Limited differentiation in messaging",
            "Weak content direction for career-focused audience",
          ],
        }}
        objectives={{
          title: "Campaign Objectives",
          items: [
            "Improve engagement rate across platforms",
            "Increase reach and content visibility",
            "Align content with student learning intent",
            "Strengthen brand positioning as a career-focused EdTech platform",
            "Build consistent audience interaction",
          ],
        }}
      />

      <CommonDivider />
      <CommonImageGrid 
        images={[
            "/images/cs-social-media/1.png",
        "/images/cs-social-media/2.png",
        "/images/cs-social-media/3.png",
        ]}
      />
      <CsStepCards
        title="Strategic Approach"
        description="The strategy focused on aligning content with user intent while improving consistency and relevance across platforms."
        cards={[
          {
            number: "1",
            title: "Audience Alignment",
            content:
              "Content was restructured around student interests, career goals, and industry relevance to improve engagement quality.",
          },
          {
            number: "2",
            title: "Content Structuring",
            content:
              "Introduced a clear content framework combining education, awareness, and aspirational storytelling.",
          },
          {
            number: "3",
            title: "Platform Optimization",
            content:
              "Content formats and messaging were adapted for Instagram (engagement-led) and LinkedIn (credibility-led).",
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
                    description: "<ul><li>Developed educational posts focused on VLSI learning concepts</li><li>Created career-driven content highlighting industry opportunities</li><li>Used structured content formats such as carousels and informative posts</li><li>Maintained a consistent posting cadence</li></ul>"
                },
                {
                    icon: "users",
                    title: "Creative Approach",
                    description: "<ul><li>Visual-first content for Instagram engagement</li><li>Informational and authority-driven content for LinkedIn</li><li>Clean, structured layouts for better readability</li><li>Messaging aligned with career outcomes</li></ul>"
                },
                {
                    icon: "users",
                    title: "Optimization Approach",
                    description: "<ul><li>Continuous monitoring of engagement metrics</li><li>Refinement of content topics based on performance</li><li>Improvement of format and clarity for better interaction</li><li>Iterative updates based on audience response</li></ul>"
                }
            ]}
      />

      <CsProcess
        title="Our Process"
        steps={[
            {
                number: "01",
                title: "Process Overview",
                description:
                "A Structured Content System Was Built To Improve Engagement By Aligning Audience Intent With Platform Behavior.",
                points: [
                    "Focused On Student-Driven Content Strategy",
                    "Aligned Content With Learning And Career Goals",
                    "Structured For Consistent Engagement Growth",
                    "Designed To Scale Interaction Across Platforms",
                ],
            },
            {
                number: "02",
                title: "Content Planning",
                description:
                    "Content Was Planned To Engage Users Across Learning, Career, And Aspirational Stages.",
                points: [
                    "Educational Content Around VLSI Concepts And Technical Learning",
                    "Career-Focused Content Highlighting Job Opportunities And Industry Relevance",
                    "Aspirational Content To Strengthen Emotional Connection",
                    "Covered Awareness, Engagement, And Consideration Stages",
                ],
            },
            {
                number: "03",
                title: "Distribution & Attribution (What Worked)",
                description:
                    "Each Platform Contributed Differently To Engagement And Audience Interaction.",
                points: [
                    "Instagram Drove Higher Engagement Through Visual And Short-Format Content.",
                    "LinkedIn Improved Credibility And Professional Audience Interaction",
                    "Carousel Formats Delivered Stronger Engagement Due To Content Depth",
                    "Consistent Posting Improved Reach Stability And Visibility",
                ],
            },
            {
                number: "04",
                title: "Best Practices Implemented",
                description:
                    "Execution Focused On Structured Content Delivery And Continuous Improvement.",
                points: [
                    "Audience-First Content Aligned With Student Intent",
                    "Platform-Specific Messaging For Instagram And LinkedIn",
                    "Consistent Publishing Frequency To Improve Reach",
                    "Structured Formats For Better Readability And Interaction",
                    "Educational Storytelling To Improve Engagement",
                ],
            },
            {
                number: "05",
                title: "Governance & Growth",
                description:
                "Performance Was Maintained Through Continuous Monitoring And Optimization.",
                points: [
                    "Engagement Metrics Used To Refine Content Direction",
                    "High-Performing Topics Scaled Across Formats",
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
            content: "From inconsistent engagement and low reach → to structured content delivering higher interaction and stable visibility"
          },
          {
            title: "What Changed",
            content: [
              "Content became audience-focused and intent-driven",
              "Messaging improved clarity and relevance",
              "Formats were optimized for engagement",
              "Consistency improved reach and visibility"
            ]
          }
        ]}
      />
      <CommonDivider />
      <CsPerformance
        title="Results /"
        titleHighlight="Impact"
        stats={[
          {
            label: "CTR IMPROVED",
            oldValue: "2.09%",
            newValue: "4.61%",
            badges: ["+121% growth", "consistent click volume"],
          },
          {
            label: "ENGAGEMENT INCREASED",
            oldValue: "5.98%",
            newValue: "7.55%",
            badges: ["+26% growth", "consistent click volume"],
          },
        ]}
        highlights={[
          "Improved reach and visibility across platforms",
          "Stronger audience interaction and response consistency",
        ]}
        details={[
          {
            content:
              "Later-phase content consistently delivered higher engagement and improved audience response compared to the initial phase.",
            fullWidth: true,
          },
        ]}
      />
      <CommonDivider />
      <StaticPaidCampaignPerformance />
    </div>
  );
};

export default page;
