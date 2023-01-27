import { Link } from "gatsby";
import * as React from "react"
import './eventCard.scss';


function EventCard({showData}) {
    return(
        <div className="event-card">
            {showData.newEvent && <span className="newEvent">{showData.newEvents}</span>}
            {showData.image && <div className='event-card__img'>
                <Link to={`/team/${showData.slug}`} >
                    <img src={showData.image.url} alt={showData.image.description}/>  
                </Link>
            </div>}
            <div className="event-card__body">
                {showData.title && <Link to={`/team/${showData.slug}`}  className="event-card__title">{showData.title}</Link>}
                {showData.previewText && <div className="event-card__text">
                    <p>{showData.previewText}</p>
                </div>}
                {showData.slug&& 
                    <div className="btn-wrap">
                        <Link to={`/team/${showData.slug}`} className='link'>{showData.textBtn}</Link>
                    </div>
                }
            </div>
        </div>  
    )
}

export default EventCard;

