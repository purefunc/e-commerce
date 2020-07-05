import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ContextProvider } from "../global/state"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Cart from "../components/Shopify/Cart"

import "../styles/vars.css"
import "../styles/reset.css"
import "../styles/global.css"
import "../styles/classes.css"

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          facebook
          twitter
        }
      }
    }
  `)

  return (
    <ContextProvider>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        facebook={data.site.siteMetadata.facebook}
        twitter={data.site.siteMetadata.twitter}
      />
      <Cart />
    </ContextProvider>
  )
}

export default Layout
