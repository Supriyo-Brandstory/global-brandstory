import CommonFAQ from "../common/CommonFAQ";

export default function StrapiFaq({ data }) {
    // console.log("Consoling the StrapiFaq data : ", data);

    const faqData = data?.faq?.map((item)=>({
        title: item.question,
        description: item.answer
    }))

    // console.log("Consoling the faqData : ", faqData);

    return (
        <CommonFAQ data={faqData} />
    )
}