const subprocessors = {
  slug: "subprocessors",
  title: "Subprocessor and Website Vendor List",
  metaTitle: "Subprocessors | BrandStory Global",
  metaDescription:
    "Third parties that may process personal information for BrandStory Global website and enquiries.",
  intro:
    "This page identifies third parties that may process personal information for BrandStory in connection with the website, enquiries or relevant client services. The list must be completed from contracts and production configuration.",
  sections: [
    {
      title: "Website vendors",
      list: [
        "<strong>Google LLC / relevant Google contracting entity</strong> — Google Tag Manager and Google Analytics 4 — Online identifiers, device, page, event and consent data — [CONFIRM property and transfer terms] — Known website vendor.",
        "<strong>Microsoft Corporation / relevant Microsoft contracting entity</strong> — Microsoft Clarity interaction analytics and session playback — Online identifiers, device, page, interaction and masked DOM data — [CONFIRM project and terms] — Known website vendor.",
        "<strong>monday.com Ltd. / relevant contracting entity</strong> — monday CRM for enquiry and relationship management — Submitted contact, company, enquiry, attribution and communication data — [CONFIRM account region and terms] — Known website vendor.",
        "<strong>[Hosting/CDN provider]</strong> — Website hosting, delivery and security — [CONFIRM] — Required input.",
        "<strong>[Form/integration provider]</strong> — Form processing and CRM transfer — [CONFIRM] — Required input.",
        "<strong>[Email provider]</strong> — Acknowledgements and business communications — [CONFIRM] — Required input.",
        "<strong>Custom first-party CMP (BrandStory)</strong> — Consent banner, records and preference centre — Consent status, device/browser and timestamp — Processed in the visitor browser / first-party storage — Selected.",
      ],
      paragraphsAfter: [
        "For client-processing subprocessors, publish the relevant separate list or clearly distinguish website vendors from processors used in client delivery. Provide a method for contracted clients to subscribe to material-change notices.",
      ],
    },
  ],
};

export default subprocessors;
