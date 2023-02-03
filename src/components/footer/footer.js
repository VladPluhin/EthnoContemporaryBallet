import * as React from "react"
import { Link,  useStaticQuery, graphql } from "gatsby"
import './footer.scss';
import Navigation from './navigation';

const Footer =  ({}) => {

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
       <footer className="footer">
         <div className="container">
         <nav className="footer__navigation">
            <div className="footer__logo">

               <Link to="/">
                     <img src={headerLogo.url} alt={headerLogo.description}/> 
               </Link>
               
             </div>
             <Navigation navData= {navData}/>
          </nav>
         </div>
      </footer>
    )
 }


export default Footer
