import CommonAccordion from "../common/CommonAccordion";



export default function StrapiTest({ data }) {
    // console.log("consoling the data from the test page : ", data)
    const accordionResponse = data?.accordion;

    const accordionData = accordionResponse?.map((item) => {
        return {
            title: item?.title,
            content: item?.para,
        }
    })

    const accordionData1 = [
        {
            title: "1. Global Reach",
            content:
                "From Asia to the Middle East, our international photography services bring visual consistency to every project. We have successfully executed 500+ shoots across 8 countries, ensuring your brand looks its best.",
        },
        {
            title: "2. Expert Team",
            content:
                "Our network of photographers and editors are masters in commercial imagery. Backed by years of experience, we are recognized as a professional corporate photography company in India, delivering excellence across every frame.",
        },
        {
            title: "3. Advanced Technology",
            content:
                "We invest in the latest mirrorless cameras, drone setups, and AI-enhanced editing suites. Every shoot meets global standards of detail and sharpness, a benchmark for any commercial photography studio.",
        },
        {
            title: "4. Creative Precision",
            content:
                "Every shot begins with intent. As a branding photography agency, we focus on storytelling through light, tone, and composition to create images that do more than impress — they convert.",
        },
    ];
    return (
        <section className="flex justify-center items-center">
            <div className="px-4">
                <CommonAccordion title={data?.title} subheding1={data?.orangeText} subheding2={data?.para} items={accordionData} footer={data?.bottomPara} renderType="dynamic" />
            </div>
        </section>
    )
}