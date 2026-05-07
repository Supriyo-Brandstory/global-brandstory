import React from "react";
import { CommonBusinessContext } from "../common/CommonBusinessContext";

export const BusinessContext = () => {
  const data = {
    title: "Business <span>Context</span>",
    cards: [
      {
        icon: "Building2",
        number: "01",
        title: "About the Business",
        description: "Provides coworking and managed office solutions for startups, SMEs, and enterprises, offering flexible, scalable workspace infrastructure across key locations.",
      },
      {
        icon: "Users",
        number: "02",
        title: "Target Audience",
        description: "Startups, growing businesses, and enterprise teams seeking flexible office solutions and managed workspaces in prime locations.",
      },
      {
        icon: "TrendingUp",
        number: "03",
        title: "Previous Marketing Performance",
        description: "Earlier campaigns were primarily traffic-focused, resulting in moderate conversion consistency and higher acquisition costs due to broad targeting and limited funnel structuring.",
      },
      {
        icon: "Target",
        number: "04",
        title: "Business Goal Behind Campaign",
        description: "To scale high-quality lead generation, improve cost efficiency, and build a structured funnel to capture high-intent users across multiple channels.",
      },
    ],
  };

  return <CommonBusinessContext {...data} />;
};
