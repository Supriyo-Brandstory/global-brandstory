import { CommonBanner3 } from "../common/CommonBanner3";

export const Banner = ({ data }) => {
  if (!data) return null;
  const { title, servicesDelivered, marketGeo, industry, businessModel, bannerPara, bannerTraffic } = data;

  return (
    <CommonBanner3
      heading={title}
      meta={[
        { title: "Industry", value: industry },
        { title: "Market / Geography", value: marketGeo },
        { title: "Business Model", value: businessModel },
        { title: "Services Delivered", value: servicesDelivered },
      ]}
      description={bannerPara}
      stats={bannerTraffic?.map((stat) => ({
        value: stat?.trafficNum,
        label: stat?.desc,
      }))}
    />
  );
};
