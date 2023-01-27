import * as React from "react"
import { Link} from "gatsby"
import  './header.scss';

const Header = () => {
   return (
      <header className="header">
        <div className="container">
        <nav className="header__navigation">
           <div className="header__logo">
            <Link to="/">
                  Ethno Contemporary Ballet
            </Link>
           </div>
         </nav>
        </div>
     </header>
   )
}


export default Header
