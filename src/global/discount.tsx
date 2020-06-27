import React, { FC, useEffect, createContext, useContext } from "react"
import { hasUrlParam, getUrlParam } from "../utils"
import { useCookie } from "../hooks"

export const initialDiscountValues = {
  discount: null,
}

export const DiscountContext = createContext(initialDiscountValues)

export const DiscountProvider: FC = ({ children }) => {
  // ? Used when giving a discount via url link
  // * Set ?discount=[CODE] at the end of a url to add a discount code
  const [discount, setDiscount] = useCookie({
    key: "discount",
    expires: 1,
  })

  useEffect(() => {
    if (hasUrlParam("discount")) {
      const urlParams = getUrlParam("discount")
      // If an param is present sets a cookie
      setDiscount(urlParams)
    }
  }, [])

  return (
    <DiscountContext.Provider
      value={{
        discount,
      }}
    >
      {children}
    </DiscountContext.Provider>
  )
}

export const useDiscount = () => useContext(DiscountContext)
