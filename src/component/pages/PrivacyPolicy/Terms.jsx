import CommonTextOnly from "@/component/pages/common/CommonTextOnly";

export const Terms = () => {
  const data = [
  {
    title: "Information We Collect",
    paragraphs: [
      "We May Collect Information That Helps Us Understand And Serve You Better. This Includes Personal Details You Voluntarily Share With Us, Such As Your Name, Email Address, Phone Number, Company Name, And Any Information Submitted Through Contact Forms Or Inquiries On Our Website.",
      "We Also Collect Non-Personal Information Automatically When You Interact With Our Website. This May Include Details Such As Your IP Address, Browser Type, Device Information, Pages Visited, And Time Spent On The Site. This Data Helps Us Analyze Website Performance, Improve User Experience, And Maintain Platform Security."
    ]
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "The Information We Collect May Be Used To:"
    ],
    list: [
      "Respond To Inquiries And Communication Requests",
      "Provide And Improve Our Services",
      "Understand Website Usage And Performance",
      "Send Updates, Insights, Or Marketing Communications (Where Permitted)",
      "Maintain Security And Prevent Misuse"
    ]
  },
  {
    title: "Cookies & Tracking Technologies",
    paragraphs: [
      "BrandStory Uses Cookies And Similar Technologies To Enhance User Experience And Analyze Website Performance. Cookies Help Us:"
    ],
    list: [
      "Understand User Behavior",
      "Improve Website Functionality",
      "Measure Marketing Effectiveness"
    ],
    paragraphsAfter: [
      "You May Choose To Disable Cookies Through Your Browser Settings. However, Some Features Of The Website May Not Function Properly."
    ]
  },
  {
    title: "Sharing of Information",
    paragraphs: [
      "BrandStory Does Not Sell, Trade, Or Rent Personal Information To Third Parties.",
      "We May Share Information With:"
    ],
    list: [
      "Trusted Service Providers Who Assist In Operating Our Website Or Services",
      "Legal Or Regulatory Authorities If Required By Law"
    ],
    paragraphsAfter: [
      "All Third Parties Are Required To Maintain Confidentiality And Security."
    ]
  },
  {
    title: "Data Security",
    paragraphs: [
      "We Implement Appropriate Technical And Organizational Measures To Protect Your Information From Unauthorized Access, Alteration, Disclosure, Or Destruction.",
      "However, No Digital Transmission Or Storage System Is Completely Secure, And We Cannot Guarantee Absolute Security."
    ]
  },
  {
    title: "Data Retention",
    paragraphs: [
      "Personal Information Is Retained Only For As Long As Necessary To Fulfill The Purposes Outlined In This Policy Or As Required By Law."
    ]
  },
  {
    title: "Third-Party Links",
    paragraphs: [
      "Our Website May Contain Links To Third-Party Websites. BrandStory Is Not Responsible For The Privacy Practices Or Content Of Such External Sites.",
      "We Encourage Users To Review The Privacy Policies Of Third-Party Websites Before Providing Any Personal Information."
    ]
  },
  {
    title: "Your Rights",
    paragraphs: [
      "Depending On Applicable Laws, You May Have The Right To:"
    ],
    list: [
      "Access The Personal Information We Hold About You",
      "Request Correction Or Deletion Of Your Data",
      "Withdraw Consent For Data Processing",
      "Opt Out Of Marketing Communications"
    ],
    paragraphsAfter: [
      "Requests Can Be Made By Contacting Us Using The Details Below."
    ]
  },
  {
    title: "Children’s Privacy",
    paragraphs: [
      "BrandStory Does Not Knowingly Collect Personal Information From Individuals Under The Age Of 18.",
      "If You Believe That A Child Has Provided Us With Personal Information, Please Contact Us And We Will Take Appropriate Steps To Remove Such Data."
    ]
  },
  {
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "BrandStory Reserves The Right To Update This Privacy Policy At Any Time.",
      "Changes Will Be Effective Immediately Upon Posting On This Page. Continued Use Of The Website Indicates Acceptance Of The Updated Policy."
    ]
  }
];


    return (
       <CommonTextOnly data={data} />
    );
}