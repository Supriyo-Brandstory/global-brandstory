const cookiePolicy = {
  slug: "cookie-policy",
  title: "Cookie Policy",
  metaTitle: "Cookie Policy | BrandStory Global",
  metaDescription:
    "How BrandStory Global uses cookies and similar technologies, including GA4, GTM, Clarity and consent controls.",
  intro:
    "This Cookie Policy explains how BrandStory Global uses cookies and similar technologies on brandstoryglobal.com. It should be read with our <a href=\"/privacy-policy\">Privacy Policy</a>.",
  sections: [
    {
      title: "1. What cookies and similar technologies are",
      paragraphs: [
        "Cookies are small files stored on a device. Similar technologies include local storage, tags, pixels, SDKs and identifiers. They can support essential operation, remember choices, measure use and, if activated, support advertising.",
      ],
    },
    {
      title: "2. Categories used on this website",
      list: [
        "<strong>Strictly necessary</strong> — Security, consent records, form operation and other functions required for a service the visitor requests. Always active where genuinely necessary.",
        "<strong>Analytics</strong> — Measure visits, page use, conversions, technical performance and aggregated trends, including GA4. Off until consent where required.",
        "<strong>Experience / session analytics</strong> — Understand page interactions, heatmaps and session playback, including Microsoft Clarity. Off until consent where required.",
        "<strong>Advertising</strong> — Measure or personalise ads, build audiences or support cross-site advertising. Do not activate unless actually installed, disclosed and permitted by the visitor's choices.",
      ],
    },
    {
      title: "3. Tools currently identified",
      paragraphs: [
        "<strong>Google Tag Manager</strong> — Used to manage website tags. It should be configured so tags in optional categories do not fire before the required permission is available. The production tag inventory is the controlling record.",
        "<strong>Google Analytics 4</strong> — Used to measure traffic, engagement and enquiry conversions. Consent Mode should default optional storage signals to denied where prior consent is required.",
        "<strong>Microsoft Clarity</strong> — Interaction analytics, heatmaps and session playback. Form fields and sensitive areas must be masked, and Clarity must be held until applicable consent is received.",
        "<strong>monday CRM</strong> — Receives information only after a visitor chooses to submit a form. It is a business system for the submitted enquiry rather than a general tracking cookie.",
      ],
    },
    {
      title: "4. Cookie inventory",
      paragraphs: [
        "<strong>Developer action required before publication:</strong> Run an automated cookie scan on production before consent, after accepting each category, and after rejecting optional categories. Replace the placeholders below with actual cookie name, provider, host, purpose, category, duration and first/third-party status.",
      ],
      list: [
        "[CMP consent record] — Stores consent choices and proof of consent — Strictly necessary — [VERIFY duration]",
        "[GA4 cookies found by scan] — Google — Website analytics and conversion measurement — Analytics — [VERIFY]",
        "[Clarity cookies found by scan] — Microsoft — Interaction analytics, heatmaps and session playback — Experience / analytics — [VERIFY]",
        "[Form security/integration technology] — [VERIFY] — Submits and protects enquiry forms — Strictly necessary — [VERIFY]",
        "[Any advertising tags] — [VERIFY OR REMOVE ROW] — Advertising measurement or audience use — Advertising — [VERIFY]",
      ],
    },
    {
      title: "5. Managing your choices",
      paragraphs: [
        "Use the “Cookie Preferences” control in the footer to accept, reject or change optional categories. Rejecting optional cookies must be as easy as accepting them. Changing a preference should stop future optional collection and, where technically possible, clear non-essential first-party cookies already set.",
        "Browser settings can also block or delete cookies, although parts of the website may work differently. Where applicable, the website recognises Global Privacy Control as an opt-out of sale, sharing or targeted advertising.",
      ],
    },
    {
      title: "6. Changes and contact",
      paragraphs: [
        "We may update this Cookie Policy when tools or practices change. For questions, contact [INSERT PRIVACY EMAIL, RECOMMENDED: privacy@brandstoryglobal.com].",
      ],
    },
  ],
};

export default cookiePolicy;
