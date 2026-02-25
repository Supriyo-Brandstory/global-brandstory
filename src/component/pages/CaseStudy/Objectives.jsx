import CommonMetrix from "../common/CommonMetrix";

export const Objectives = ({ data }) => {
  if (!data) return null;
  const { title, points, description, metric } = data;

  const pointList = [
    "Increase demo requests by 60%",
    "Reduce bounce rate below 45%",
    "Improve average session duration to 2+ minutes",
    "Increase organic landing page conversions",
    "Create a scalable web foundation for future campaigns",
  ];

  const newPointlist = points.map((point) =>
    `${point?.point}`
  ) || [];

  const newStatsData = metric.map((stats) => ({
    title: stats?.caseMetric,
    number: stats?.metricValue,
    description: stats?.description
  }))


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
      title={title}
      description={description}
      points={newPointlist}
      stats={newStatsData}
    />
  );
};
