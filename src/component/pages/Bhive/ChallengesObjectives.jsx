import React from "react";
import { CommonChallengesObjectives } from "../common/CommonChallengesObjectives";

export const ChallengesObjectives = () => {
  const data = {
    title: "Challenges <span>&</span> <span class='accent'>Objectives</span>",
    desc: "",
    challenges: {
      title: "Key Challenges",
      items: [
        "High competition in workspace-related keywords",
        "Rising acquisition costs across search platforms",
        "Balancing lead volume with quality",
        "Multi-location targeting complexity",
        "Limited funnel segmentation in earlier campaigns",
      ],
    },
    objectives: {
      title: "Campaign Objectives",
      items: [
        "Scale qualified leads",
        "Reduce cost per acquisition",
        "Improve MQL and SQL consistency",
        "Strengthen high-intent targeting",
        "Build a scalable multi-channel funnel",
      ],
    },
  };

  return <CommonChallengesObjectives {...data} />;
};
