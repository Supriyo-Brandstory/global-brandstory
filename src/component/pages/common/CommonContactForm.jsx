import React from 'react';
import styles from '@/style/common/commonContactForm.module.css';

export const CommonContactForm = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.bgImage}>
                <img src="/images/contact-form-bg.webp" alt="bg" />
            </div>
            <div className={styles.layout}>
                <div className={styles.colTwo}>
                    <form action="" className={styles.form}>
                        <h2 className={styles.title}>Request a Consultation</h2>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder='Your Name' className={styles.textInput} />
                            <div className={styles.inputHint}>Enter your full name</div>
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder='Your Mail' className={styles.textInput} />
                            <div className={styles.inputHint}>Preferably use company mail</div>
                        </div>
                        <div className={styles.inputGroup}>
                            <input prefix='+91' type="text" placeholder='Your mobile number' className={styles.textInput} />
                            <div className={styles.inputHint}>Give your phone number</div>
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder='Company / Brand name' className={styles.textInput} />
                            <div className={styles.inputHint}>Type your brand name  or company</div>
                        </div>
                        <div className={styles.inputGroup}>
                            <select className={styles.textInput}>
                                <option value="" disabled selected>BrandStory Global Budget Range</option>
                                <option value="USD 1000 - 2500">USD 1000 - 2500</option>
                                <option value="USD 2500 - 5000">USD 2500 - 5000</option>
                                <option value="USD 5000 - 7500">USD 5000 - 7500</option>
                                <option value="USD 7500 - 10000">USD 7500 - 10000</option>
                                <option value="Above USD 10000">Above USD 10000</option>
                            </select>
                            <div className={styles.inputHint}>Select your budget range</div>
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder='Select services' className={styles.textInput} />
                            <div className={styles.inputHint}>Select the services you are looking for</div>
                        </div>
                        <div className={styles.inputGroup} style={{ paddingTop: '10px' }}>
                            <input type="checkbox" /> Yes, I’m happy to be contacted by Brandstory Global. I’ve read the <span style={{ color: '#F15D22' }}>Privacy Policy</span>
                        </div>
                        <br />
                        <a href="#" className={styles.submitBtn}>
                            Start My Project
                        </a>
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
                                    info@brandstory.in
                                </span>
                            </p>
                        </div>
                        <div className={styles.contactBox}>
                            <p style={{ textAlign: 'center', fontSize: '18px' }}>
                                Conect on Socials
                            </p>
                            <div className={styles.socialIcons}>
                                <img src="/images/contact-ico-facebook.svg" alt="Facebook" />
                                <img src="/images/contact-ico-instagram.svg" alt="Instagram" />
                                <img src="/images/contact-ico-linkedin.svg" alt="LinkedIn" />
                                <img src="/images/contact-ico-youtube.svg" alt="YouTube" />
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
        </div>
    );
};