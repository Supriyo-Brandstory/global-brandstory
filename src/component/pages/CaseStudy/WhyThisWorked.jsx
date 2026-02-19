import CommonMetrix from "../common/CommonMetrix";

export const WhyThisWorked = () => {
  const pointList = [
    "Journey-led navigation improved discoverability",
    "Modular system accelerated iterations",
    "Continuous analytics enabled rapid optimization",
  ];


  return (
    <CommonMetrix
      title="Why This Worked"
      description="A clear structure replaced cluttered messaging, helping visitors quickly understand value and take action. Consistent components reduced friction across pages, while measurable goals kept design and development aligned with outcomes."
    image='/images/CaseStudy/img-3.png'
      points={pointList}
    //   stats={statsData}
    ratio="4:3"
    button='Request a Growth Strategy Review'
    butnLink=""
    />
  );
};
