/** @jsx jsx */
import { jsx, Grid, Box, Button, Flex } from 'theme-ui'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { formatCurrencyString } from 'use-shopping-cart'
import Img from 'gatsby-image'
import { useShoppingCart } from 'use-shopping-cart'
import ComingSoon from '../components/coming-soon'

export const query = graphql`
  {
    allProduct {
      nodes {
        description
        name
        productID
        images
        slug
        childFile {
          childImageSharp {
            id
            fluid(quality: 100, maxHeight: 200) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        fields {
          price {
            unit_amount
          }
        }
      }
    }
  }
`

function Products({ data }) {
  const { addItem } = useShoppingCart()
  const products = data.allProduct.nodes
  return (
    <Layout>
      {products.length === 0 ? (
        <ComingSoon />
      ) : (
        <Grid columns={[1, 2, 4]}>
          {products.map((product) => {
            const { slug, childFile } = product
            return (
              <Box key={slug}>
                <Flex
                  as={Link}
                  to={`/products/${slug}`}
                  sx={{
                    paddingTop: '24px',
                    paddingBottom: '24px',
                    flexDirection: 'column',
                    color: 'text',
                    justifyContent: 'center',
                    fontWeight: '700',
                    textDecoration: 'none'
                  }}
                >
                  <Img fluid={childFile.childImageSharp.fluid} />
                  <Box as="p">{product.name}</Box>
                  <Box as="p">
                    {formatCurrencyString({
                      value: product.fields.price.unit_amount,
                      currency: 'usd'
                    })}
                  </Box>
                  <Box as="p">{product.description}</Box>
                </Flex>

                <Flex sx={{ justifyContent: 'center' }}>
                  <Button
                    onClick={() =>
                      addItem({
                        ...product,
                        price: product.fields.price.unit_amount,
                        currency: 'usd'
                      })
                    }
                    sx={{ backgroundColor: 'teal' }}
                    alt={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </Button>
                </Flex>
              </Box>
            )
          })}
        </Grid>
      )}
    </Layout>
  )
}

export default Products
