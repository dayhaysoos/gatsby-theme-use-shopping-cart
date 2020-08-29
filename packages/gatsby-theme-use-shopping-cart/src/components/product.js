import React from 'react'
import { Box, Flex, Button } from 'theme-ui'
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
          <h1>{name}</h1>
          <h3>{description}</h3>
          <h4>
            {formatCurrencyString({ value: unit_amount, currency: 'usd' })}
          </h4>
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
