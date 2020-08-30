/**@jsx jsx */
import { Box, Flex, Button, jsx, Heading } from 'theme-ui'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import Img from 'gatsby-image'

const Product = ({ product }) => {
  const { addItem } = useShoppingCart()
  const {
    name,
    images,
    description,
    fields: { price },
    childFile: { childImageSharp }
  } = product

  const { unit_amount } = price
  return (
    <Flex
      sx={{
        flexDirection: ['column', 'row', 'row'],
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Img fluid={childImageSharp.fluid} />
      </Box>
      <Flex
        sx={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Heading as="h1">{name}</Heading>
          <Heading as="h2">{description}</Heading>
          <Heading as="h3">
            {formatCurrencyString({ value: unit_amount, currency: 'usd' })}
          </Heading>
          <Button
            sx={{ padding: 15 }}
            onClick={() => addItem({ ...product, sku: price.priceID })}
          >
            Add To Cart
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Product
