"use client";

import { useState } from "react";

/**
 * Native img wrapper: hide when src missing or load fails.
 * Optional wrapperClassName hides the whole container on fail.
 */
export default function SafeImg({
  src,
  alt = "",
  wrapperClassName,
  onError,
  ...props
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return null;

  const image = (
    <img
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
