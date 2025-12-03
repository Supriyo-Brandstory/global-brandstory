import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const UnderstandingReddit = () => {
  const accordionData = [
    {
      title: "1. Ad Types",
      content: `
        <ul>
          <li><b>Promoted Posts:</b> These ads fit smoothly into people’s feeds. They can be simple pictures, short videos, or multiple images in a carousel. They feel like part of the community, not like an interrupting ad.</li>
          <li><b>Play Ads:</b> These appear on different pages across Reddit. They are great for building brand awareness and letting many people see your brand.</li>
        </ul>
      `,
    },
    {
      title: "2. Targeting Options",
      content: `
        <ul>
          <li><b>By Subreddit:</b> You can reach small, focused communities that care about very specific topics.</li>
          <li><b>By Interest & Location:</b> You can show your ads to people who like similar things or live in certain cities or countries.</li>
        </ul>
      `,
    },
    {
      title: "3. Engagement Impact",
      content: `
        Reddit users can upvote or downvote posts. This means that ads which people like are seen by even more people. The more engaging your ad is, the more it naturally spreads.
      `,
    },
  ];

  return (
    <CommonAccordion
      title = "Understanding Reddit Ads: Native,<br/>Conversational, Effective"
      subheding2 = "Reddit’s ad ecosystem is natural, friendly, and very flexible. Ads on Reddit do not feel forced, they become part of the conversation. To make your ads succeed, it is important to understand how everything works."
      items = {accordionData}
      footer = "To perform well on Reddit, your ads need a smart strategy, a good understanding of the community culture, and the right tone. When done properly, Reddit ads can create strong engagement, build long-term trust, and give measurable results."
    />
  );
};