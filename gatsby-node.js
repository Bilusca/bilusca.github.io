/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateBabelConfig = ({ stage, actions }, pluginOptions) => {
    const ssr = stage === `build-html` || stage === `build-javascript`
  
    actions.setBabelPlugin({
      name: `babel-plugin-styled-components`,
      stage,
      options: { ...pluginOptions, ssr },
    })
  }