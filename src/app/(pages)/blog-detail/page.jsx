import { Footer } from '@/component/pages/PrivacyPolicy/Footer';
import styles from '@/style/blogdetail.module.css';

export default function Page() {
  return (
    <div className={styles.page}>

      <div className={styles.bg}>
        <img src="/images/Blog/blog-bg-top.webp" alt="image" />
      </div>

      <main className={styles.container}>
        <div className={styles.layout}>

          {/* LEFT – ARTICLE */}
          <article className={styles.article}>
            <header className={styles.header}>
              <h1>What Makes Digital Experiences Truly Human</h1>
              <div className={styles.meta}>
                <span className={styles.date}>January 2, 2026</span>

              </div>
            </header>
            <button className={styles.bookmark}>
              <img src="/images/share.png" alt="Bookmark" />
            </button>

            <img
              className={styles.heroImage}
              src="/images/Blog/content-img-1.png"
              alt=""
            />

            <p className={styles.intro}>
              Digital products today are everywhere—but very few feel human. Most are built for systems, not for people.
              A truly human digital experience connects with users emotionally, understands their context, and reduces cognitive effort.
            </p>
            <p className={styles.intro}>
              Below are the core principles that make digital experiences feel human.
            </p>

            <section id="empathy">
              <h2>Start With Empathy, Not Features</h2>
              <p>
                Human experiences begin by understanding people, not requirements. Instead of asking "What should this product do?",
                great design asks "Who is this for, and what are they going through right now?" Empathy-driven design comes from
                observing real behavior, listening to real problems, and mapping emotional journeys. When we design around feelings
                like confusion, urgency, or hesitation, interfaces stop feeling mechanical and start feeling responsive. This shift
                turns digital products from tools into companions that guide users rather than overwhelm them.
              </p>
            </section>

            <section id="clarity">
              <h2>Clarity Is Kindness</h2>
              <p>
                Digital products today are everywhere—but very few feel human. Most are built for systems, not for people.
                A truly human digital experience connects with users emotionally, understands their context, and reduces cognitive effort.
              </p>
              <ul className={styles.accentList}>
                <li>Use simple, natural language</li>
                <li>Avoid technical jargon in user-facing copy</li>
                <li>Keep actions predictable and familiar</li>
                <li>Reduce steps wherever possible</li>
              </ul>
              <p>Good UX doesn't make users think—it guides them.</p>
            </section>

            <section id="micro-interactions">
              <h2>Micro-Interactions Create Emotion</h2>
              <p>Small details define how a product feels.</p>
              <ul className={styles.accentList}>
                <li>"Saved successfully" instead of silent states</li>
                <li>Gentle animations that guide attention</li>
                <li>Error messages that reassure instead of blame</li>
                <li>Feedback that acknowledges user effort</li>
              </ul>
              <p>These moments make products feel alive and considerate.</p>
            </section>

            <img
              className={styles.inlineImage}
              src="/images/Blog/content-img-2.png"
              alt=""
            />

            <section id="design-everyone">
              <h2>Design for Everyone</h2>
              <p>
                A truly human experience is one that makes everyone feel included. Design should not assume a single type of user—it
                must consider different abilities, environments, and contexts. From readable typography and strong color contrast to
                keyboard navigation and screen reader support, inclusive design removes invisible barriers. When products account for
                vision, motion, language, and cognitive diversity, they quietly say, "You belong here." Accessibility is not a
                compliance task; it's empathy expressed through interface decisions.
              </p>
            </section>

            <section id="evolve">
              <h2>Let Experiences Evolve With Users</h2>
              <p>Human experiences adapt.</p>
              <ul className={styles.accentList}>
                <li>Learn from real usage data</li>
                <li>Improve flows based on behavior</li>
                <li>Personalize without invading privacy</li>
                <li>Build feedback loops into the product</li>
              </ul>
              <p>A product should grow with its users, not stay static.</p>
            </section>

            <section className={styles.closingThought}>
              <h3>Closing Thought</h3>
              <p className={styles.highlightText}>
                Technology is becoming smarter every day.<br />
                The real challenge is making it kinder.
              </p>
              <p>
                When digital experiences respect time, emotion, and individuality, they stop feeling like tools and start feeling
                like companions. That's what makes them truly human.
              </p>
            </section>

            <blockquote className={styles.quoteBlock}>
              "Design that listens to people, builds trust through every interaction, and turns technology into something truly human."
            </blockquote>

            <Footer />
          </article>

          {/* RIGHT – SIDEBAR */}
          <aside className={styles.sidebar}>

            <div className={styles.sidebarCard}>
              <h4>Table of Content</h4>
              <ul className={styles.tocList}>
                <li><span>1.</span> Start With Empathy, Not Features</li>
                <li><span>2.</span> Clarity Is Kindness</li>
                <li><span>3.</span> Micro-Interactions Create Emotion</li>
                <li><span>4.</span> Design for Everyone</li>
                <li><span>5.</span> Let Experiences Evolve With Users</li>
              </ul>
            </div>

            <div className={styles.sidebarCard}>
              <h4>Share</h4>
              <div className={styles.socials}>
                <img src="/images/contact-ico-facebook.svg" alt="Facebook" />
                <img src="/images/contact-ico-instagram.svg" alt="Instagram" />
                <img src="/images/contact-ico-linkedin.svg" alt="LinkedIn" />
                <img src="/images/contact-ico-youtube.svg" alt="YouTube" />
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}