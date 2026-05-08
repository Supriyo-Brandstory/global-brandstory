import React from "react";
import { CommonStrategyPlanning } from "../common/CommonStrategyPlanning";

export const StrategyPlanning = () => {
  const data = {
    title: "Strategy <span>&</span> <span class='accent'>Planning</span>",
    items: [
      {
        icon: "users",
        title: "Audience Targeting Strategy",
        description: "Location-based targeting across key Bangalore clusters combined with high-intent search users, behavioral segmentation, and role-based targeting for enterprise decision-makers."
      },
      {
        icon: "search",
        title: "Keyword / Interest Strategy",
        description: "Focused on high-intent keywords such as coworking spaces, managed offices, and location-based queries, supported by behavioral targeting on Meta platforms."
      },
      {
        icon: "layers",
        title: "Funnel Strategy",
        description: "TOFU: Awareness via Meta & LinkedIn · MOFU: Retargeting and engagement campaigns · BOFU: High-intent search campaigns on Google Ads."
      },
      {
        icon: "pin",
        title: "Creative Strategy",
        description: "Used real workspace visuals and business-focused messaging to build trust and improve engagement."
      },
      {
        icon: "dollar",
        title: "Budget Allocation Strategy",
        description: "Allocated budgets strategically: Google Ads for conversions, Meta Ads for scale and retargeting, and LinkedIn Ads for precision B2B targeting."
      }
    ]
  };

  return <CommonStrategyPlanning {...data} />;
};
