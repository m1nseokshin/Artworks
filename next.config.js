/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  // 기존 설정...

  // 웹팩 로더 설정 추가
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4|avi)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos',
            outputPath: 'static/videos',
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
