/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.0.117", "192.168.0.197"],
  // Drop unused compiled pages from memory during long webpack dev sessions.
  onDemandEntries: {
    maxInactiveAge: 30 * 1000,
    pagesBufferLength: 4,
  },
  experimental: {
    webpackMemoryOptimizations: true,
  },
  async redirects() {
    return [
      {
        source: "/terms-and-conditions",
        destination: "/terms-of-use",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
