export const DATA_RIGHTS_REQUEST_TYPES = [
  "Access",
  "Correction",
  "Deletion",
  "Portability",
  "Restrict/Object",
  "Withdraw Consent",
  "Opt Out of Sale/Sharing/Targeted Advertising",
  "Appeal",
  "India Grievance",
  "Marketing Opt-out",
  "Other",
];

export const DATA_RIGHTS_RELATIONSHIPS = [
  "Website visitor",
  "Enquirer/lead",
  "Client contact",
  "Candidate",
  "Other",
];

const dataRightsRequest = {
  slug: "data-rights-request",
  title: "Data Rights Request",
  metaTitle: "Data Rights Request | BrandStory Global",
  metaDescription:
    "Submit a privacy request to BrandStory Global for access, deletion, opt-out and related rights.",
  intro:
    "Use this form to make a privacy request. Availability of a particular right depends on your location and applicable law. You may also use Cookie Preferences for immediate cookie choices and unsubscribe links for marketing email.",
  noticeBelowForm:
    "We use the information in this form to locate relevant records, verify the request, communicate with you and maintain a compliance log. Do not upload identity documents unless we specifically request them through an approved secure method. We may ask for additional information where reasonably necessary and permitted by law. See our <a href=\"/privacy-policy\">Privacy Policy</a>.",
  declarationLabel:
    "I confirm that the information in this request is accurate and that I am the person identified, or I am authorised to act for that person.",
  authorisedAgentNote:
    "If you are an authorised agent, we may request proof of authority and may separately verify the individual’s identity. Do not upload identity documents through this form unless we specifically request them through an approved secure method.",
  sections: [],
};

export default dataRightsRequest;
