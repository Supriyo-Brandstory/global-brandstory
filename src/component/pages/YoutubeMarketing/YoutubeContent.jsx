import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const YoutubeContent = ()=>{
    const data = {
  heading: "YouTube Content Strategy That Fits Your Brand",
  subHeading: "To have a successful YouTube channel, means to have a purpose-driven plan. Whatever you post needs to have its own value, every video needs a reason to exist, and every upload should guide viewers closer to your business goals. We help you build a custom content strategy that aligns with your audience, industry, and brand identity.",
  rows: [
    {
      img: "/images/YoutubeMarketing/image.png",
      alt: "PPC Report",
      
      text: [
          "We start with audience and competitor research, start our work with seeing who your audience are, analyze what your competitors are doing and see where we can make a difference. Right after that, we map out a content calendar that includes:<br/><br/>",
          "<ul><li><b>Video themes:</b> Tutorials, product demos, testimonials, or thought-leadership pieces.</li></ul><br/>",
          "<ul><li><b>Upload frequency:</b> We believe in consistency, posting regularly to keep your audience engaged and signaling growth to YouTube’s algorithm.</li></ul><br/>",
          "<ul><li><b>Topic prioritization:</b> Our focus is on uploading high-value subjects ensuring every video drives engagement, traffic, and conversions.</li></ul><br/>",
          "The result is a channel that feels curated, professional, and designed to attract the right viewers at the right time. With this structured approach, your channel grows steadily, turning casual viewers into loyal subscribers and potential customers."
    ],
      reverse: true
    }
  ]
};

    return(
        <CommonTwoImgDesc data={data}/>
    )
}