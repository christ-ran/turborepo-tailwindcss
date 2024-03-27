/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  webpack(config, { isServer }) {
    if (!isServer) {
        config.externals.push('sharp')
    }
    config.module.rules.push({
        test: /\.glsl$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader']
    })

    return config;
  }
};
