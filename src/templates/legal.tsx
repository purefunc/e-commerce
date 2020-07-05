import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/Seo"
import { Wrapper } from "../styles"

const LegalTemplate = ({ data }) => {
  // const { markdownRemark } = data
  // const { frontmatter, html } = markdownRemark
  return (
    <>
      <div>hi</div>
      {/* <SEO title={frontmatter.title} description={frontmatter.description} />
      <Wrapper width="tight">
        <div className="top-padding center-text">
          <h1>{frontmatter.title}</h1>
          <hr className="top-padding" />
        </div>
        <LegalMarkdown
          className="container"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Wrapper> */}
    </>
  )
}

export default LegalTemplate

const LegalMarkdown = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li a {
    color: var(--primaryColor);
  }
  p,
  ol {
    margin-bottom: 4rem;
  }
  ul {
    list-style: disc;
    padding-left: 2rem;
  }
`

// export const legalTemplateQuery = graphql`
//   query LegalTemplate($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         slug
//         title
//         description
//       }
//     }
//   }
// `
