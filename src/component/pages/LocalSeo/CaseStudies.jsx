import CommonTwoImgDesc from "../common/CommonTwoImgDesc";

export const CaseStudies = () => {
  const data = {
    heading: "Case Studies",
    subHeading: "Here's A Look At How:",
    rows: [
      {
        img: "/images/LocalSeo/cs1.png",
        alt: "Local SEO Success",
        text: [
          "<div style='margin-bottom: 10px;'><b>A Boutique Retailer In Toronto</b></div>" +
            "<ul>" +
            "<li><strong>+65%</strong> Increase In Local Traffic Within 4 Months</li>" +
            "<li><strong>40%</strong> Growth In Walk-In Customers</li>" +
            "<li>Ranked <strong>Top 3</strong> For 12 Location-Based Keywords</li>" +
            `"They Helped Us Go From Barely Visible To Being The First Option Customers See." <br/><br/>` +
            "</ul>",
          "",
          "<div style='margin-bottom: 10px;'><b>A Law Firm In Manchester</b></div>",
          "<ul>" +
            "<li>Doubled Inbound Call Inquiries In 6 Months</li>" +
            "<li>Built Citation Authority Across UK Legal Directories</li>" +
            "<li>Improved Online Reputation From <strong>3.6 To 4.7 Stars</strong></li>" +
            "</ul>",
        ],
        reverse: false,
      },
      {
        img: "/images/LocalSeo/cs2.png",
        alt: "Local SEO Results",
        text: [
          "<div style='margin-bottom: 10px;'><b>A Restaurant Chain In India</b></div>",
          "<ul>" +
            "<li>Ranked <strong>#1</strong> On Google For Key Terms Across 5 Cities</li>" +
            "<li>Local Reviews Jumped From <strong>250 To 800+</strong> Within A Year</li>" +
            "<li>Added New Location Pages That Brought In Organic Traffic City-Wise</li>" +
            "</ul>",
          "<br/>",
          "<div style='margin-bottom: 10px;'><b>A Cleaning Services Company In Ontario</b></div>",
          "<ul>" +
            "<li><strong>50%</strong> More Local Leads Month Over Month</li>" +
            "<li>Google Business Profile Views Increased By <strong>3x</strong></li>" +
            "<li>Built Community Partnerships For Strong Local Backlinks</li>" +
            "</ul>",
          "",
          "<p style='margin-top: 1.5rem;'>If It Can Work For Them, It Can Work For Your Business Too.</p>",
        ],
        reverse: true,
      },
    ],
  };

  return <CommonTwoImgDesc data={data} />;
};
