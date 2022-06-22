  exports.default = {
  stories: [
    "../story/**/*.mdx",
    "../story/**/*.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  webpackFinal: (config) => {
    config.module.rules[0].use.push({
      loader: "@linaria/webpack-loader",
      options: {
        sourceMap: process.env.NODE_ENV !== "production",
        babelOptions:{
          "presets": [
            "@babel/preset-typescript",
            "@babel/preset-env",
            "@babel/preset-react",
            "@linaria"
          ]
        }
      }
    });
    return config;
  }
};
