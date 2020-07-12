import React, { FC } from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { Container, Wrapper } from "../styles"
import { Link } from "gatsby"

const Hero: FC = () => {
  return (
    <HeroContainer>
      <Wrapper>
        <h1>Hero</h1>
        <p>Sale and product Info/image will go here to catch attention</p>
        <Button as={Link} to="/store">
          Shop
        </Button>
      </Wrapper>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled(Container)`
  background: var(--gray);
  min-height: 500px;
`
