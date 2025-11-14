import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const RedifiningProfessional = () => {
  const accordionData = [
    {
      title: "Creative Direction",
      content: `We craft concepts aligning perfectly with your marketing goals. From frame composition to brand tone, our creative photography studio ensures every shoot communicates intent and professionalism.`,
    },
    {
      title: "Technical Mastery",
      content: `Lighting, exposure, and depth, handled to perfection. Our experts use advanced tools and methods that define us as a corporate photography agency trusted for precision and quality.`,
    },
    {
      title: "Strategic Approach",
      content: `Every photoshoot starts with research to understand your brand, audience, and objectives. This strategic lens is what makes our brand photography company stand out globally.`,
    },
    {
      title: "Emotional Connection",
      content: `Beyond technique, we focus on creating brand resonance. As a commercial photoshoot company, we capture expressions and moments which strengthen your brand identity and connect with your audience.`,
    },
    {
      title: "Visual Consistency",
      content: `We ensure your brand looks cohesive everywhere. Our professional photography services maintain uniform quality and tone across every channel. So your brand speaks one strong visual language worldwide.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Redefining Professional Photography for Modern Brands"
      description="We believe photography is the foundation of brand perception. Our vision is to set new standards in commercial photography services, where every shot delivers clarity and emotion."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};