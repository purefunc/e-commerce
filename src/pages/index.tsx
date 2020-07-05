import React, { FC, useState } from "react"
import { Container, Wrapper } from "../styles"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import Modal from "../components/Modal"
import { Button } from "../components/Button"

const HomePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <SEO title="Home" />
      <Hero />
      <Wrapper>
        <Container>
          <h1>Home Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Donec
            elementum ligula eu sapien consequat eleifend. Donec nec dolor erat,
            condimentum sagittis sem. Praesent porttitor porttitor risus,
            dapibus rutrum ipsum gravida et. Integer lectus nisi, facilisis sit
            amet eleifend nec, pharetra ut augue. Integer quam nunc, consequat
          </p>
          <Button onClick={() => setIsModalOpen(true)}>Test Modal</Button>
        </Container>
      </Wrapper>
      <Modal isActive={isModalOpen} closeAction={() => setIsModalOpen(false)}>
        <h4>Test Modal</h4>
        <p>
          This can be used for flash promos, newsletter sign-up prompts,
          upsells, and cross-sells
        </p>
      </Modal>
    </>
  )
}

export default HomePage
