"use client";
import { useState, useEffect } from 'react';
import styles from '@/style/homepage.module.css';

const cardData = [
  {
    id: 1,
    title: 'Creative Intelligence',
    subtitle: 'We Focus On Ideas that Work',
    description:
      'Just one sharp, plugged-in team delivering strategy, design, content, tech, and marketing — all under one roof.',
    icon: '/icons/idea.svg',
    bgColor: '#FFC6BE',
  },
  {
    id: 2,
    title: 'Full-Stack Execution We Work as a Single Team',
    description: 'From strategy and ads to design, content, and code — it all happens here, together. No handoffs. No finger-pointing. One accountable outcome',
    icon: '/icons/team.svg',
    bgColor: '#E7E4C2',
  },
  {
    id: 3,
    title: 'Data-Driven at Every Layer Gut instinct’s great. We just back it with data.',
    description: 'Every move we make — whether it’s performance marketing (Google, Meta, LinkedIn), website design & development, SEO & Content Funnels, Email Marketing & CRM , UI/UX & Conversion Optimization, etc— is led by real-time analytics and tested insight.',
    icon: '/icons/growth.svg',
    bgColor: '#FFCCB8',
  },
  {
    id: 4,
    title: '500+ Clients. 30+ Industries. We’ve seen what works, what doesn’t, and why.',
    description: 'From fast-growing startups to complex enterprises — we know what works, what doesn’t, and how to skip the trial-and-error phase.',
    icon: '/icons/users.svg',
    bgColor: '#FFEEC2',
  },
  {
    id: 5,
    title: 'The BrandStory Experience Clear. Fast. Collaborative. Expertise-driven.',
    description: 'You’ll never have to chase us for updates. We’re hands-on, easy to talk to, and focused on one thing: making your brand stronger without making your day harder.',
    icon: '/icons/settings.svg',
    bgColor: '#FFC5CC',
  },
];

export default function WhyBrandStory() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section className={styles.WhyBrandStorySection}>
      <h2 className={styles.WhyBrandStoryTitle}>Why BrandStory</h2>
      <p className={styles.WhyBrandStorySubtitle}>
        One Team. Every Capability. Zero Micro-Management. <br />
        Your Brand Doesn’t Have Time For Scattered Vendors And Guesswork. <br />
        We Bring:
      </p>

      <div className={styles.WhyBrandStoryCards}>
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`${styles.WhyBrandStoryCard} ${
              isMobile || index === activeIndex ? styles.WhyBrandStoryCardActive : ''
            }`}
            style={{ backgroundColor: card.bgColor }}
            onClick={() => !isMobile && setActiveIndex(index)}
          >
            <div className={styles.WhyBrandStoryCardContent}>
              <h3>
                {card.title}
                {card.subtitle && (
                  <span>
                    <br />
                    {card.subtitle}
                  </span>
                )}
              </h3>
              <p>{card.description}</p>
            </div>
            <div className={styles.icon}>
              <img src={card.icon} alt={card.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
