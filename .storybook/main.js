exports.default = {
  stories: [
    "../src/story/**/*.mdx",
    "../src/story/**/*.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}