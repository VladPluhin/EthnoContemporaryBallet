import * as React from "react"
import { Link}  from "gatsby"
import  './header.scss';

const Navigation = ({navData}) => {

  const Sublist= ({subData})=> {
    <ul className="header__sublist" >
       {subData.map((item)=>{
          return(
            <div key={item.id} className='li' >
                  <Link to={item.slug}>{item.nameBlock ? item.nameBlock : item.namePersone}</Link>
            </div>
          )
        })}
    </ul>
  }
   return (
      <div className="header__nav">
        <ul className="header__list">
            { navData.map((element)=> {
              if(element.sectionBlocks[0].slug) {
                return (   
                    <li key={element.id}>
                        <span>{element.textNavigationLink}</span>
                        <Sublist subData={[...element.sectionBlocks]} key={element.textNavigationLink}/>     
                    </li>
                )
              }
              else {
                return (   
                  <li key={element.id}>
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