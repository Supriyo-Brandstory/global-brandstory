'use client';
import styles from '@/style/homepage.module.css';
import { useState } from 'react';
// import { FaArrowRight } from 'react-icons/fa';

const cardsData = [
    {
        title: 'Branded Films',
        description: "Cinematic Storytelling To Define Your Brand’s Vibe, Values, And Voice. Perfect For Launches, Rebrands, Or Culture Pieces.",
        image: '/images/branded-films.webp',
        hoverColor: '#FF8552',
    },
    {
        title: 'Reels & Social Content',
        description: "Quick, Scroll-Stopping Visuals Tailored For IG, YouTube Shorts, Or LinkedIn. Fast-Paced, Hook-First, And Designed For Shareability.",
        image: '/images/reels-social.webp',
        hoverColor: '#D946EF',
    },
    {
        title: 'Explainers & Product Videos',
        description: "Make Your Product Feel Real. We Blend Motion Graphics, Scripting, And UI Animation To Simplify Complex Features.",
        image: '/images/explainers.webp',
        hoverColor: '#A3A3A3',
    },
    {
        title: 'Podcast & Video Series Production',
        description: "Set Up, Record, Edit, And Scale Branded Podcasts Or Interview Formats. Turn Your Team Or Audience Into A Show.",
        image: '/images/podcast.webp',
        hoverColor: '#A3A3A3',
    },
];

export default function StoriesSection() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className={styles.StoriesSection_section}>
            <h2 className={styles.StoriesSection_heading}>Stories That Travel Across Screens</h2>
            <p className={styles.StoriesSection_subheading}>
                It’s More Than Content — It’s Storytelling That Clicks.
            </p>
            <p className={styles.StoriesSection_description}>
                From Quick Reels And Fun Explainers To Full-Blown Brand Videos, Our In-House Crew Makes Visuals That Grab Attention, Spark Interest, And Stick Around In People’s Minds (And Feeds).
            </p>

            <div className={styles.StoriesSection_grid}>
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className={`${styles.StoriesSection_card} 
                        ${hovered === index ? styles.StoriesSection_cardhover : ''} 
                        ${hovered !== null && hovered !== index ? styles.StoriesSection_cardShrink : ''}
                        ${hovered === index ? index % 2 === 0 ? styles.StoriesSection_firstbg : styles.StoriesSection_secondbg : ''}`}


                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                            backgroundImage: hovered === index ? 'none' : `url(${card.image})`,
                        }}          >
                        <div className={styles.StoriesSection_content}>
                            <h3>{card.title}</h3>
                            {hovered === index && (
                                <>
                                    <p>{card.description}</p>

                                    {
                                        hovered === index ? index % 2 === 0 ? (
                                            <div className={styles.StoriesSection_arrowContainer}>
                                            <img src='/icons/white-arrow-up.svg' alt='arrow' className={styles.StoriesSection_arrow} />
                                            </div>
                                        ) : (
                                            <div className={styles.StoriesSection_arrowContainer}>
                                            <img src='/icons/red-arrow-up.svg' alt='arrow' className={styles.StoriesSection_arrow} />
                                            </div>
                                        ) : null
                                    }
                                    {/* <span className={styles.StoriesSection_arrow}><FaArrowRight /></span> */}
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <p className={styles.StoriesSection_outcome}>
                What's the Outcome? <br/><br/>
                140M+ Views Across YouTube, Reels, And OTT | 12x Avg. Retention Improvement For Video-First Landing Pages | 40% Boost In Click-Through Rates When Video Is Used In Ads
            </p>
        </section>
    );
}
