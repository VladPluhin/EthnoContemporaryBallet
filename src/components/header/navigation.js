import  React , {useEffect} from "react"
import { Link}  from "gatsby"
import  './header.scss';

const Navigation = ({navData}) => {

  // const Sublist= ({subData})=> {
  //   <ul className="header__sublist" >
  //      {subData.map((item)=>{
  //         return(
  //           <div key={item.id} className='li' >
  //                 <Link to={item.slug}>{item.nameBlock ? item.nameBlock : item.namePersone}</Link>
  //           </div>
  //         )
  //       })}
  //   </ul>
  // }

  function subMenuInit() {
  
    const submenuOpeners = Array.from( document.querySelectorAll('.link-with-submenu'));
    const closeBtn = Array.from(document.querySelectorAll('.close-btn'));
    
    submenuOpeners.map((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault()
            item.classList.toggle('active')
            closeBtn.map((closeBTn)=> {
                    closeBTn.addEventListener("click", (event) => {
                    event.preventDefault()
                    item.classList.remove('active')
                })
            })
        })
    })
}
useEffect(() => {
  subMenuInit()
}, [])
   return (
        <ul className="header__list">
            { navData.map((element)=> {
              if(element.sectionBlocks[0].slug) {
                return (   
                    <li key={element.id} className="header__list-item  nav-with-submenu">
                        <span className="link-with-submenu">{element.textNavigationLink}</span>
                        <div className="submenu">
                          <a href="" className="close-btn">back to</a>
                          {[...element.sectionBlocks].map((item)=>{
                             if (item.namePersone != undefined || item.nameEvent!=undefined) {
                              return(
                                <div key={item.id}  >
                                      <Link to={element.textUrl + item.slug}>{item.nameEvent ? item.nameEvent : item.namePersone}</Link>
                                </div>
                              )
                             }
                            })}
                        </div>
                    </li>
                )
              }
              else {
                return (   
                  <li key={element.id} className="header__list-item">
                      <Link to={element.textUrl}>{element.textNavigationLink}</Link>
                  </li>
                )
              }
            })}
        </ul>
   )
}




export default Navigation