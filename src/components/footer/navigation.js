import * as React from "react"
import { Link}  from "gatsby"
import  './footer.scss';

const Navigation = ({navData}) => {

   return (
      <div className="footer__nav">
        <ul className="footer__list">
            { navData.map((element)=> {
              if(element.sectionBlocks[0].slug) {
                return (   
                    <li key={element.id} className="footer__list-item">
                        <span>{element.textNavigationLink}</span>
                        <ul>
                          {[...element.sectionBlocks].map((item)=>{
                              return(
                                <li key={item.id} className='footer__list-item' >
                                      <Link to={element.textUrl + item.slug}>{item.nameEvent ? item.nameEvent : item.namePersone}</Link>
                                </li>
                              )
                            })}
                        </ul>
                    </li>
                )
              }
              else {
                return (   
                  <li key={element.id} className="footer__list-item">
                      <Link to={element.textUrl}>{element.textNavigationLink}</Link>
                  </li>
                )
              }
            })}
        </ul>
    </div>
   )
}




export default Navigation