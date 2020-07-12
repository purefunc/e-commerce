import React, { FC } from "react"
import { CheckoutProvider } from "./checkout"
import { LoadingProvider } from "./loading"
import { DiscountProvider } from "./discount"

// Provider Composer imports all Providers so that we can isolate related state
// All state is managed through state hooks in the individual providers
function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  )
}

const ContextProvider: FC = ({ children }) => {
  return (
    <ProviderComposer
      contexts={[
        <LoadingProvider />,
        <CheckoutProvider />,
        <DiscountProvider />,
      ]}
    >
      {children}
    </ProviderComposer>
  )
}

export { ContextProvider }
