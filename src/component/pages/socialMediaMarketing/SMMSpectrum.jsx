import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const SMMSpectrum = () => {
     const accordionData = [
    {
      title: "1. Awareness",
      content:
        "The First Step Is Helping People Discover Your Brand. We Use Posts, Ads, And Influencer Partnerships To Put Your Business In Front Of The Right Audience And Make Sure They Notice You.",
    },
    {
      title: "2. Engagement",
      content:
        "Build deeper relationships with your audience by encouraging interaction, conversations, and meaningful exchanges with your brand.",
    },
    {
      title: "3. Conversion",
      content:
        "Turn engagement into measurable business outcomes by driving sign-ups, sales, and other valuable customer actions.",
    },
    {
      title: "4. Advocacy",
      content:
        "Empower satisfied customers to become loyal advocates who actively promote and recommend your brand to others.",
    },
  ];
  return (
    <>
    <CommonAccordion
    title="AI-Driven SEO Methodology for Smarter, Faster Results"
    subheding1="Turning Raw Data into Clear Actions"
    subheding2="AI technology makes SEO optimization services faster and more precise. It processes huge volumes of data in seconds, uncovering opportunities that would otherwise take months to find."
     items={accordionData} />

     <p className='text-center mb-25'>Every step helps build trust and long-term relationships.</p>
    </>
  )
}