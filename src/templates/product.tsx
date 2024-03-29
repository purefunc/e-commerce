import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
// import SEO from "~/components/Seo"
// import ProductForm from "~/components/ProductForm"
// import {
//   Img,
//   Container,
//   TwoColumnGrid,
//   GridLeft,
//   GridRight,
// } from "~/utils/styles"

const ProductPage = ({ data }) => {
  // console.log("DATA", data)
  return (
    <>
      {/* <SEO title={product.title} description={product.description} /> */}
      <h1>PRODUCT PAGE</h1>
      {/* <Container>
        <TwoColumnGrid>
          <GridLeft>
            {product.images.map(image => (
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={product.title}
              />
            ))}
          </GridLeft>
          <GridRight>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <ProductForm product={product} />
          </GridRight>
        </TwoColumnGrid>
      </Container> */}
    </>
  )
}

// export const query = graphql`
//   query($handle: String!) {
//     shopifyProduct(handle: { eq: $handle }) {
//       id
//       title
//       handle
//       productType
//       description
//       descriptionHtml
//       shopifyId
//       options {
//         id
//         name
//         values
//       }
//       variants {
//         id
//         title
//         price
//         availableForSale
//         shopifyId
//         selectedOptions {
//           name
//           value
//         }
//       }
//       priceRange {
//         minVariantPrice {
//           amount
//           currencyCode
//         }
//         maxVariantPrice {
//           amount
//           currencyCode
//         }
//       }
//       images {
//         originalSrc
//         id
//         localFile {
//           childImageSharp {
//             fluid(maxWidth: 910) {
//               ...GatsbyImageSharpFluid_withWebp_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default ProductPage

// export const ProductTitle = styled.h1`
//   font-size: 2.25rem;
//   margin-bottom: 15px;
//   word-wrap: break-word;
//   font-family: "Helvetica", "Helvetica", sans-serif;
//   font-weight: 400;
//   margin: 0 0 0.5rem;
//   line-height: 1.4;
// `

// export const ProductDescription = styled.div`
//   margin-top: 40px;
//   font-family: "Helvetica", "Helvetica", sans-serif;
//   font-weight: 300;
// `
