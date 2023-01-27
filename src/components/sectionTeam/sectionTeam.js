import * as React from "react"

import './sectionTeam.scss';
import PersonCard from "../personCard/personCard";
import RichText from '../richText/richText'


function SectionTeam ( {data, textDes})  {
  const descriptionData= {...textDes.nodes[0]}
   return (
    <section className="section-team" >
        <div className='container'>
         {descriptionData.title && <h2 className="title">{descriptionData.title}</h2>} 
         {descriptionData.textDescription && <RichText data={descriptionData.textDescription}/>} 
          <div className="row team-row">
            {data.map((personData)=> {
                  return ( 
                    <div className="col" key={personData.id}>
                       <PersonCard personData= {personData}/>
                  </div>
                  )
              })}
          </div>
        </div>
    </section>
   )
}


export default SectionTeam;
