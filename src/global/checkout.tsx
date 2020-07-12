import React, {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react"
import Cookies from "js-cookie"
import Client, { LineItem as CartLineItem, Cart } from "shopify-buy"
import { useCookie } from "../hooks"
import { useLoad } from "./loading"

type LineItem = {
  variantId: string
  quantity: number
}

export const initialCheckoutValues = {
  cartQuantity: 0,
  addVariantToCart: (_: LineItem) => {},
  addThriveKitToCart: (_: {
    controller?: LineItem | null
    thriveKit: LineItem
    replenishmentKit: LineItem
  }) => {},
  setIsCartOpen: () => {},
  closeCart: () => {},
  openCart: () => {},
  checkout: { lineItems: [] },
  isCartOpen: false,
  updateQuantityInCart: (_: { id: string; quantity: number }) => {},
  removeLineItemInCart: (_: { id: string; name: string; price: string }) => {},
  updateCustomAttributes: () => {},
}

export const CheckoutContext = createContext(initialCheckoutValues)

const client = Client.buildClient({
  domain: `${process.env.GATSBY_SHOPIFY_STORE_NAME}.myshopify.com`,
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN,
})

export const CheckoutProvider: FC = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [checkout, setCheckout] = useState<Cart | null>(null)
  const [cartId, setCartId] = useCookie({ key: "cartId", expires: 1 })
  const { setIsLoading } = useLoad()

  const createCheckout = async () => {
    setIsLoading(true)
    try {
      const checkoutCart: Cart = await client.checkout.create()
      setCartId(checkoutCart.id)
      setCheckout(checkoutCart)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }

  const getCheckout = async () => {
    if (cartId) {
      try {
        const checkoutCart: Cart = await client.checkout.fetch(cartId)
        if (checkoutCart?.completedAt) {
          // If checkout was complete then reset cart cookies and make new checkout
          Cookies.remove("cartId")
          return createCheckout()
        }
        return setCheckout(checkoutCart)
      } catch (e) {
        console.log(e)
      }
    }
    return createCheckout()
  }

  useEffect(() => {
    getCheckout()
  }, [])

  const closeCart = () => {
    setIsCartOpen(false)
    console.log("CLOSe", isCartOpen)
  }

  const openCart = () => {
    setIsCartOpen(true)
    console.log("OPEN", isCartOpen)
  }

  const addVariantToCart = async ({
    variantId,
    quantity,
  }: {
    variantId: string
    quantity: number
  }) => {
    setIsLoading(true)
    if (!isCartOpen) {
      openCart()
    }

    try {
      const result = await client.checkout.addLineItems(checkout.id, [
        { variantId, quantity },
      ])

      setCheckout(result)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }

  const updateQuantityInCart = async ({
    id,
    quantity,
  }: {
    id: string
    quantity: number
  }) => {
    if (quantity <= 0) {
      return removeLineItemInCart({ id })
    }
    setIsLoading(true)

    try {
      const result = await client.checkout.updateLineItems(checkout.id, [
        { id, quantity },
      ])
      setCheckout(result)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }

  const removeLineItemInCart = async ({ id }: { id: string }) => {
    setIsLoading(true)
    try {
      const result = await client.checkout.removeLineItems(checkout.id, [id])

      setCheckout(result)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }

  const updateCustomAttributes = async customAttributes => {
    setIsLoading(true)
    try {
      const result = await client.checkout.updateAttributes(checkout.id, {
        customAttributes,
      })

      setCheckout(result)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }

  const cartQuantity = checkout?.lineItems.length
    ? checkout?.lineItems
        .map((lineItem: CartLineItem) => lineItem.quantity)
        .reduce((accumulator, quantity) => accumulator + quantity)
    : 0

  return (
    <CheckoutContext.Provider
      value={{
        cartQuantity,
        addVariantToCart,
        openCart,
        closeCart,
        checkout,
        isCartOpen,
        updateQuantityInCart,
        removeLineItemInCart,
        updateCustomAttributes,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckout = () => useContext(CheckoutContext)
