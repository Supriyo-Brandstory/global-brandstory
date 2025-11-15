import React from 'react';
import CommonAbout from '../common/CommonAbout';

export const BrandstorysLlm = () => {
  return (
    <CommonAbout
      title="<h2>Brandstory’s LLM SEO Philosophy</h2>"
      subtitle="<p>We believe your content shouldn’t just show up. It should be <b>mentioned</b>. <b>Chosen</b>. <b>Trusted</b>. And referenced by AI like ChatGPT or Gemini.</p>"
      text1="Our philosophy is simple:"
      points={[
        '<b>Write for users, train for machines.</b>',
        '<b>Lead with clarity, not complexity.</b>',
        '<b>Build trust, not just backlinks.</b>',
      ]}
      text2="We blend real-world prompt testing, content research, and human-focused storytelling to create content that <em>lives inside answers</em>. Not just pages."
      imageSrc="/images/SeoForLlm/bs.png"
      imageAlt="Brandstory LLM SEO Philosophy - Content that AIs trust and cite"
    />
  );
};