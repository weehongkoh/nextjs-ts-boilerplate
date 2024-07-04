import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(path.resolve(), "src/styles")],
  },
};

export default nextConfig;
