import { NextResponse } from 'next/server';
import { LEGAL_CONFIG } from '@/config/legal';

function escapeGraphQLString(value) {
  return String(value || '')
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      mail,
      mobile,
      brandName,
      budgetRange,
      services,
      submissionId,
      formId,
      pageUrl,
      noticeVersion,
      emailMarketingConsent,
      phoneWhatsappConsent,
      consentTimestamp,
      utmSource,
      utmMedium,
      utmCampaign,
    } = body;

    if (!name || !mail || !mobile || !brandName || !budgetRange || !services) {
      return NextResponse.json(
        { error: 'Missing required enquiry fields.' },
        { status: 400 }
      );
    }

    const apiToken = process.env.MONDAY_API_TOKEN;
    if (!apiToken) {
      return NextResponse.json(
        { error: 'CRM configuration missing.' },
        { status: 500 }
      );
    }

    const currentDate = new Date().toISOString().split('T')[0];
    const consentMeta = [
      `submission_id: ${submissionId || 'n/a'}`,
      `form_id: ${formId || 'contact_us'}`,
      `page_url: ${pageUrl || ''}`,
      `notice_version: ${noticeVersion || LEGAL_CONFIG.ENQUIRY_NOTICE_VERSION}`,
      `email_marketing_consent: ${Boolean(emailMarketingConsent)}`,
      `phone_whatsapp_consent: ${Boolean(phoneWhatsappConsent)}`,
      `consent_timestamp: ${consentTimestamp || new Date().toISOString()}`,
      `utm_source: ${utmSource || ''}`,
      `utm_medium: ${utmMedium || ''}`,
      `utm_campaign: ${utmCampaign || ''}`,
    ].join('\n');

    const servicesWithConsent = `${services || ''}\n\n--- Consent / attribution ---\n${consentMeta}`;

    const columnValues = {
      text_mm1078ev: brandName || '',
      date_mm10dfpb: { date: currentDate },
      long_text_mm10fad3: { text: servicesWithConsent },
      email_mm10pe83: { email: mail, text: mail },
      phone_mm103pp8: { phone: mobile },
      dropdown_mm10haam: { labels: [budgetRange] },
    };

    const boardId = process.env.MONDAY_BOARD_ID || '5026902925';
    const groupId = process.env.MONDAY_GROUP_ID || 'group_mm10gy3r';

    const query = `
      mutation {
        create_item(
          board_id: ${boardId},
          group_id: "${groupId}",
          item_name: "${escapeGraphQLString(name)}",
          column_values: "${JSON.stringify(columnValues).replace(/"/g, '\\"')}"
        ) {
          id
        }
      }
    `;

    const response = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiToken,
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();

    if (result.errors) {
      console.error('Monday API returned errors:', result.errors);
      return NextResponse.json({ error: result.errors }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      itemId: result.data?.create_item?.id,
      submissionId: submissionId || null,
    });
  } catch (error) {
    console.error('Monday API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
