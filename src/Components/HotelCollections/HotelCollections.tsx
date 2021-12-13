import Hotel  from "../Hotel/Hotel";
import "./HotelCollection.css";
import { IHotel } from "../../Containers/App";

const HotelCollections=({hotels}:{hotels:Array<IHotel>})=>{
    return(
        <div className="hotel-collections">
        {
        hotels.map(hotel=>{
           return <Hotel
           key ={hotel.id}
           id={hotel.id}
           address1={hotel.address1}
           address2={hotel.address2}
           starRating={hotel.starRating }
           images={hotel.images}
           name={hotel.name}
          
            />
        })}
        
        </div>
    )
}

export default HotelCollections;