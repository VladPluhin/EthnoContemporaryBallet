import  React, {useEffect} from "react"
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

  function menuInit (){
    document.querySelector('.hamburger-btn')?.addEventListener('click', function () {
        document.body.classList.toggle('menu-open');
        document.body.classList.remove("panel-menu-open");
        if(document.body.classList.contains("search-popup-opened")) {
            document.body.classList.remove("search-popup-opened")
            document.querySelector('.fnc-search-popup-container').classList.remove('search-popup-active')
        }
    });
  }
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

  useEffect(() => {
    menuInit()
    headerOnScroll ()
  }, [])
   return (
      <header className="header">
        <div className="container">
        <nav className="header__navigation">
           <div className="header__logo">
              <Link to="/">
                    <img src={headerLogo.url} alt={headerLogo.description}/> 
              </Link>
            </div>
            <span className="hamburger-btn">
                <span></span>
            </span>
            <Navigation navData= {navData} id={'header'}/>
         </nav>
       
        </div>
     </header>
   )
}

export default Header