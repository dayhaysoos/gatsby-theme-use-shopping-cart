const path = require(`path`)
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const {
  createFilePath,
  createRemoteFileNode
} = require(`gatsby-source-filesystem`)

const stripe = require('stripe')(process.env.STRIPE_API_SECRET)

const axios = require('axios')

const slugify = (str) => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

  return `${slug}`.replace(/\/\/+/g, '/')
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`

  type Price implements Node {
    billing_scheme: String!
    currency: String!
    product: Product
    priceID: String!
    unit_amount: Int
    livemode: Boolean
    id: String
  }

  type ProductFields {
    price: Price
  }

  type Product implements Node {
    id: String!
    object: String
    active: Boolean
    attributes: [String]
    created: Int
    description: String
    images: [String]
    livemode: Boolean
    name: String!
    statement_descriptor: String
    type: String!
    unit_label: String
    updated: Int
    productID: String!
    slug: String
    fields: ProductFields
    childFile: File
    price: Int
    priceID: String!
  }

  type Image {
    image: String
  }
  `)
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter
}) => {
  const pricesList = await stripe.prices.list({
    expand: ['data.product']
  })

  for (priceItem in pricesList.data) {
    const price = pricesList.data[priceItem]

    if (price.product.active) {
      const node = {
        ...price,
        priceID: price.id,
        internal: {
          type: 'Price',
          contentDigest: createContentDigest(price)
        }
      }
      actions.createNode(node)
    }
  }
}

// placeholder for products that have been turned into GQL Nodes
let products = []

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField, createParentChildLink },
  createNodeId,
  createContentDigest,
  getNode,
  store,
  cache
}) => {
  // Create a unique Product for every Price
  if (node.internal.type === 'Price' && !products.includes(node.product.id)) {
    let fileNode = await createRemoteFileNode({
      url: node.product.images[0],
      parentNodeId: node.priceID,
      createNode,
      createNodeId,
      cache,
      store
    })
    //if product isn't in the array, push the id into the array to keep track
    await products.push(node.product.id)

    if (fileNode) {
      node.localImage___NODE = fileNode.id
    }

    await createNode({
      ...node.product,
      id: node.priceID,
      productID: node.product.id,
      slug: slugify(node.product.name),
      price: node.unit_amount,
      priceID: node.priceID,
      internal: {
        type: 'Product',
        contentDigest: createContentDigest(node.product)
      }
    })

    await createNodeField({
      node: getNode(node.priceID),
      name: 'price',
      value: node
    })

    createParentChildLink({
      parent: getNode(node.priceID),
      child: getNode(fileNode.id)
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allProduct {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  result.data.allProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.slug}`,
      component: require.resolve(`./src/templates/product.js`),
      context: {
        slug: node.slug
      }
    })
  })
}
