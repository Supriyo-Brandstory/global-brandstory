import { NextResponse } from 'next/server';

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
      isHappyToContact
    } = body;

    const apiToken = process.env.MONDAY_API_TOKEN;

    const currentDate = new Date().toISOString().split('T')[0];

    const columnValues = {
      text_mm1078ev: brandName || "",
      date_mm10dfpb: { date: currentDate },
      long_text_mm10fad3: { text: services || "" },
      email_mm10pe83: { email: mail, text: mail },
      phone_mm103pp8: { phone: mobile },
      dropdown_mm10haam: { labels: [budgetRange] } // Drops it into the dropdown
    };

    // board id for test leads;
    const boardId = 5026902925;
    const groupId = "group_mm10gy3r"; // Using same group id as previous integration, or it might be another one

    const query = `
      mutation {
        create_item(
          board_id: ${boardId},
          group_id: "${groupId}",
          item_name: "${name}",
          column_values: "${JSON.stringify(columnValues).replace(/"/g, '\\"')}"
        ) {
          id
        }
      }
    `;

    const response = await fetch("https://api.monday.com/v2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiToken
      },
      body: JSON.stringify({ query })
    });

    const result = await response.json();

    if (result.errors) {
      console.error("Monday API returned errors:", result.errors);
      return NextResponse.json(
        { error: result.errors },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      itemId: result.data?.create_item?.id
    });

  } catch (error) {
    console.error("Monday API error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
