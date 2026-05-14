import React from 'react';

const StaticPaidCampaignPerformance = ({ctaText}) => {
  
  return (
    <section className="w-full py-8 px-4">
      <div className="max-w-[1200px] mx-auto bg-[#333333] rounded-[20px] px-8 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <p className="text-white leading-[1.4] font-normal text-center md:text-left">
          {ctaText || "Looking to Improve your Paid Campaign Performance?"}
        </p>

        <button className="bg-[#F44321] hover:bg-[#e53b1c] text-white text-[20px] font-medium px-[100px] py-[10px] rounded-full transition-all duration-300 whitespace-nowrap">
          Let’s Talk
        </button>

      </div>
    </section>
  );
};

export default StaticPaidCampaignPerformance;