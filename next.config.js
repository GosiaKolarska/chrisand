/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  async headers() {
    const noindex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];
    return [
      { source: "/demo/:path*", headers: noindex },
      { source: "/demo-files/:path*", headers: noindex },
    ];
  },
}

module.exports = nextConfig
