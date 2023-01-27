import * as React from "react"

import './sectionEvents.scss';
import EventCard from "../eventCard/eventCatd";
import RichText from '../richText/richText'


function SectionEvents ( {data, textDes})  {
  const descriptionData= {...textDes.nodes[0]}
  return (
    <section className="section-events" >
        <div className='container'>
         {descriptionData.title && <h2 className="title">{descriptionData.title}</h2>} 
         {descriptionData.textDescription && <RichText data={descriptionData.textDescription}/>} 
          <div className="row events-row">
            {data.map((show)=> {
            
                  return ( 
                    <div className="col" key={show.id}>
                       <EventCard showData= {show}/>
                  </div>
                  )
              })}

          </div>
        </div>
    </section>
   )
}


export default SectionEvents;
