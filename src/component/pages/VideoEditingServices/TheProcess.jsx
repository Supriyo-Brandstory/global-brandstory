import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const TheProcess = () => {
  const accordionData = [
    {
      title: "Phase I: Discovery & Narrative Blueprint",
      content: "We dive deep into your goals, audience, and vision. Our editors act as storytellers, collaborating with you to outline tone, narrative, and emotional impact. The outcome is a detailed editing plan—a blueprint for the entire video post-production process.",
    },
    {
      title: "Phase II: Precision Editing & Assembly",
      content: "We meticulously review your raw footage, select the best takes, and assemble them into a compelling rough cut. Pacing, flow, and story arcs are carefully crafted to maintain engagement. We use industry-standard software like Adobe Premiere Pro and DaVinci Resolve.",
    },
    {
      title: "Phase III: Visual & Sonic Enhancement",
      content: "The final polish includes cinematic color grading to set the perfect mood, dynamic motion graphics and text overlays to reinforce key messages, and immersive sound design, including mixing, sound effects, and music selection.",
    },
    {
      title: "Phase IV: Client Collaboration & Final Delivery",
      content: "We provide private review links, multiple rounds of revisions, and deliver the final video in formats suitable for YouTube, Instagram, broadcast, or other platforms. Our collaborative approach ensures your vision is realized.",
    },
  ];

  return (
    <CommonAccordion2
      title="The Process We Follow to Deliver Engaging Video Content"
      description="We follow a four-phase approach to ensure every project exceeds expectations:"
      items={accordionData}
      splitRatio={0.49}
    />
  );
};