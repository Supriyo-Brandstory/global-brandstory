// components/ClientStories.jsx
import styles from '@/style/homepage.module.css';

const testimonials = [
  {
    name: "Ravi S.",
    role: "Business Head",
    content: "We’ve been working with BrandStory for years now — and honestly, it’s been super smooth from the start. Whether it’s building out our CRM, getting creatives done, or running lead gen campaigns, they just get it. The team’s always approachable, quick to respond, and easy to work with. It feels less like an agency and more like a real partner.",
  },
  {
    name: "Anita R.",
    role: "School Administrator",
    content: "Started off with a few social media posts, and now they manage our whole online presence. The BrandStory team is friendly, responsive, and really good at what they do. They took time to understand our school’s vibe and brought it to life online. Couldn’t have asked for a better team to work with.",
  },
  {
    name: "Naveen M.",
    role: "Startup Founder",
    content: "BrandStory helped us take our app from idea to launch — and the process was stress-free. They listened, suggested smart ideas, and always kept us in the loop. Even with last-minute changes, they handled it like pros. Great team, solid communication, and they actually care about your success.",
  },
];

export default function ClientStories() {
  return (
    <section className={styles.clientStories_section}>
      <h2 className={styles.clientStories_heading}>
        Stories of Growth, Success, and <br /> Partnership
      </h2>

<div className={styles.clientStories_cardsContainer}>
      <div className={styles.clientStories_cards}>
        {testimonials.map((item, index) => (
          <div key={index} className={styles.clientStories_card}>
            <div className={styles.clientStories_topbar}></div>
            <p className={styles.clientStories_name}>{item.name}</p>
            <p className={styles.clientStories_role}>{item.role}</p>
            <p className={styles.clientStories_text}>{item.content}</p>
          </div>
        ))}
      </div>
      </div>

      <div className={styles.clientStories_ctaBox}>
        <h3 className={styles.clientStories_ctaHeading}>Your Next Big Move Starts Here.</h3>
        <p className={styles.clientStories_ctaSubtext}>
          Tell us what’s on your mind — we’ll bring the strategy,<br /> design, and code.
        </p>
        <button className={styles.clientStories_ctaButton}>Talk it out here.</button>
      </div>
    </section>
  );
}
