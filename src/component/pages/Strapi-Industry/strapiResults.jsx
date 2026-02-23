import { CommonBigIndexScrollable3 } from "../common/CommonBigIndexScrollable3";

export const StrapiResults = ({ data }) => {
    if (!data) return null;
    const { title, item } = data;

    const labels = item?.map((i) => ({
        subTitle: i.title,
        description: i.description,
    })) || [];

    return (
        <CommonBigIndexScrollable3
            data={labels}
            heading={title || "fallback - title"}
        />
    );
};