import React from "react";
import { CommonCampaignExecution } from "../common/CommonCampaignExecution";

export const CampaignExecution = () => {
  const data = {
    title: "Campaign <span class='accent'>Execution</span>",
    cards: [
      {
        icon: "chart",
        title: "Ad Structure",
        description: "Segmented campaigns across platforms based on location, audience type, and intent level to improve targeting efficiency."
      },
      {
        icon: "pin",
        title: "Creatives Used",
        description: "Static creatives, workspace visuals, carousel formats, and conversion-focused messaging highlighting flexibility and business value."
      },
      {
        icon: "megaphone",
        title: "Landing Page Approach",
        description: "Directed users to high-intent landing pages with strong CTAs, optimized forms, and messaging aligned with campaign intent."
      },
      {
        icon: "flask",
        title: "A/B Testing Strategy",
        description: "Tested multiple creative variations, messaging angles, and audience segments to identify high-performing combinations."
      },
      {
        icon: "settings",
        title: "Optimization Approach",
        description: "Continuously optimized campaigns through bid adjustments, audience refinement, keyword tuning, and funnel-level improvements."
      }
    ]
  };

  return <CommonCampaignExecution {...data} />;
};
