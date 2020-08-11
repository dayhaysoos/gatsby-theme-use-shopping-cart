/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Box, Image, Close, Button } from 'theme-ui'
import { useShoppingCart } from 'use-shopping-cart'
import CheckoutImage from '../right-pane/checkout-image'
import QuantityInput from '../../components/quantity-input'

const ShoppingCartDetails = () => {
  const {
    total,
    removeItem,
    setItemQuantity,
    cartDetails,
    redirectToCheckout,
    shouldDisplayCart
  } = useShoppingCart()

  const options = []
  for (let quantity = 1; quantity <= 99; ++quantity)
    options.push(
      <option key={quantity} value={quantity}>
        {quantity}
      </option>
    )

  return (
    <Box tabIndex={shouldDisplayCart ? 0 : -1}>
      <Flex
        tabIndex={shouldDisplayCart ? 0 : -1}
        sx={{ justifyContent: 'space-around' }}
      >
        <Box sx={{ flex: 3 }}>Product</Box>
        <Box sx={{ flex: [2, 1] }}>Price</Box>
        <Box sx={{ flex: [2, 1] }}>Qty</Box>
      </Flex>
      <Box tabIndex={shouldDisplayCart ? 0 : -1} sx={{ marginTop: '20px' }}>
        {Object.keys(cartDetails).map((item) => {
          const cartItem = cartDetails[item]

          return (
            <Box sx={{ marginBottom: '10px' }}>
              <Flex
                tabIndex={shouldDisplayCart ? 0 : -1}
                key={cartItem.name}
                sx={{ justifyContent: 'space-around' }}
              >
                <Flex
                  tabIndex={shouldDisplayCart ? 0 : -1}
                  sx={{
                    flex: 3,
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                  }}
                >
                  {/* <span sx={{ margin: 0 }}>{cartItem.name}</span> */}
                  <Image
                    tabIndex={shouldDisplayCart ? 0 : -1}
                    alt={cartItem.name}
                    sx={{ width: '20%' }}
                    src={cartItem.images[0]}
                  />
                  <span sx={{ display: ['none', 'block', 'block'] }}>
                    {cartItem.name}
                  </span>
                </Flex>
                <p sx={{ flex: [2, 1], margin: 0, fontSize: ['16px', '24px'] }}>
                  {cartItem.formattedValue}
                </p>
                <Flex
                  tabIndex={shouldDisplayCart ? 0 : -1}
                  sx={{ flex: [2, 1] }}
                >
                  <select
                    tabIndex={shouldDisplayCart ? 0 : -1}
                    sx={{ flex: 1 }}
                    id="quantity-select"
                    value={cartItem.quantity}
                    fontSize={'20px'}
                    onChange={(event) => {
                      setItemQuantity(cartItem.sku, event.target.value)
                    }}
                  >
                    {options}
                  </select>
                </Flex>
              </Flex>
              <Box
                tabIndex={shouldDisplayCart ? 0 : -1}
                sx={{
                  textAlign: 'right',
                  lineHeight: '10px',
                  marginBottom: '1px'
                }}
              >
                <a
                  tabIndex={shouldDisplayCart ? 0 : -1}
                  href={''}
                  onClick={(event) => {
                    event.preventDefault()
                    removeItem(cartItem.sku)
                  }}
                  role="button"
                  sx={{ height: '100%', flex: 1, fontSize: '14px' }}
                >
                  Remove item
                </a>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default ShoppingCartDetails
