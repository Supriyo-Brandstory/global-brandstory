import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const OurTeam = () => {
  const accordionData = [
    {
      title: "Phase I: Strategic Concept Development",
      content: `We start by understanding your business, goals, and audience. Our team collaborates with you to craft a unique concept and narrative blueprint. This ensures your animation isn’t just creative—it’s strategically designed to drive measurable results, like increased sign-ups, reduced support tickets, or enhanced brand recall.`,
    },
    {
      title: "Phase II: Bespoke Visual & Narrative Design",
      content: `
        <p>Before animating a single frame, we create:</p>
        <ul>
          <li><strong>Storyboards:</strong> Mapping the flow of your story visually.</li>
          <li><strong>Style Frames:</strong> Setting the color palette, aesthetic, and character design.</li>
          <li><strong>Scripts & Voiceovers:</strong> Ensuring the tone matches your brand and resonates with your audience.</li>
        </ul>
        <p>This phase ensures your animation is cohesive, visually engaging, and perfectly aligned with your messaging.</p>
      `,
    },
    {
      title: "Phase III: Precision Animation & Post-Production",
      content: `
        <p>Our animators bring your storyboard to life using the 12 principles of animation. Every movement, micro-animation, and visual cue is purposeful, guiding viewers’ attention and reinforcing key messages. We then integrate:</p>
        <ul>
          <li>Professional sound design</li>
          <li>Custom music and sound effects</li>
          <li>Perfectly mixed voiceovers</li>
        </ul>
        <p>The result is a high-quality, immersive video that captivates your audience and stands out from competitors.</p>
      `,
    },
    {
      title: "Phase IV: Managed Delivery & Performance Analysis",
      content: `We deliver videos optimized for all platforms, from social media and websites to presentations. Additionally, we provide metrics tracking, analyzing engagement, click-throughs, and ROI to prove the tangible impact of your animation.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Our Team’s Approach to Seamless and Professional Animation"
      description="Our animation methodology is structured to deliver maximum impact at every step:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};