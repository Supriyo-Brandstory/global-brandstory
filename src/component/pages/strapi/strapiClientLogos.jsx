import LocationTrustedBy from "../common/LocationTrustedBy";

function resolveMediaUrl(media, strapiUrl) {
  const url =
    media?.url ||
    media?.formats?.large?.url ||
    media?.formats?.medium?.url ||
    media?.formats?.small?.url ||
    media?.formats?.thumbnail?.url;

  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("data:")) {
    return url;
  }
  const base = (strapiUrl || "").replace(/\/$/, "");
  return `${base}${url.startsWith("/") ? url : `/${url}`}`;
}

function normalizeLogos(logos) {
  if (!logos) return [];
  if (Array.isArray(logos)) return logos;
  if (Array.isArray(logos?.data)) return logos.data;
  return [];
}

export const StrapiClientLogos = ({ data }) => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE || "";
  const title = data?.title || "";

  const logos = normalizeLogos(data?.logos)
    .map((item) => {
      const media = item?.attributes || item;
      const src = resolveMediaUrl(media, strapiUrl);
      if (!src) return null;
      return {
        src,
        alt: media?.alternativeText || media?.name || title || "Client logo",
      };
    })
    .filter(Boolean);

  if (!logos.length) return null;

  return <LocationTrustedBy title={title} logos={logos} />;
};

export default StrapiClientLogos;
