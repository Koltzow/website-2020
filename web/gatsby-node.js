const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanitySampleProject(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const projectEdges = (result.data.allSanitySampleProject || {}).edges || []

  projectEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/project/${slug}/`

      createPage({
        path,
        component: require.resolve('./src/templates/project.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createProjectPages(graphql, actions)
}

exports.createSchemaCustomization = ({actions}) => {
  const {createTypes} = actions
  const typeDefs = `
    type sanityFrontpage implements Node @dontInfer {
      description: {
        _key: String!
        _type: String!
        style: String!
        listItem: String!
        level: Integer!
        markDefs: {
          _key: String!
          _type: String!
          href: String!
        }
        children: {
          _key: String!
          _type: String!
          text: String!
          marks: Array!
          
        }
      }
      title: String!
    }
  `
  createTypes(typeDefs)
}
