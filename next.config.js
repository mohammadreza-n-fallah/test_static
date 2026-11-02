// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       { protocol: "http", hostname: "127.0.0.1", port: "8000" },
//       { protocol: "https", hostname: "yadakstorage.ir" },
//       { protocol: "https", hostname: "rtl.parsisads.ir" },
//     ],
//   },
// };
// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;