import { describe, expect, it } from "vitest";
import {
  acceptAllCategories,
  defaultCategories,
  rejectOptionalCategories,
} from "../types.js";
import { applyGpcToCategories } from "../gpc.js";
import {
  assertNoPiiInAnalyticsPayload,
  buildLeadAnalyticsEvent,
  categoriesToGcmSignals,
} from "../gcm.js";
import { shouldLoadClarity } from "../cookies.js";

describe("consent categories", () => {
  it("defaults optional categories off", () => {
    expect(defaultCategories()).toEqual({
      necessary: true,
      analytics: false,
      experience: false,
      advertising: false,
    });
  });

  it("accept all enables optional categories", () => {
    expect(acceptAllCategories().analytics).toBe(true);
    expect(acceptAllCategories().experience).toBe(true);
    expect(acceptAllCategories().advertising).toBe(true);
  });

  it("reject optional keeps necessary only", () => {
    expect(rejectOptionalCategories()).toEqual(defaultCategories());
  });
});

describe("gpc", () => {
  it("forces advertising off", () => {
    const next = applyGpcToCategories(acceptAllCategories());
    expect(next.advertising).toBe(false);
    expect(next.analytics).toBe(true);
  });
});

describe("gcm mapping", () => {
  it("maps denied defaults", () => {
    expect(categoriesToGcmSignals(defaultCategories())).toMatchObject({
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  });

  it("maps granted analytics", () => {
    expect(
      categoriesToGcmSignals(defaultCategories({ analytics: true }))
    ).toMatchObject({
      analytics_storage: "granted",
      ad_storage: "denied",
    });
  });
});

describe("analytics payload", () => {
  it("builds non-pii lead event", () => {
    const event = buildLeadAnalyticsEvent({
      formId: "contact_us",
      pageType: "contact",
      serviceCategory: "seo",
    });
    expect(event.event).toBe("generate_lead");
    expect(assertNoPiiInAnalyticsPayload(event)).toBe(true);
  });

  it("detects pii keys", () => {
    expect(assertNoPiiInAnalyticsPayload({ event: "x", email: "a@b.c" })).toBe(
      false
    );
  });
});

describe("clarity gate", () => {
  it("requires experience consent", () => {
    expect(
      shouldLoadClarity({
        categories: defaultCategories(),
        pathname: "/",
        blockedPaths: ["/data-rights-request"],
      })
    ).toBe(false);
  });

  it("blocks rights request path", () => {
    expect(
      shouldLoadClarity({
        categories: defaultCategories({ experience: true }),
        pathname: "/data-rights-request",
        blockedPaths: ["/data-rights-request"],
      })
    ).toBe(false);
  });

  it("allows other paths when experience granted", () => {
    expect(
      shouldLoadClarity({
        categories: defaultCategories({ experience: true }),
        pathname: "/contact-us",
        blockedPaths: ["/data-rights-request"],
      })
    ).toBe(true);
  });
});
