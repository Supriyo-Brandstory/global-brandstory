import { CommonBigIndexScrollable2 } from "../common/CommonBigIndexScrollable2";

export const StrapiDigitalMarketing = ({ data }) => {
    if (!data) return null;

    const { title, description, dmcase } = data;
    const heading = title || "fallback - heading";

    const newCases = dmcase?.map((item) => ({
        title: item.title,
        description: `${item.description || ''}<br/><br/><b>Services Include</b><ul>${item.services?.map((service) => `<li>${service.service || ''}</li>`).join('') || ''}</ul><br/><b>Business Impact:</b> ${item.businessImpact || ''}`,
    })) || [];

    return (
        <CommonBigIndexScrollable2
            data={newCases}
            heading={heading}
            description={description || 'fallback - description'}
            leftPanelWidth="50%"
        />
    );
};