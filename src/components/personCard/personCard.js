import { Link } from "gatsby";
import * as React from "react"
import './personCard.scss';
function PersonCard({personData}) {
    console.log(personData)
    return(
        <div className="person-card"  style={{backgroundColor: personData.bgColorCard ?  personData.bgColorCard : '#00087a' }}>
            <Link to={`/team/${personData?.slug}`} className="link-image">
                {personData.personImage.url  &&<div className='person-card__img'>
                 <img src={personData.personImage.url} alt={personData.personImage.description}/>  </div>}
                <div className='person-card__body' >
                    <span className="bg-body" style={{backgroundColor: personData.bgColorAnimation ?  personData.bgColorAnimation : '#fff' }}></span>
                    {personData.namePersone &&  <h5 className='person-card__title' style={{color: personData.colorText ?  personData.colorText : '#fff' }}>{personData.namePersone} </h5>}
                    {personData.position &&  
                        <div className='person-card__position' style={{color: personData.colorText ?  personData.colorText : '#fff' }}>
                            <p>{personData.position}</p>
                        </div>
                    }
                </div>
            </Link>
        </div>  
    )
}

export default PersonCard;

