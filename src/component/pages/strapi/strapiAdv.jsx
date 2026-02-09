import CommonAdvertise from "../common/CommonAdvertise"

export const StrapiAdv = ({data}) =>{
    // console.log("Consoling the StrapiAdv data : ", data)
    return (
        <CommonAdvertise 
            title1={data?.title}
            title2=""
            description={data?.para}
            btn1={data?.button1Label}
            btn2={data?.button2Label}
            btnOneLink={data?.button1Url}
            btnTwoLink={data?.button2Url}
            footerText=""
        />
    )
}
