"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * next/image wrapper: hide when src missing or load fails.
 * Optional wrapperClassName hides the whole container on fail.
 */
export default function SafeImage({
  src,
  alt = "",
  wrapperClassName,
  onError,
  ...props
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return null;

  const image = (
    <Image
      src={src}
      alt={alt}
      onError={(e) => {
        setFailed(true);
        onError?.(e);
      }}
      {...props}
    />
  );

  if (wrapperClassName) {
    return <div className={wrapperClassName}>{image}</div>;
  }

  return image;
}
