import CommonMetrix from "../common/CommonMetrix";

export const Objectives = () => {
  const pointList = [
    "Increase demo requests by 60%",
    "Reduce bounce rate below 45%",
    "Improve average session duration to 2+ minutes",
    "Increase organic landing page conversions",
    "Create a scalable web foundation for future campaigns",
  ];

  const statsData = [
    {
      title: "Lead Volume",
      number: "+60%",
      description: "Demo Requests",
    },
    {
      title: "Lead Quality",
      number: "+40%",
      description: "Qualified Leads",
    },
    {
      title: "Engagement",
      number: "<45%",
      description: "Bounce Rate",
    },
    {
      title: "Conversion Rate",
      number: "+32%",
      description: "LP Conversions",
    },
  ];

  return (
    <CommonMetrix
      title="Objectives and Success Metrics"
      description="Primary goal was to transform the website into a consistent lead-generation channel."
      points={pointList}
      stats={statsData}
    />
  );
};
