import React from "react";
import { CommonStats2 } from "../common/CommonStats2";

export const Stats = () => {
  const data = {
    summaryLabel: "EXECUTIVE SUMMARY",
    summaryQuote: "Scaled high-intent lead generation through a multi-channel PPC strategy, significantly increasing conversion volume while improving cost efficiency across platforms.",
    stats: [
      {
        value: "3",
        title: "PLATFORMS",
        subText: "Google · Meta · LinkedIn",
      },
      {
        value: "PPC",
        title: "CAMPAIGN TYPE",
        subText: "Lead Generation Focus",
      },
      {
        value: "B2B",
        title: "BUSINESS MODEL",
        subText: "Workspace Solutions",
      },
    ],
  };

  return <CommonStats2 {...data} />;
};
