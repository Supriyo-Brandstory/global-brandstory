import React from 'react';
import CommonStatsSection from '../common/CommonStats';

export const SMMStats = () => {
  return (
      <CommonStatsSection
      title="Expertise Across Every<br>Social Platform"
      subtitle="<p>Each social media platform is different. Our social media platforms marketing makes sure your content works everywhere:</p>"
      description={[
        "<ul><li><b>Facebook & Instagram:</b> Short Videos, Posts, And Stories</li><li><b>LinkedIn:</b> Professional Content For Businesses</li><li><b>TikTok:</b> Fun, Creative Videos That Reach More People</li><li><b>YouTube:</b> Videos That Explain Your Brand And Products</li><li><b>X (Twitter):</b> Quick Updates And Conversations</li><li><b>Pinterest:</b> Pictures That Motivate And Direct Your Viewers</li></ul>"
      ]}
      stats={[
        { value: "1M+", label: "keywords tracked and ranked" },
        { value: "500M+", label: "organic visits delivered" },
        { value: "$1.5B+", label: "client revenue generated" },
      ]}
    />
  );
};