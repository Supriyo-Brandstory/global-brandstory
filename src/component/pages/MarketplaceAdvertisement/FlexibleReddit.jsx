import { CommonBwThreeCard } from "../common/CommonBwThreeCard";

export const FlexibleReddit = () => {
  const title = "Flexible Reddit Ad Plans That Fit Your Goals";
  const description =
    "Our marketplace ads pricing is built around where your brand is and where you want to go.";
  const footer =
    "Every package includes listing optimization, campaign setup, bid management, and reporting. We also offer custom pricing based on SKU count, platform mix, and creative needs.";
  const data = [
    {
      title: "Starter",
      description: `
                <p class="mb-2">Ideal for new sellers or testing a platform</p>
                <ul>
                <li>1 Marketplace</li>
                <li>Basic PPC Setup</li>
                <li>Product Listing Audit</li>
                <li>Monthly Performance Report</li>
                </ul>
            `,
    },
    {
      title: "Growth",
      description: `
                <p class="mb-2">For scaling sellers expanding reach</p>
                <ul>
                <li>Multi-platform Campaigns (up to 3)</li>
                <li>Keyword Strategy & A/B Testing</li>
                <li>Full Creative Optimization</li>
                <li>Weekly Analytics</li>
                </ul>
            `,
    },
    {
      title: "Scale",
      description: `
                <p class="mb-2">Built for aggressive growth across marketplaces</p>
                <ul>
                <li>Unlimited Platforms</li>
                <li>Dedicated Ad Manager</li>
                <li>Custom Marketplace Store Design</li>
                <li>Real-Time RoAS Dashboard</li>
                <li>Cross-channel Retargeting</li>
                </ul>
            `,
    },
  ];
  return (
    <>
      <CommonBwThreeCard
        rightPadding="50px"
        title={title}
        description={description}
        footer={footer}
        cardData={data}
      />
    </>
  );
};
