import * as React from "react"

import './sectionEvents.scss';
import EventCard from "../eventCard/eventCatd";
import RichText from '../richText/richText'
import * as sorts from '../sorts/sorts'

function SectionEvents ( {data, eventCard=''})  {

  const descriptionData =  sorts.getsortedCards(data, "blockDescription")
  const EventsData= sorts.getsortedCards(data, eventCard)
  
  
  return (
    <section className="section-events" >
        <div className='container'>
          {descriptionData[0].title && <h2 className="title">{descriptionData[0].title}</h2>} 
          {descriptionData[0].description && <RichText data={descriptionData[0].description}/>}
          
          
          <div className="row events-row">
            {EventsData.map((show)=> {
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
