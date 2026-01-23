import CommonTextOnly from "@/component/pages/common/CommonTextOnly";

export const Terms = () => {
   const data = [
  {
    title: "About BrandStory",
    paragraphs: [
      "BrandStory Is A Full-Stack Digital Agency Providing Branding, Design, Technology, And Digital Marketing Services To Clients Across Industries And Geographies.",
      "These Terms Apply To All Visitors, Users, Clients, And Partners Interacting With BrandStory Through This Website."
    ]
  },
  {
    title: "Use of the Website",
    paragraphs: [
      "You Agree To Use This Website Only For Lawful Purposes And In A Manner That Does Not Infringe The Rights Of, Restrict, Or Inhibit The Use Of This Website By Others.",
      "You Must Not:"
    ],
    list: [
      "Misuse The Website Or Its Content",
      "Attempt To Gain Unauthorized Access To Systems Or Data",
      "Use The Website To Transmit Harmful Or Malicious Content"
    ]
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "All Content On This Website—Including Text, Graphics, Logos, Visuals, Designs, Code, And Layouts—Is The Intellectual Property Of BrandStory Unless Otherwise Stated.",
      "You May Not:"
    ],
    list: [
      "Copy, Reproduce, Or Distribute Website Content Without Written Permission",
      "Use BrandStory's Branding, Trademarks, Or Assets For Commercial Purposes Without Authorization"
    ]
  },
  {
    title: "Services & Engagements",
    paragraphs: [
      "Any Services Provided By BrandStory Are Subject To:"
    ],
    list: [
      "Separate Agreements, Proposals, Or Contracts",
      "Defined Scopes Of Work, Timelines, And Deliverables"
    ],
    paragraphsAfter: [
      "Website Information Does Not Constitute A Binding Offer Unless Explicitly Stated In A Written Agreement."
    ]
  },
  {
    title: "Payments & Commercial Terms",
    paragraphs: [
      "All Commercial Terms, Including Pricing, Payment Schedules, And Refund Policies, Are Defined Within Individual Client Agreements.",
      "BrandStory Reserves The Right To Suspend Services For Non–Payment Or Breach Of Contractual Obligations."
    ]
  },
  {
    title: "Third-Party Links & Tools",
    paragraphs: [
      "This Website May Include Links To Third-Party Websites Or Tools For Convenience And Reference. BrandStory:"
    ],
    list: [
      "Does Not Control Or Endorse Third-Party Content",
      "Is Not Responsible For Third-Party Policies, Practices, Or Availability"
    ]
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "BrandStory Shall Not Be Liable For Any Direct, Indirect, Incidental, Or Consequential Damages Arising From:"
    ],
    list: [
      "Use Or Inability To Use The Website",
      "Reliance On Website Information",
      "Technical Interruptions Or Errors"
    ],
    paragraphsAfter: [
      "Use Of The Website Is At Your Own Risk."
    ]
  },
  {
    title: "Disclaimer",
    paragraphs: [
      "Website Content Is Provided “As Is” And “As Available” Without Warranties Of Any Kind, Express Or Implied. BrandStory Does Not Guarantee:"
    ],
    list: [
      "Accuracy Or Completeness Of Content",
      "Uninterrupted Or Error-Free Operation"
    ]
  },
  {
    title: "Privacy",
    paragraphs: [
      "Your Use Of This Website Is Also Governed By Our Privacy Policy, Which Outlines How Personal Data Is Collected, Used, And Protected."
    ]
  },
  {
    title: "Termination",
    paragraphs: [
      "BrandStory Reserves The Right To:"
    ],
    list: [
      "Restrict Or Terminate Access To The Website",
      "Take Appropriate Legal Action In Case Of Misuse Or Violation Of These Terms"
    ]
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These Terms & Conditions Are Governed By And Interpreted In Accordance With The Laws Of India.",
      "Any Disputes Shall Be Subject To The Exclusive Jurisdiction Of Courts Located In Bengaluru, India."
    ]
  },
  {
    title: "Changes to These Terms",
    paragraphs: [
      "BrandStory May Update These Terms & Conditions At Any Time Without Prior Notice.",
      "Continued Use Of The Website After Changes Are Posted Constitutes Acceptance Of The Updated Terms."
    ]
  }
];

    return (
       <CommonTextOnly data={data} />
    );
}