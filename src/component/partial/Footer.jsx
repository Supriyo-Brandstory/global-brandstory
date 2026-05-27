import styles from '@/style/footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>

        {/* Top Stats */}
        <div className={styles.topStats}>
          <div className={styles.stat}>
            <h3>32,00,000+</h3>
            <p>Leads Generated for growth-hungry brands</p>
          </div>
          <div className={styles.stat}>
            <h3>₹5,200+ Cr</h3>
            <p>Client Revenue Influenced across digital touchpoints</p>
          </div>
          <div className={styles.stat}>
            <h3>11+ Years</h3>
            <p>of Creative Intelligence driving measurable results</p>
          </div>
          <div className={styles.stat}>
            <h3>1 Goal</h3>
            <p>Your Business Growth — everything else is strategy</p>
          </div>
        </div>

        {/* Brand + CTA Row */}
        <div className={styles.mainContentTop}>
          <div className={styles.brandSection}>
            <Link href="/">
              <img src="/white-logo.svg" alt="BrandStory" className={styles.logo} />
            </Link>
            <p>A Full-Stack Digital Agency</p>
            <p>11+ Years. 250+ Clients. 50+ Industries.</p>
          </div>

          <div className={styles.callSection}>
            <p className={styles.callButtontext}>Ready to speak with a consultant?</p>
            <Link href="/contact-us">
              <button className={styles.callButton}>Call us now</button>
            </Link>
          </div>
        </div>

        {/* Links Grid — 4 columns × 2 rows */}
        <div className={styles.linksGrid}>
          {/* Column 1 */}
          <div className={styles.column}>
            <h5>COMPANY</h5>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/our-works">Our Works</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/our-clients">Our Clients</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className={styles.column}>
            <h5>DEVELOPMENT</h5>
            <ul>
              <li><Link href="/services/software-development">Software Development Services</Link></li>
              <li><Link href="/services/web-development">Web Development Services</Link></li>
              <li><Link href="/services/mobile-app-development">Mobile App Development</Link></li>
              <li><Link href="/services/web-application-development">Web Application Development</Link></li>
              <li><Link href="/services/ui-ux-design">UI/UX Design Services</Link></li>
              <li><Link href="/services/full-stack-development">Full Stack Development</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className={styles.column}>
            <h5>CREATIVE & MEDIA PRODUCTION</h5>
            <ul>
              <li><Link href="/services/video-production">Video Production</Link></li>
              <li><Link href="/services/photography">Photography</Link></li>
              <li><Link href="/services/corporate-video">Corporate Video</Link></li>
              <li><Link href="/services/corporate-photography">Corporate Photography</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className={styles.column}>
            <h5>CONSULTING</h5>
            <ul>
              <li><Link href="/services/digital-transformation">Digital Transformation Services</Link></li>
              <li><Link href="/services/it-consulting">IT Consulting Services</Link></li>
              <li><Link href="/services/cyber-security">Cybersecurity Services</Link></li>
              <li><Link href="/services/data-analytics">Data Analytics Services</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className={styles.column}>
            <h5>DIGITAL MARKETING</h5>
            <ul>
              <li><Link href="/services/digital-marketing">Digital Marketing Services</Link></li>
              <li><Link href="/services/seo">SEO Services</Link></li>
              <li><Link href="/services/social-media-marketing">Social Media Marketing</Link></li>
              <li><Link href="/services/b2b-marketing">B2B Marketing</Link></li>
              <li><Link href="/services/b2c-marketing">B2C Marketing</Link></li>
              <li><Link href="/services/content-marketing">Content Marketing</Link></li>
            </ul>
          </div>

          {/* Column 6 */}
          <div className={styles.column}>
            <h5>BRANDING</h5>
            <ul>
              <li><Link href="/services/branding">Branding Services</Link></li>
              <li><Link href="/services/branding/strategy">Brand Strategy & Positioning</Link></li>
              <li><Link href="/services/branding/identity-design">Brand Identity Design</Link></li>
              <li><Link href="/services/branding/messaging-and-copy-writing">Brand Messaging & Copywriting</Link></li>
              <li><Link href="/services/branding/visual-branding">Visual Branding & Collateral Design</Link></li>
              <li><Link href="/services/branding/rebranding">Rebranding Services</Link></li>
            </ul>
          </div>

          {/* Column 7 */}
          <div className={styles.column}>
            <h5>TECHNOLOGIES</h5>
            <ul>
              <li><Link href="/services/front-end-development">Frontend Technologies</Link></li>
              <li><Link href="/services/back-end-development">Backend Technologies</Link></li>
              <li><Link href="/services/mobile-app-development">Mobile App</Link></li>
              <li><Link href="/services/cloud">Cloud</Link></li>
              <li><Link href="/services/ai-development">AI, ML & Data Technologies</Link></li>
            </ul>
          </div>

          {/* Column 8 */}
          <div className={styles.column}>
            <h5>INDUSTRIES</h5>
            <ul>
              <li><Link href="/industries/ecommerce">E-commerce</Link></li>
              <li><Link href="/industries/healthcare">Healthcare</Link></li>
              <li><Link href="/industries/education-e-learning">Education & E-learning</Link></li>
              <li><Link href="/industries/real-estate">Real Estate</Link></li>
              <li><Link href="/industries/finance-and-banking">Finance & Banking</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>End-to-end brilliance, powered by BrandStory</p>

          <div className={styles.bottomLinks}>
            <div className={styles.policyLinks}>
              <Link href="/sitemap">Sitemap</Link>
              <Link href="/privacy-policy">Privacy & Terms of Use</Link>
            </div>
          </div>
        </div>

        {/* Social Icons Pill on Bottom Center Border */}
        <div className={styles.socialPill}>
          <a href="https://www.facebook.com/brandstory.in/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook-icon.svg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/brandstorydigital/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram-icon.svg" alt="Instagram" />
          </a>
          <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <img src="/icons/youtube-icon.svg" alt="YouTube" />
          </a>
          <a href="https://www.linkedin.com/company/brandstory-in/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin-icon.svg" alt="LinkedIn" />
          </a>
        </div>

      </div>
    </footer>
  );
}