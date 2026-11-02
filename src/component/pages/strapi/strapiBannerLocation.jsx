import { CommonBannerLocation } from "../common/CommonBannerLocation";

/** Parse Strapi value like "11+ Years", "92%", "10M+" → number + trailing text for count-up. */
function parseStatValue(raw) {
  const str = String(raw || "").trim();
  const match = str.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { value: 0, suffix: str };
  }
  return {
    value: Number(match[1]),
    suffix: match[2] ?? "",
  };
}

export const StrapiBannerLocation = ({ data }) => {
  const buttons = data?.buttons || [];

  const stats = (data?.stats || [])
    .filter((item) => item?.value)
    .map((item) => {
      const parsed = parseStatValue(item.value);
      return {
        value: parsed.value,
        suffix: parsed.suffix,
        headline: "",
        label: item?.label || "",
      };
    });

  return (
    <CommonBannerLocation
      heading={data?.sectionHeading}
      paragraph={data?.orangeText}
      paragraph2={data?.bannerPara}
      buttonText={buttons[0]?.buttonLabel}
      buttonText2={buttons[1]?.buttonLabel}
      buttonLink={buttons[0]?.buttonUrl}
      buttonLink2={buttons[1]?.buttonUrl}
      renderType="dynamic"
      stats={stats.length > 0 ? stats : undefined}
    />
  );
};

export default StrapiBannerLocation;
