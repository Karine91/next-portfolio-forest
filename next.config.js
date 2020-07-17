const withImages = require('next-images');
const path = require('path');

module.exports = withImages({
  exclude: path.resolve(__dirname, 'src/assets/icons'),
  webpack: (
    config,
    {
      buildId, dev, isServer, defaultLoaders, webpack,
    },
  ) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    config.module.rules.push(
      {
        test: /\.(frag|vert)$/,
        loader: 'glsl-shader-loader',
      },
      {
        test: /\.svg$/,
        include: path.resolve(
          __dirname,
          'src/assets/icons',
        ),
        use: [
          'svg-sprite-loader',
          'svg-transform-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: '(stroke|fill)',
                  },
                },
              ],
            },
          },
        ],
      },
    );
    return config;
  },
});
