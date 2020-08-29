/** @jsx jsx */
import { jsx, Grid, Box, Button, Card, Image, Flex } from 'theme-ui'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { formatCurrencyString } from 'use-shopping-cart'
import Img from 'gatsby-image'
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

const Products = ({ data }) => {
  const products = data.allProduct.nodes

  return (
    <Layout>
      {products.length === 0 ? (
        <ComingSoon />
      ) : (
        <Grid as="section" columns={[1, 2, 4]}>
          {products.map((product) => {
            const { slug, childFile } = product

            return (
              <Card sx={{ padding: 20 }} key={product.id} as="article">
                <Link
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                  to={slug}
                >
                  {product.images && (
                    <Img fluid={childFile.childImageSharp.fluid} />
                  )}
                  <Flex
                    sx={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start'
                    }}
                  >
                    <h4 sx={{ marginBottom: 10 }}>{product.name}</h4>
                    <span>
                      {formatCurrencyString({
                        value: product.fields.price.unit_amount,
                        currency: 'usd'
                      })}
                    </span>
                  </Flex>
                </Link>
              </Card>
            )
          })}
        </Grid>
      )}
    </Layout>
  )
}

export default Products
