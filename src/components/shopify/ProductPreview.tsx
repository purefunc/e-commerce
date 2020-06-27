import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Button } from "../Button"
import VariantSelector from "./VariantSelector"
import { useCheckout } from "../../global"
// TODO: Either update variant selector or look at buy button logic on e-biz template
type Option = {
  name: string
  values: string[]
}

type Variant = {
  name: string
  price: string
  sku: string
  shopifyId: string
}

type Product = {
  title: string
  image: string
  description: string
  options: Option[]
  variants: Variant[]
}

type Props = {
  product: Product
}
const ProductPreview = ({ product }: Props) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const { addVariantToCart } = useCheckout()
  return (
    <ProductPreviewWrapper>
      <Link to="/product">
        <div>PRODUCT IMAGE HERE</div>
        <h2 css="color: var(--primaryColor)">{product.title}</h2>
      </Link>
      <VariantSelector
        variants={product.variants}
        setSelectedVariant={setSelectedVariant}
        selectedVariant={selectedVariant}
      />
      <Button onClick={() => addVariantToCart(selectedVariant.shopifyId, 1)}>
        Add to Cart
      </Button>
    </ProductPreviewWrapper>
  )
}

export default ProductPreview

const ProductPreviewWrapper = styled.div`
  padding: 0 var(--padding) var(--padding);
  border: 1px solid var(--lineColor);
  border-radius: var(--cardRadius);
`
