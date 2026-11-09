/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  // The offer page was merged into the home page.
  async redirects() {
    return [
      { source: "/zlecenia", destination: "/pl#wspolpraca", permanent: false },
      { source: "/work-with-me", destination: "/#wspolpraca", permanent: false },
    ];
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
