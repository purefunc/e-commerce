import React, { FC } from "react"
import SEO from "../components/Seo"
import { Container, Wrapper } from "../styles"

const AboutPage: FC = () => (
  <>
    <SEO title="About" />
    <Wrapper>
      <Container>
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Donec elementum
          ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum
          sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum
          gravida et. Integer lectus nisi, facilisis sit amet eleifend nec,
          pharetra ut augue. Integer quam nunc, consequat
        </p>
      </Container>
    </Wrapper>
  </>
)

export default AboutPage
