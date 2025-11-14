import styles from '@/style/marketingAutomation.module.css';

export const AeoTools = () => {
  return (
    <div className={`${styles.frame} py-30`}>
      <h2>AEO Tools & Frameworks</h2>
      <p>
        To keep your content visible and competitive across AI platforms, we use a set of trusted tools, a mix of proprietary frameworks and partner platforms built specifically for AEO and LLM optimization.
      </p>
      <br />

      {/* OmniSEO */}
      <p><b>OmniSEO</b></p>
      <p>A central dashboard for managing and tracking your content’s AI performance.</p>
      <ul>
        <li>Tracks how your content performs inside generative AI tools</li>
        <li>Flags schema issues and markup gaps that affect machine readability</li>
        <li>Delivers smart suggestions to improve visibility across engines</li>
      </ul>
      <br />

      {/* LLMRank */}
      <p><b>LLMRank</b></p>
      <p>A scoring engine designed to evaluate your content against AI model behaviors.</p>
      <ul>
        <li>Scores content based on what LLMs prefer: structure, tone, and clarity</li>
        <li>Checks how well your pages align with real prompts users ask</li>
        <li>Benchmarks your content against competitors also appearing in AI results</li>
      </ul>
      <br />

      {/* GPT Tracker */}
      <p><b>GPT Tracker</b></p>
      <p>A tool that tracks how your brand shows up in AI-generated answers.</p>
      <ul>
        <li>Monitors brand mentions across ChatGPT, Bing Copilot, and Gemini</li>
        <li>Sends weekly visibility and engagement reports</li>
        <li>Tracks how people interact with your answers inside AI tools</li>
      </ul>
      <br />

      <p>
        <b className='highlited-text'>These tools help us turn AI performance into something you can measure, improve, and scale.</b>
      </p>
    </div>
  );
};