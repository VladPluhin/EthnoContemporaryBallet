import * as React from "react"

import { Scrollbars } from 'react-custom-scrollbars-2';
import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <div className="wrapper" id='wrapper'>
      <Header/>
         <Scrollbars style={{ width: '100%', height: '100vh' }}
           renderTrackVertical={props => <div {...props} className="track-vertical"/>}>
            <main>{children}</main>
            <Footer/>           
            </Scrollbars>
      </div>
  )
}

export default Layout
