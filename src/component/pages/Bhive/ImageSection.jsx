import React from "react";
import { CommonImageGrid } from "../common/CommonImageGrid";

export const ImageSection = () => {
  const images = [
    "/images/bhive/b1.png",
    "/images/bhive/b2.png",
    "/images/bhive/b3.png",
  ];

  return <CommonImageGrid images={images} />;
};
