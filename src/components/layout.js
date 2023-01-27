/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <div className="wrapper" id='wrapper'>
      <Header/>
        <main>{children}</main>
        <Footer/>
      </div>
  )
}

export default Layout
