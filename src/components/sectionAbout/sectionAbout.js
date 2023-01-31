import * as React from "react"
import './sectionAbout.scss';
import { Link} from "gatsby"
import RichText from '../richText/richText'

function SectionAbout ({data})  {
  const sectionData = {...data[0]};
  return (
    <section className='section-about'  style={{backgroundColor: sectionData.sectionColor? sectionData.sectionColor : '' }}>
        <div className="container"> 
          {sectionData.title &&  <h2 className="title" style={{color: sectionData.textColor ? sectionData.textColor : '#0000' }}>{sectionData.title}</h2> }
          {sectionData?.description &&  <RichText data={sectionData?.description} colorText={ sectionData.textColor}/>}
          {sectionData.buttonText && <div className="btn-wrap">
               <Link to="/team" className="link" style={{color: sectionData.textColor ? sectionData.textColor: '#0000' }}>{sectionData.buttonText}</Link>
            </div>}
        </div>
    </section>
   )
}


export default SectionAbout;
