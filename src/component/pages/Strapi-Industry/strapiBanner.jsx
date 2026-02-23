import { CommonBanner3 } from "../common/CommonBanner3";

export const StrapiBanner = ({ data }) => {
    if (!data) return null;
    const { title, description, highlights, button1, button2 } = data;
    return (
        <CommonBanner3
            heading={title || "fallback - title"}

            description={description || "fallback - description"}

            highlights={highlights?.map((item => item.highlight)) || []}
            primaryCtaText={button1?.buttonLabel}
            primaryCtaLink={button1?.buttonUrl}
            secondaryCtaText={button2?.buttonLabel}
            secondaryCtaLink={button2?.buttonUrl}
        />
    );
};
