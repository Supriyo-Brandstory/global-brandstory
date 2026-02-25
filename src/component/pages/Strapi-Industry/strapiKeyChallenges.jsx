import CommonAccordion2 from '../common/CommonAccordion2';

export const StrapiKeyChallenges = ({ data }) => {
    if (!data) return null;

    const { title, accordion } = data;

    const accordionData = accordion?.map((item) => ({
        title: item.title,
        para: item.para,
    })) || [];

    return (
        <CommonAccordion2
            title={title}
            items={accordionData}
        />
    );
};