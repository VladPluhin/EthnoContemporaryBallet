import * as React from "react"

import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.scss"

const Layout = ({ children }) => {
  function headerOnScroll (){
    var className = "scrolled";
    var scrollTrigger = 1;

    window.onscroll = function() {
        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
            document.querySelector(".header")?.classList.add(className);
        } else {
            document.querySelector(".header")?.classList.remove(className);
        }
    };
}

 headerOnScroll();
  return (
    <div className="wrapper" id='wrapper'>
        <Header/>
            <main>{children}</main>
            <Footer/>           
    </div>
  )
}

export default Layout
