import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const ToolsThatMake = ()=>{
    const title = "Tools That Make Promotion Smarter";
    const description = "Running high-impact campaigns requires the right technology. Our content promotion tools simplify complex workflows:";
    const data = [
          {
            "title": "Social Schedulers",
            "description": "Guarantee consistent, on-time posting to keep your brand presence active and reliable.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s30.png"
          },
          {
            "title": "Analytics Platforms",
            "description": "Provide real-time insights into engagement, traffic, and conversions to guide smarter decisions.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s31.png"
          },
          {
            "title": "Monitoring Tools",
            "description": "Detect trends and audience sentiment instantly, helping campaigns stay relevant and responsive.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s22.png"
          },
          {
            "title": "Automation Software",
            "description": "Eliminate repetitive tasks so your team can focus on high-level strategy and creative execution.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s32.png"
          }
        ];
    return (
        <>
            <CommonGridBox3Scrollable title={title} description={description} data={data} />
            <p class="max-w-[1200px] text-[18px] mb-[60px] mx-auto text-center">
                By combining technology with strategy, we ensure campaigns are efficient, scalable, and effective.
            </p>
        </>
    );
}