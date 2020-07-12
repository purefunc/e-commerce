import React, { FC } from "react"
import SEO from "../components/Seo"
import { Container, Wrapper } from "../styles"

const NotFoundPage: FC = () => (
  <>
    <SEO title="404: Not found" />
    <Wrapper>
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Wrapper>
  </>
)

export default NotFoundPage
