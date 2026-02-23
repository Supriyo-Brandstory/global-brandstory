import { CommonBigIndexScrollable2 } from "../common/CommonBigIndexScrollable2";

export const StrapiObjectives = ({ data }) => {
    if (!data) return null;

    // console.log("consoling the data from the section.objcetive", data);

    const { title, description, cards } = data;

    const heading = title || "fallback - title";

    const cases = cards?.map((card) => ({
        title: card.title,
        description: card.description,
    })) || [];

    return (
        <CommonBigIndexScrollable2
            data={cases}
            heading={heading}
            description={description || "fallback - description"}
            //   caseLabel="Outcome"
            leftPanelWidth="50%"
        />
    );
};