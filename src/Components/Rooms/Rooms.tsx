import "./Room.css"
import { IRoom } from "../RoomCollections/RoomCollections";


const Rooms:React.FC <IRoom> = ({id,name,longDescription,occupancy})=>{
    return(
        <div className="room-container">
        <div className="address-container">
       
            <div className="address">
     
               <h3>Room:{name}</h3>
               <h4>Adults:{occupancy.maxAdults}</h4>
               <h5>Children:{occupancy.maxChildren}</h5>
             
            </div>
            </div> 
            <div className="description">
               <h4>{longDescription}</h4>
            </div>
        
        </div>
    )
}

export default Rooms;