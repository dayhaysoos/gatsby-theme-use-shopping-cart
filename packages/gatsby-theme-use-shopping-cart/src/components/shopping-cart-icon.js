/** @jsx jsx */
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { jsx, Button, Flex } from 'theme-ui'
import { FaShoppingCart } from 'react-icons/fa'

const ShoppingCartIcon = () => {
  const { cartCount, handleCartClick, shouldDisplayCart } = useShoppingCart()

  return (
    <Button
      sx={{
        transition: 'all .2s ease',
        height: '36px',
        width: '36px',
        '&:hover': {
          transform: 'scale(1.1)'
        }
      }}
      aria-label={`Shopping Cart with ${cartCount} ${
        cartCount === 1 ? 'item' : 'items'
      }`}
      onClick={handleCartClick}
    >
      <div>
        <FaShoppingCart size={30} />
        {cartCount === 0 ? null : (
          <Flex
            as="span"
            sx={{
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
              bottom: '20px',
              border: '1px solid',
              bottom: '46px',
              left: '24px',
              borderColor: 'accent',
              borderRadius: '50%',
              height: '24px',
              width: '24px',
              backgroundColor: 'accent'
            }}
          >
            {cartCount}
          </Flex>
        )}
      </div>
    </Button>
  )
}

export default ShoppingCartIcon
