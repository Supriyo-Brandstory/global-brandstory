import { CommonOptionSelector } from "../common/CommonOptionSelector"

export const StrapiGrowth = ({ data }) => {
    if (!data) return null;
    const { title, description, tabs } = data;

    const desc = description || "fallback"

    const options = tabs?.map((tab) => ({
        heading: tab.title,
        description: tab.para
    })) || [];

    return (
        <CommonOptionSelector title={title} description={desc} options={options} />
    )
}