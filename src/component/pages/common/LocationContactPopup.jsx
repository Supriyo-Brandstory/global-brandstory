"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import styles from "@/style/common/locationContactPopup.module.css";
import { LEGAL_CONFIG } from "@/config/legal";
import { buildLeadAnalyticsEvent } from "@/lib/consent/gcm";
import {
  createSubmissionId,
  readUtmParams,
  stripSensitiveQuery,
} from "@/lib/forms/enquiryMeta";

const SESSION_KEY = "bsg_location_contact_popup_seen";
const OPEN_DELAY_MS = 4000;
/** Monday board requires a budget label — popup UI omits budget; send safe default. */
const DEFAULT_BUDGET = "USD 1000 - 2500";

const INITIAL_FORM = {
  brandName: "",
  mail: "",
  mobile: "",
  name: "",
  services: "",
  emailMarketingConsent: false,
  phoneWhatsappConsent: false,
};

export default function LocationContactPopup() {
  const titleId = useId();
  const closeBtnRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const markSeen = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const closePopup = () => {
    markSeen();
    setOpen(false);
  };

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadySeen = false;
    }
    if (alreadySeen) return undefined;

    const timer = setTimeout(() => {
      setOpen(true);
      markSeen();
    }, OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const utm = readUtmParams();
      const submissionId = createSubmissionId();
      const consentTimestamp = new Date().toISOString();
      const pageUrl =
        typeof window !== "undefined"
          ? stripSensitiveQuery(window.location.href)
          : "/";

      const payload = {
        brandName: formData.brandName,
        mail: formData.mail,
        mobile: formData.mobile,
        name: formData.name,
        services: formData.services,
        budgetRange: DEFAULT_BUDGET,
        submissionId,
        formId: "location_contact_popup",
        pageUrl,
        noticeVersion: LEGAL_CONFIG.ENQUIRY_NOTICE_VERSION,
        emailMarketingConsent: Boolean(formData.emailMarketingConsent),
        phoneWhatsappConsent: LEGAL_CONFIG.FEATURE_MARKETING_PHONE_WHATSAPP
          ? Boolean(formData.phoneWhatsappConsent)
          : false,
        consentTimestamp,
        ...utm,
      };

      const response = await fetch("/monday-common", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        showToast("Form submitted successfully!", "success");
        setFormData(INITIAL_FORM);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(
          buildLeadAnalyticsEvent({
            formId: "location_contact_popup",
            pageType: "location",
            serviceCategory: "general",
          })
        );
        closePopup();
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 1200);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Submission failed:", errorData);
        showToast("Failed to submit form. Please try again later.", "error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showToast("An error occurred during submission.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open && !toast.show) return null;

  return (
    <>
      {open && (
        <div
          className={styles.overlay}
          onClick={closePopup}
          role="presentation"
        >
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              type="button"
              className={styles.closeBtn}
              onClick={closePopup}
              aria-label="Close contact form"
            >
              ×
            </button>

            <h2 id={titleId} className={styles.title}>
              Get a Free Consultation
            </h2>
            <p className={styles.subtitle}>
              Tell us a bit about your project and we will get back to you.
            </p>

            <form
              className={styles.form}
              onSubmit={handleSubmit}
              data-clarity-mask="true"
            >
              <div className={styles.inputGroup}>
                <input
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  className={styles.textInput}
                  required
                  autoComplete="name"
                  data-clarity-mask="true"
                />
              </div>

              <div className={styles.inputGroup}>
                <input
                  name="mail"
                  value={formData.mail}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className={styles.textInput}
                  required
                  autoComplete="email"
                  data-clarity-mask="true"
                />
              </div>

              <div className={styles.inputGroup}>
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone Number"
                  className={styles.textInput}
                  required
                  autoComplete="tel"
                  data-clarity-mask="true"
                />
              </div>

              <div className={styles.inputGroup}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Company Name"
                  className={styles.textInput}
                  required
                  autoComplete="organization"
                  data-clarity-mask="true"
                />
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  placeholder="Requirement / Message"
                  className={styles.textarea}
                  required
                  data-clarity-mask="true"
                />
              </div>

              <p className={styles.notice}>
                By submitting this form, you agree that BrandStory Global may use
                the information you provide to respond to your enquiry. Details
                are handled as described in our{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>

              <label className={styles.consent}>
                <input
                  name="emailMarketingConsent"
                  type="checkbox"
                  checked={formData.emailMarketingConsent}
                  onChange={handleChange}
                />
                <span>
                  I would like to receive marketing insights and updates by
                  email. I can unsubscribe anytime.
                </span>
              </label>

              {LEGAL_CONFIG.FEATURE_MARKETING_PHONE_WHATSAPP ? (
                <label className={styles.consent}>
                  <input
                    name="phoneWhatsappConsent"
                    type="checkbox"
                    checked={formData.phoneWhatsappConsent}
                    onChange={handleChange}
                  />
                  <span>
                    I agree to receive marketing calls and WhatsApp messages at
                    the number provided.
                  </span>
                </label>
              ) : null}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get a Free Consultation"}
              </button>
            </form>
          </div>
        </div>
      )}

      {toast.show && (
        <div
          className={`${styles.toast} ${
            toast.type === "success" ? styles.toastSuccess : styles.toastError
          }`}
          role="status"
          aria-live="polite"
        >
          {toast.message}
        </div>
      )}
    </>
  );
}
