/**@jsx jsx */
import { Box, Button, jsx, Grid } from 'theme-ui'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import Img from 'gatsby-image'
import SEO from './seo'

const Product = ({ product }) => {
  const { addItem } = useShoppingCart()
  const {
    name,
    description,
    fields: { price },
    childFile: { childImageSharp }
  } = product

  const { unit_amount } = price
  return (
    <Box sx={{ maxWidth: '768px', margin: '0 auto' }}>
      <SEO title={name} />
      <Grid sx={{ color: 'text', fontWeight: '700' }} columns={[1, 2]}>
        <Box>
          <Img alt={`${name}`} fluid={childImageSharp.fluid} />
        </Box>
        <Box
          as="section"
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box as="p">{description}</Box>
            <Box as="p">
              {formatCurrencyString({ value: unit_amount, currency: 'USD' })}
            </Box>
          </Box>
          <Button
            onClick={() => addItem(product)}
            sx={{ backgroundColor: 'teal' }}
            alt={`Add ${name} to cart`}
          >
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default Product
