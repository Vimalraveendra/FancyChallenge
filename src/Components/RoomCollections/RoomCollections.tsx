import {useState,useEffect,useContext} from "react";
import Rooms from "../Rooms/Rooms";
import "./RoomCollections.css"
import { RoomContext } from "../../Containers/App";
import { fetchData } from "../../api/api";



 export interface IRoom{
    id:string,
    longDescription:string,
    name: string,
    occupancy:IOccupancy     
 }

interface IOccupancy{
  maxAdults:number,
  maxChildren:number,
}

const RoomCollections=({id}:{id:string})=>{
  const [rooms, setRooms] = useState<Array<IRoom>>([])

  const {num,value} = useContext(RoomContext) 
  
   
    useEffect(()=>{
        const url=`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`
        const getHotels= async()=>{
           setRooms((await fetchData(url)).rooms)
          // const response= await fetch(url)
          // const data = await response.json();
          // setRooms(data.rooms )
        }
        getHotels();
      },[id])
    
      const filteredRooms= rooms.filter(({occupancy})=>{
        const {maxAdults,maxChildren}=occupancy;
       if(num<1 && value<1){
         return occupancy
       } 
       return maxAdults>=num && maxChildren>=value
      });
     
    return(
        <div className="room-collections">
       {
          // rooms.length>0 && rooms.map(({id,name,longDescription,occupancy})=>{
           filteredRooms.map(({id,name,longDescription,occupancy})=>{
           return <Rooms
           key={id}
           id={id}
           name={name}
           longDescription={longDescription}
           occupancy={occupancy}
           />
         })
       }
        </div>
    )
}

export default RoomCollections;