import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { LineItem, Cart as ShopifyCart } from "shopify-buy"
import { below, Flex } from "../../styles"
import { useScrollFreeze } from "../../hooks"
import { transformParams } from "../../utils"
import { useCheckout, useDiscount, useLoad } from "../../global"
import { LoadingSpinner } from "../Loader"
import { Button } from "../Button"
import CartItem from "./CartItem"
import Icon from "../Icon"
import Portal from "../Portal"

const Cart = () => {
  const { checkout, isCartOpen, closeCart } = useCheckout()
  const { discount } = useDiscount()
  const { isLoading, setIsLoading } = useLoad()
  if (!checkout) return null

  const openCheckout = () => {
    setIsLoading(true)

    const discountVal = discount ? `&discount=${discount}` : ""
    window.location.href = transformParams(`${checkout.webUrl}${discountVal}`)

    setIsLoading(false)
  }

  return (
    <Portal>
      <AnimatePresence>
        {isCartOpen && (
          <CartModal
            isCartOpen={isCartOpen}
            closeCart={closeCart}
            checkout={checkout}
            openCheckout={openCheckout}
            isCheckoutLoading={isLoading}
            discount={discount}
            isLoading={isLoading}
          />
        )}
      </AnimatePresence>
    </Portal>
  )
}

export default Cart

type CartModalProps = {
  isCartOpen: boolean
  closeCart: () => void
  openCheckout: () => void
  isCheckoutLoading: boolean
  checkout: ShopifyCart
  discount: string | null
  isLoading: boolean
}

const CartModal = ({
  isCartOpen,
  closeCart,
  checkout,
  isCheckoutLoading,
  openCheckout,
  discount,
  isLoading,
}: CartModalProps) => {
  useScrollFreeze()
  const pointerEvents = isCartOpen ? `all` : `none`
  const isCartEmpty = checkout.lineItems.length < 1

  const subtotal = checkout.subtotalPrice

  return (
    <>
      <ModalWrapper>
        <Transport
          initial={{ right: -500 }}
          animate={{ right: 0 }}
          exit={{ right: -500 }}
          transition={{ duration: 0.3 }}
          css="position: relative"
        >
          <CartWrapper isCartOpen={isCartOpen} style={{ pointerEvents }}>
            <div data-testid="cart">
              <Flex css="margin-bottom: 2rem">
                <h4
                  css="color: var(--primaryColor); margin: 0"
                  data-testid="cart-title"
                >
                  Your Cart
                </h4>
                <button onClick={closeCart}>
                  <Icon name="close" color="var(--primaryColor)" />
                </button>
              </Flex>
              <div css="margin-bottom: 3rem">
                {isCartEmpty && (
                  <>
                    <p data-testid="empty-cart" className="center-text">
                      Your cart is empty.
                    </p>
                    <Button
                      as={Link}
                      onClick={closeCart}
                      css="width: 100%; margin-bottom: 2rem"
                      to="/products/"
                    >
                      Shop
                    </Button>
                  </>
                )}
                {checkout.lineItems.map(
                  (lineItem: LineItem) =>
                    lineItem && (
                      <CartItem key={lineItem.id} lineItem={lineItem} />
                    )
                )}
              </div>

              {!isCartEmpty && (
                <footer css="margin: 2rem 0; text-align: center">
                  <Flex>
                    <p className="large">Subtotal</p>
                    <p className="large blue-text">
                      <strong> ${subtotal.toFixed(2)}</strong>
                    </p>
                  </Flex>

                  <Button
                    data-testid="cart-checkout-button"
                    css="width: 100%; margin-bottom: 2rem"
                    onClick={openCheckout}
                    disabled={isCheckoutLoading}
                  >
                    Checkout {isLoading && <LoadingSpinner isInButton />}
                  </Button>
                  <p className="subtext">
                    Shipping and taxes are added at checkout.
                  </p>
                </footer>
              )}
            </div>
          </CartWrapper>
        </Transport>
      </ModalWrapper>

      <Background
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={closeCart}
      />
    </>
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  align-items: center;
  height: 100vh;
  overflow-y: scroll;
  pointer-events: none;
  z-index: var(--highestLevel);
  ${below.xSmall`
      left: 0;
  `}
`

const Background = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: all;
  background: linear-gradient(
    142.24deg,
    rgba(0, 40, 58, 0.6) 3.62%,
    rgba(0, 167, 225, 0.6) 100%
  );
  width: 100vw;
  height: 100vh;
  z-index: 11;
`

const CartWrapper = styled.div`
  padding: var(--basePadding);
  background: var(--white);
  height: 100vh;
  overflow-y: scroll;
  width: 42.2rem;
  margin-left: 1rem;
  box-shadow: var(--left-elevation);
  z-index: var(--highestLevel);
  ${below.xSmall`
    width: 100%;
    margin-left: 0;
  `};
`

const Transport = styled(motion.div)`
  width: 100%;
`
