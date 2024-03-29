import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import Nav from "./Nav"
import Banner from "./Banner"
import CartIcon from "./shopify/CartIcon"
import { sizes } from "../styles/breakpoints"

type Props = {
  siteTitle: string
}

const links = [
  {
    link: "/store",
    title: "Store",
  },
  {
    link: "/about",
    title: "About",
  },
]

const Header = ({ siteTitle }: Props) => (
  <>
    <HeaderWrapper>
      <Banner />
      <InnerHeader>
        <h1 className="logo">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div className="nav-wrapper">
          <Nav links={links} />
          <CartIcon />
        </div>
      </InnerHeader>
    </HeaderWrapper>
  </>
)

export default Header

const HeaderWrapper = styled.header`
  top: -1px;
  width: 100%;
  height: 110px;
  background: var(--lightGray);
  z-index: var(--headerLevel);
  position: sticky;
`

const InnerHeader = styled.div`
  color: white;
  position: relative;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--basePadding);
  max-width: ${sizes.xLarge / 16}em;
  margin: auto;
  display: flex;
  height: 70px;
  .logo {
    font-size: var(--baseFontSize);
    margin: 0;
    flex-shrink: 1;
    a {
      display: flex;
      align-items: center;
      background: none;
      svg {
        margin-right: 10px;
      }
    }
  }
  .nav-wrapper {
    display: flex;
    align-items: center;
  }
`
