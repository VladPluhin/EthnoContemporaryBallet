import * as React from "react"
import './sectionAbout.scss';
import { Link} from "gatsby"
import RichText from '../richText/richText'

function SectionAbout ({data})  {
  return (
    <section className='section-about'  style={{backgroundColor: data.sectionColor? data.sectionColor : '' }}>
        <div className="container"> 
          {data.title &&  <h2 className="title" style={{color: data.textColor ? data.textColor : '#0000' }}>{data.title}</h2> }
          {data.description &&  <RichText data={data.description} colorText={ data.textColor}/>}
          {data.buttonText && <div className="btn-wrap">
               <Link to="/team" className="link" style={{color: data.textColor ? data.textColor: '#0000' }}>{data.buttonText}</Link>
            </div>}
        </div>
    </section>
   )
}


export default SectionAbout;
