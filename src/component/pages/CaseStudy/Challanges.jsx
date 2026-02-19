import { CommonBigIndexScrollable2 } from "../common/CommonBigIndexScrollable2";

export const Challanges = () => {
  const heading = "Challenges and Resolutions";

const cases = [
    {
      description:
        "<b>Challenge</b><br/>Product Messaging Felt Too Technical For Decision-Makers<br/><br/><b>Resolution</b><br/>Reframed Content Around Business Outcomes And Use Cases<br/><br/><b>Result</b><br/>+52% Improvement In Time On Page"
    },
    {
      description:
        "<b>Challenge</b><br/>High Traffic But Low Demo Conversions<br/><br/><b>Resolution</b><br/>Introduced Sticky CTAs And Intent-Based Landing Pages<br/><br/><b>Result</b><br/>2.3× Increase In Demo Form Submissions"
    },
    {
      description:
        "<b>Challenge</b><br/>Slow Load Speeds Across Legacy Pages<br/><br/><b>Resolution</b><br/>Optimized Assets And Rebuilt Frontend For Performance<br/><br/><b>Result</b><br/>38% Faster Page Load Times"
    }
  ];

  return (
    <CommonBigIndexScrollable2
      data={cases}
      heading={heading}
      caseLabel="Outcome"
    />
  );
};