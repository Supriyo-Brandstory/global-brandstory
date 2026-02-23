import CommonAdvertise from "../common/CommonAdvertise"

export const StrapiAdv = ({ data }) => {
    if (!data) return null;

    const { title, para, button1Label, button1Url, button2Label, button2Url } = data;

    return (
        <CommonAdvertise
            title1={title}
            description={para}
            btn1={button1Label}
            btn2={button2Label}
            btnOneLink={button1Url}
            btnTwoLink={button2Url}
            footerText=""
        />
    )
}