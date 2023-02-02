import * as React from "react"
import { useStaticQuery, graphql , Link}  from "gatsby"
import  './header.scss';
import Navigation from './navigation'
const Header = ({}) => {

  const data = useStaticQuery(graphql`
  {
    contentfulHeader {
      nameBlock
      headerLogo {
        logoImage {
          url
        }
        logotext
        nameBlock
      }
    }
    allContentfulSection(filter: {ifNavPages: {eq: true}}) {
      nodes {
        textNavigationLink
        textUrl
        id
        nameBlock
        sectionBlocks {
          ... on ContentfulCardEvent {
            id
            nameBlock
            slug
            nameEvent
          }
          ... on ContentfulPersonCard {
            id
            slug
            namePersone
            nameBlock
          }
        }
      }
    }
  }
`)
const navData = [...data.allContentfulSection.nodes]
const headerLogo = {...data.contentfulHeader.headerLogo.logoImage}
   return (
      <header className="header">
        <div className="container">
        <nav className="header__navigation">
           <div className="header__logo">
              <Link to="/">
                    <img src={headerLogo.url} alt={headerLogo.description}/> 
              </Link>
            </div>
            <Navigation navData= {navData}/>
         </nav>
        </div>
     </header>
   )
}

export default Header