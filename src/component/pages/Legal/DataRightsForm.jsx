"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LEGAL_CONFIG, resolveLegalToken } from "@/config/legal";
import dataRightsContent, {
  DATA_RIGHTS_RELATIONSHIPS,
  DATA_RIGHTS_REQUEST_TYPES,
} from "@/content/legal/data-rights-request";
import styles from "@/style/consent/dataRightsForm.module.css";

const initialState = {
  requestType: "",
  fullName: "",
  email: "",
  telephone: "",
  countryRegion: "",
  relationship: "",
  details: "",
  authorisedAgent: "no",
  declaration: false,
};

export function DataRightsForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const notice = useMemo(
    () => resolveLegalToken(dataRightsContent.noticeBelowForm),
    []
  );

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!form.declaration) {
      setStatus({
        type: "error",
        message: "Please confirm the declaration before submitting.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/privacy-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          pageUrl: typeof window !== "undefined" ? window.location.pathname : "",
          noticeVersion: LEGAL_CONFIG.ENQUIRY_NOTICE_VERSION,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Submission failed");
      }
      setForm(initialState);
      setStatus({
        type: "success",
        message: `Request received. Reference ID: ${data.requestId}. We will follow up using the email you provided.`,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to submit request. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={onSubmit} noValidate data-clarity-mask="true">
        <div className={styles.field}>
          <label htmlFor="requestType">Request type</label>
          <select
            id="requestType"
            name="requestType"
            value={form.requestType}
            onChange={onChange}
            required
          >
            <option value="" disabled>
              Select request type
            </option>
            {DATA_RIGHTS_REQUEST_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={onChange}
            required
            autoComplete="name"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email used with BrandStory</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
            autoComplete="email"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="telephone">Telephone number (optional)</label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            value={form.telephone}
            onChange={onChange}
            autoComplete="tel"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="countryRegion">Country and state/region</label>
          <input
            id="countryRegion"
            name="countryRegion"
            value={form.countryRegion}
            onChange={onChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="relationship">Relationship</label>
          <select
            id="relationship"
            name="relationship"
            value={form.relationship}
            onChange={onChange}
            required
          >
            <option value="" disabled>
              Select relationship
            </option>
            {DATA_RIGHTS_RELATIONSHIPS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="details">Request details</label>
          <textarea
            id="details"
            name="details"
            rows={5}
            value={form.details}
            onChange={onChange}
            required
            placeholder="Do not include passwords, government ID numbers or unrelated sensitive information."
          />
        </div>

        <fieldset className={styles.fieldset}>
          <legend>Authorised agent</legend>
          <label className={styles.radio}>
            <input
              type="radio"
              name="authorisedAgent"
              value="no"
              checked={form.authorisedAgent === "no"}
              onChange={onChange}
            />
            No
          </label>
          <label className={styles.radio}>
            <input
              type="radio"
              name="authorisedAgent"
              value="yes"
              checked={form.authorisedAgent === "yes"}
              onChange={onChange}
            />
            Yes
          </label>
          {form.authorisedAgent === "yes" ? (
            <p className={styles.note}>{dataRightsContent.authorisedAgentNote}</p>
          ) : null}
        </fieldset>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="declaration"
            checked={form.declaration}
            onChange={onChange}
            required
          />
          <span>{dataRightsContent.declarationLabel}</span>
        </label>

        <p
          className={styles.notice}
          dangerouslySetInnerHTML={{ __html: notice }}
        />

        <button type="submit" className={styles.submit} disabled={submitting}>
          {submitting ? "Submitting..." : "Submit request"}
        </button>

        <div
          className={styles.status}
          role="status"
          aria-live="polite"
          data-type={status.type || undefined}
        >
          {status.message}
        </div>

        <p className={styles.fine}>
          Prefer email? Write to{" "}
          <a href={`mailto:${LEGAL_CONFIG.PRIVACY_EMAIL}`}>
            {LEGAL_CONFIG.PRIVACY_EMAIL}
          </a>
          . Cookie choices: use footer Cookie Preferences. Policy:{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </form>
    </div>
  );
}
