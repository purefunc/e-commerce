// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// // Create nodes for markdown files
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   //   allShopifyProduct {
//   //     edges {
//   //       node {
//   //         handle
//   //       }
//   //     }
//   //   }
//   // }
//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()))
//       return Promise.reject(result.errors)
//     }

//     // result.data.allShopifyProduct.edges.forEach(({ node }) => {
//     //   createPage({
//     //     path: `/product/${node.handle}/`,
//     //     component: path.resolve(`./src/templates/product.tsx`),
//     //     context: {
//     //       // Data passed to context is available
//     //       // in page queries as GraphQL variables.
//     //       handle: node.handle,
//     //     },
//     //   })
//     // })

//     const legalTemplate = path.resolve(`./src/templates/legal.tsx`)

//     // Create legal pages
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.slug,
//         component: legalTemplate,
//         context: {
//           slug: node.frontmatter.slug,
//         },
//       })
//     })
//   })
// }
