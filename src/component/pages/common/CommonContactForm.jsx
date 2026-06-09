"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/style/common/commonContactForm.module.css';

export const CommonContactForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        mobile: '',
        brandName: '',
        budgetRange: '',
        services: '',
        isHappyToContact: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    const showToast = (message, type) => {
        setToast({ show: true, message, type });
        setTimeout(() => {
            setToast({ show: false, message: '', type: '' });
        }, 4000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/monday-common', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                showToast('Form submitted successfully!', 'success');
                setFormData({
                    name: '',
                    mail: '',
                    mobile: '',
                    brandName: '',
                    budgetRange: '',
                    services: '',
                    isHappyToContact: false
                });
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: 'contact_form_submit_success',
                    form_name: 'contact_us'
                });
                setTimeout(() => {
                    window.location.href = '/thank-you';
                }, 1500);
            } else {
                const errorData = await response.json();
                console.error('Submission failed:', errorData);
                showToast('Failed to submit form. Please try again later.', 'error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            showToast('An error occurred during submission.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.bgImage}>
                <img src="/images/contact-form-bg.webp" alt="bg" />
            </div>
            <div className={styles.layout}>
                <div className={styles.colTwo}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <h2 className={styles.title}>Request a Consultation</h2>
                        <div className={styles.inputGroup}>
                            <input
                                name="brandName"
                                value={formData.brandName}
                                onChange={handleChange}
                                type="text"
                                placeholder='Your Name'
                                className={styles.textInput}
                                required
                            />
                            <div className={styles.inputHint}>Enter your full name</div>
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                name="mail"
                                value={formData.mail}
                                onChange={handleChange}
                                type="email"
                                placeholder='Your Mail'
                                className={styles.textInput}
                                required
                            />
                            <div className={styles.inputHint}>Preferably use company mail</div>
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                prefix='+91'
                                type="text"
                                placeholder='Your mobile number'
                                className={styles.textInput}
                                required
                            />
                            <div className={styles.inputHint}>Give your phone number</div>
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                placeholder='Company / Brand name'
                                className={styles.textInput}
                                required
                            />
                            <div className={styles.inputHint}>Type your brand name  or company</div>
                        </div>
                        <div className={styles.inputGroup}>
                            <select
                                name="budgetRange"
                                value={formData.budgetRange}
                                onChange={handleChange}
                                className={styles.textInput}
                                required
                            >
                                <option value="" disabled>BrandStory Global Budget Range</option>
                                <option value="USD 1000 - 2500">USD 1000 - 2500</option>
                                <option value="USD 2500 - 5000">USD 2500 - 5000</option>
                                <option value="USD 5000 - 7500">USD 5000 - 7500</option>
                                <option value="USD 7500 - 10000">USD 7500 - 10000</option>
                                <option value="Above USD 10000">Above USD 10000</option>
                            </select>
                            <div className={styles.inputHint}>Select your budget range</div>
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                name="services"
                                value={formData.services}
                                onChange={handleChange}
                                type="text"
                                placeholder='Select services'
                                className={styles.textInput}
                                required
                            />
                            <div className={styles.inputHint}>Select the services you are looking for</div>
                        </div>
                        <div className={styles.inputGroup} style={{ paddingTop: '10px' }}>
                            <input
                                name="isHappyToContact"
                                checked={formData.isHappyToContact}
                                onChange={handleChange}
                                type="checkbox"
                            /> Yes, I’m happy to be contacted by Brandstory Global. I’ve read the <span style={{ color: '#F15D22' }}>Privacy Policy</span>
                        </div>
                        <br />
                        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Start My Project'}
                        </button>
                    </form>
                    <div className={styles.contactBoxes}>
                        <div className={styles.contactBox}
                            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                        >
                            <img
                                src="/images/email-ico.svg"
                                alt="email-icon"
                                style={{ width: '20px', height: 'auto' }}
                            />
                            <p style={{ margin: 0, fontSize: '18px' }}>
                                Not ready for a form? Email us at{' '}
                                <span style={{ color: '#F15D22', fontWeight: 'bold' }}>
                                    <a href="mailto:contact@brandstoryglobal.com">contact@brandstoryglobal.com</a>
                                </span>
                            </p>
                        </div>
                        <div className={styles.contactBox}>
                            <p style={{ textAlign: 'center', fontSize: '18px' }}>
                                Conect on Socials
                            </p>
                            <div className={styles.socialIcons}>
                                <a href="https://www.facebook.com/brandstory.in/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/contact-ico-facebook.svg" alt="Facebook" />
                                </a>
                                <a href="https://www.instagram.com/brandstorydigital/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/contact-ico-instagram.svg" alt="Instagram" />
                                </a>
                                <a href="https://in.linkedin.com/company/brandstory-digital" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/contact-ico-linkedin.svg" alt="LinkedIn" />
                                </a>
                                <a href="https://youtube.com/@brandstorysolutionsprivate7689?si=bUPEY4PVc7wtm7Ku" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/contact-ico-youtube.svg" alt="YouTube" />
                                </a>
                            </div>
                        </div>
                        <div className={styles.contactBox} id={styles.schedule}>
                            <img src="/images/calender-ico.png" alt="calender" />
                            <p style={{ textAlign: 'center', fontSize: '18px' }}>
                                Schedule Meeting
                            </p>
                        </div>

                    </div>
                </div>
                <div style={{ marginTop: '20px' }} className={styles.contactBox} id={styles.contactNumbers}>
                    <p style={{ textAlign: 'center', paddingBottom: '10px' }}>Call Us</p>
                    <div className={styles.phoneNumbers}>
                        <div style={{ display: "none" }}>
                            <img src="/images/mobile-ico.svg" alt="mobile-ico" />
                            <span>India: </span> <a style={{ color: '#F15D22' }} href="tel:+919876543210"> +91 98765 43210</a>
                        </div>
                        <div>
                            <img src="/images/mobile-ico.svg" alt="mobile-ico" />
                            <span>USA: </span> <a style={{ color: '#F15D22' }} href="tel:+17145990207"> +1 7145990207</a>
                        </div>
                        <div style={{ display: "none" }}>
                            <img src="/images/mobile-ico.svg" alt="mobile-ico" />
                            <span>UK: </span> <a style={{ color: '#F15D22' }} href="tel:+441234567890"> +44 1234 567890</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Toast Notification */}
            {toast.show && (
                <div style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: toast.type === 'success' ? '#4CAF50' : '#F44336',
                    color: 'white',
                    padding: '16px 24px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 1000,
                    fontSize: '16px',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    animation: 'slideIn 0.3s ease-out forwards'
                }}>
                    {toast.type === 'success' ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    )}
                    {toast.message}
                </div>
            )}
        </div>
    );
};