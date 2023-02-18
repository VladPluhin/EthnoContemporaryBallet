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
