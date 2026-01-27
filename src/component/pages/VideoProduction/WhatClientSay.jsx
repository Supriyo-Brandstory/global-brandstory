import { CommonWhiteRedCard } from "../common/CommonWhiteRedCard";

export const WhatClientSay = () => {
  const storiesData = {
    title: "What Our Clients Say",
    footer:
      "Our testimonials are the proof of partnership. These video production reviews reflect real client testimonials, authentic customer feedback, and tangible video results from our process.",
    cards: [
      {
        name: "John M",
        role: "Marketing Director",
        testimonial:
          "“Our brand video increased engagement by 250%, the team exceeded our expectations.”",
      },
      {
        name: "Sarah L",
        role: "Founder, EduStart",
        testimonial:
          "“From script to screen, everything was handled professionally and creatively.”",
      },
    ],
  };

  return (
    <CommonWhiteRedCard
      title={storiesData.title}
      cards={storiesData.cards}
      footer={storiesData.footer}
    />
  );
};
