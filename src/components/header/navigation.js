import * as React from "react"
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
   return (
      <div className="header__nav">
        <ul className="header__list">
            { navData.map((element)=> {
              if(element.sectionBlocks[0].slug) {
                return (   
                    <li key={element.id} className="header__list-item">
                        <span>{element.textNavigationLink}</span>
                        <ul>
                          {[...element.sectionBlocks].map((item)=>{
                              return(
                                <li key={item.id} className='header__list-item' >
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
                  <li key={element.id} className="header__list-item">
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