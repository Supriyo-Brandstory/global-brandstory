import { CommonBigIndex } from "../common/CommonBigIndex";

export const WhatLlmWant = () => {
  const heading = "What LLMs Want from Your Content";

  const cases = [
    {
      title: "How AI Chooses What to Say",
      description: `LLMs don’t rank links. They synthesize knowledge. To get chosen, your content needs to speak their language.<br /><br />
                    <b>Why it matters:</b><br/> LLMs pick responses based on relevance and clarity, not popularity. If your content matches how the model “thinks” and organizes knowledge, it’s more likely to be chosen.`
    },
    {
      title: "Natural Language Q&A",
      description: `AI responds best when content mirrors how people naturally speak. We craft clear questions and direct answers because LLMs prefer real questions over keyword-stuffed sentences.<br /><br />
                    <b>Why it matters:</b><br/> If someone asks, “How do I reduce cloud costs?” your content should say, “To reduce cloud costs...” not hide the answer under jargon.`
    },
    {
      title: "Verified Sources",
      description: `AI needs confidence in the content it picks. We make sure your content includes data, attribution, author bios, and reputable references. This builds trust with models trained to look for accuracy.<br /><br />
                    <b>Why it matters:</b><br/> Content backed by real sources is far more likely to be selected and cited by AI.`
    },
    {
      title: "Structured Knowledge",
      description: `LLMs don’t skim like humans. They scan for structure. We format content with headings, bullets, ordered lists, and section breaks that help machines quickly understand what’s what.<br /><br />
                    <b>Why it matters:</b><br/> Structured content gets parsed better and reused more often in AI answers.`
    },
    {
      title: "Conversational Tone",
      description: `The more human your writing feels, the more useful it is to AI. We write in a tone that sounds helpful, direct, and easy to follow, just like how users expect AI to talk.<br /><br />
                    <b>Why it matters:</b><br/> If it sounds human, it feels right. And AI is trained to prefer that.`
    },
  ];

  const footer = "These five principles guide every piece of content we create — ensuring your brand isn’t just visible, but <b>chosen, trusted, and cited</b> by AI.";

  return (
    <CommonBigIndex
      data={cases}
      heading={heading}
      footer={footer}
    />
  );
};