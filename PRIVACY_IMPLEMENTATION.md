# Privacy Implementation Guide

BrandStory Global custom CMP + legal pack setup.

## Stack notes

- Next.js App Router
- Custom first-party CMP (no Cookiebot/OneTrust)
- GTM container: `GTM-PWWSNR99`
- Enquiry CRM: monday via `/monday-common`
- Privacy requests: `/api/privacy-request` (separate monday board when configured)

## Environment variables

| Variable | Purpose |
|---|---|
| `MONDAY_API_TOKEN` | Server-only monday API token |
| `MONDAY_BOARD_ID` | Sales enquiry board (optional override) |
| `MONDAY_GROUP_ID` | Sales enquiry group (optional override) |
| `MONDAY_PRIVACY_BOARD_ID` | Restricted privacy-request board |
| `MONDAY_PRIVACY_COL_EMAIL` | monday column id for email |
| `MONDAY_PRIVACY_COL_TYPE` | monday column id for request type |
| `MONDAY_PRIVACY_COL_DETAILS` | monday long-text column for request body |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Clarity project id (empty = Clarity off) |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | Documented for ops; GA4 should load via GTM |

Never expose monday tokens to the client.

## Legal config placeholders

Edit [`src/config/legal.js`](src/config/legal.js) before launch:

- `LEGAL_ENTITY_NAME`
- `REGISTERED_ADDRESS`
- `EFFECTIVE_DATE` / `LAST_UPDATED_DATE`
- `GOVERNING_LAW`
- `INDIA_GRIEVANCE_CONTACT`
- emails (privacy / accessibility / security)

Do not convert Security Statement bullets into present-tense claims until verified.

## CMP behaviour

1. Sync Consent Mode v2 defaults = denied (`beforeInteractive` script in layout)
2. Restore stored consent / honour GPC
3. Load GTM after defaults
4. Banner if no choice: Accept All / Reject All / Manage Preferences
5. Categories: Necessary, Analytics, Experience (Clarity), Advertising
6. Footer opens same preference centre for Cookie Preferences and Your Privacy Choices

Storage key: `bsg_consent_v1`

## GTM console TODO (ops)

Code sets Consent Mode signals. GTM tags must still be configured:

- GA4 tags → require `analytics_storage`
- Ads tags → require `ad_storage` / related signals
- Do not fire optional tags on All Pages without consent checks
- Remove unused custom HTML / legacy tags
- Keep a tag register: name, vendor, purpose, trigger, consent type, owner

## Clarity

- Loads only when Experience category granted
- Blocked on `/data-rights-request`
- Form containers use `data-clarity-mask="true"`
- Set `NEXT_PUBLIC_CLARITY_PROJECT_ID` only after consent gating QA

## Cookie scan TODO

Before publishing Cookie Policy inventory table:

1. Fresh browser, no consent → list cookies/network
2. Reject All
3. Analytics only
4. Experience only
5. Accept All
6. Withdraw consent

Replace placeholder rows in [`src/content/legal/cookie-policy.js`](src/content/legal/cookie-policy.js).

## Forms

Enquiry notice version: `ENQUIRY_NOTICE_VERSION` in legal config.

Payload stores:

- submission id, form id, page URL (sensitive query stripped)
- UTM source/medium/campaign
- notice version
- email marketing consent + optional phone/WhatsApp flag
- consent timestamp

Analytics success event is non-PII `generate_lead` only.

## QA checklist

- [ ] Fresh visit: no GA4/Clarity optional storage before choice
- [ ] Reject All blocks optional tags
- [ ] Analytics only does not load Clarity
- [ ] Accept All loads disclosed optional tools only
- [ ] Withdraw stops future optional calls / clears optional cookies where possible
- [ ] GPC forces Advertising off
- [ ] Enquiry reaches monday once with consent evidence; dataLayer has no email/phone/name
- [ ] Rights request creates privacy ticket (or logs when board unset), returns request ID
- [ ] Clarity replay shows masked form fields
- [ ] Footer Legal + preference controls keyboard accessible

## Careers privacy footer

`FEATURE_CAREERS_PRIVACY_FOOTER` stays `false` until a website application form exists. Route `/careers-privacy` is available.
