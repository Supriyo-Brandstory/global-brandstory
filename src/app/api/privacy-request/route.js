import { NextResponse } from "next/server";
import { LEGAL_CONFIG } from "@/config/legal";

function createRequestId() {
  const stamp = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `PR-${stamp}-${rand}`;
}

function sanitize(value, max = 2000) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, max);
}

export async function POST(req) {
  try {
    const body = await req.json();

    const requestType = sanitize(body.requestType, 120);
    const fullName = sanitize(body.fullName, 200);
    const email = sanitize(body.email, 200);
    const telephone = sanitize(body.telephone, 50);
    const countryRegion = sanitize(body.countryRegion, 200);
    const relationship = sanitize(body.relationship, 120);
    const details = sanitize(body.details, 4000);
    const authorisedAgent = body.authorisedAgent === "yes" ? "yes" : "no";
    const declaration = Boolean(body.declaration);
    const pageUrl = sanitize(body.pageUrl, 300);
    const noticeVersion = sanitize(
      body.noticeVersion || LEGAL_CONFIG.ENQUIRY_NOTICE_VERSION,
      40
    );

    if (
      !requestType ||
      !fullName ||
      !email ||
      !countryRegion ||
      !relationship ||
      !details ||
      !declaration
    ) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const requestId = createRequestId();
    const receivedAt = new Date().toISOString();
    const apiToken = process.env.MONDAY_API_TOKEN;
    const boardId = process.env.MONDAY_PRIVACY_BOARD_ID;

    if (apiToken && boardId) {
      const columnValues = {
        ...(process.env.MONDAY_PRIVACY_COL_EMAIL
          ? {
              [process.env.MONDAY_PRIVACY_COL_EMAIL]: {
                email,
                text: email,
              },
            }
          : {}),
        ...(process.env.MONDAY_PRIVACY_COL_TYPE
          ? { [process.env.MONDAY_PRIVACY_COL_TYPE]: requestType }
          : {}),
        ...(process.env.MONDAY_PRIVACY_COL_DETAILS
          ? {
              [process.env.MONDAY_PRIVACY_COL_DETAILS]: {
                text: [
                  `Request ID: ${requestId}`,
                  `Received: ${receivedAt}`,
                  `Phone: ${telephone || "n/a"}`,
                  `Country/Region: ${countryRegion}`,
                  `Relationship: ${relationship}`,
                  `Authorised agent: ${authorisedAgent}`,
                  `Page: ${pageUrl}`,
                  `Notice version: ${noticeVersion}`,
                  "",
                  details,
                ].join("\n"),
              },
            }
          : {}),
      };

      const query = `
        mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
          create_item (board_id: $boardId, item_name: $itemName, column_values: $columnValues) {
            id
          }
        }
      `;

      const mondayRes = await fetch("https://api.monday.com/v2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiToken,
        },
        body: JSON.stringify({
          query,
          variables: {
            boardId: String(boardId),
            itemName: `${requestId} — ${fullName}`.slice(0, 240),
            columnValues: JSON.stringify(columnValues),
          },
        }),
      });

      const mondayJson = await mondayRes.json();
      if (mondayJson.errors) {
        console.error("Privacy monday errors:", mondayJson.errors);
        return NextResponse.json(
          { error: "Unable to queue privacy request." },
          { status: 502 }
        );
      }
    } else {
      console.info("Privacy request stored locally (monday board not configured)", {
        requestId,
        requestType,
        email,
        countryRegion,
        relationship,
        authorisedAgent,
        noticeVersion,
        pageUrl,
        receivedAt,
      });
    }

    return NextResponse.json({
      success: true,
      requestId,
      receivedAt,
    });
  } catch (error) {
    console.error("Privacy request error:", error);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
