import "./Hotel.css";
import Rating from "../Rating/Rating";
import Slider from "../Slider/Slider";
import RoomCollections from "../RoomCollections/RoomCollections";
import { IHotel } from "../../Containers/App";
    

const Hotel = ({id,name,address1,address2,starRating,images}:IHotel)=>{
    return(
        <div className="hotel-container">
                
                <div className="top-heading">
                    <div className="hotel-heading">
                        <div className="left-heading">
                            
                                <Slider images={images} name={name}/>
                                    <div className="center-heading">
                                        <h3>{name}</h3>
                                        <h4>{address1}</h4>
                                        <h5>{address2} </h5>
                                    </div>
                         </div>
                    
                        <div className="star-rating">
                         <Rating  starRating={starRating}/>
                        </div>
                    </div>
                </div>
            <RoomCollections  id={id}/>
         <div>
        </div>
          
        </div>
    )
}

export default Hotel;   