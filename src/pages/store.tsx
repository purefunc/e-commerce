// If you don't want to use TypeScript you can delete this file!
import React, { FC } from "react"
import { PageProps, graphql } from "gatsby"
import SEO from "../components/Seo"
import ProductPreview from "../components/Shopify/ProductPreview"
import { Grid } from "../styles"
import { Container, Wrapper } from "../styles"

const StorePage: FC = ({ data, path }) => (
  <>
    <SEO title="Store" />
    <Wrapper>
      <Container>
        <h1>Store Page</h1>
        <Grid cols={[1, 2, 3, 4]}>
          {FAKE_PRODUCTS.map(product => (
            <ProductPreview key={product.title} product={product} />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  </>
)

export default StorePage

const FAKE_PRODUCT = {
  title: "cool product",
  image: "",
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident`,
  variants: [
    {
      name: "variant 1",
      price: "29.99",
      sku: "123",
      shopifyId: "123",
    },
  ],
  options: [
    {
      name: "color",
      values: ["red", "blue"],
    },
  ],
}

const FAKE_PRODUCTS = [FAKE_PRODUCT, FAKE_PRODUCT, FAKE_PRODUCT, FAKE_PRODUCT]
