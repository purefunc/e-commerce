import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Social from "../components/Social"
import Nav from "../components/Nav"
import { Container, Flex, Items } from "../styles"
import { sizes, media } from "../styles/breakpoints"

type Props = {
  siteTitle: string
  facebook?: string
  twitter?: string
}

const links = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/store",
    title: "Store",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/contact",
    title: "Contact",
  },
]

const thisYear = new Date().getFullYear()

const Footer: FC = ({ siteTitle, facebook = "", twitter = "" }: Props) => (
  <FooterLayout as="footer">
    <FooterInner>
      <h2 css="font-size: var(--baseFontSize);">
        <Link to="/" aria-label="home page">
          {siteTitle}
        </Link>
      </h2>
      <div css="text-align: center">
        <Nav links={links} />
        <p className="small">
          ©{thisYear} {siteTitle}. All rights reserved.
        </p>
        <ul className="sub-nav">
          <li>
            <p className="small">
              <Link to="/terms" aria-label="terms of use">
                Terms of Use
              </Link>
            </p>
          </li>
          <li>
            <p className="small">
              <Link to="/privacy-policy" aria-label="privacy policy">
                Privacy Policy
              </Link>
            </p>
          </li>
        </ul>
      </div>
      {(facebook || twitter) && (
        <Items>
          <Social facebook={facebook} twitter={twitter} siteTitle={siteTitle} />
        </Items>
      )}
    </FooterInner>
  </FooterLayout>
)

const FooterLayout = styled(Container)`
  padding-top: var(--basePadding);
  background: var(--darkGray);
  color: var(--white);
  a {
    color: var(--white);
  }
  .sub-nav {
    display: flex;
    justify-content: center;
    li {
      margin: 0 10px;
    }
  }
`

const FooterInner = styled(Flex)`
  max-width: ${sizes.xLarge / 16}em;
  margin: auto;
  flex-direction: column;
  padding: 0 var(--basePadding);
  align-items: center;
  ${media.medium`
    flex-direction: row;
    align-items: flex-start;
  `}
`

export default Footer
