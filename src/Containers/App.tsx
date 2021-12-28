import React ,{useState,useEffect,createContext} from 'react';
import './App.css';
import HotelCollections from '../Components/HotelCollections/HotelCollections';
import FilterRatingAndRooms from "../Components/FilterRatingAndRooms/FilterRatingAndRooms"
import { fetchData } from '../api/api';

export interface AppContextInterface {
  adults:number,
  children:number,
}

export const RoomContext = createContext<AppContextInterface>({adults:0, children:0});



export interface IImage{
  alt:string,
  url:string,
}
export interface IHotel{
   address1:string,
   address2:string,
   id:string,
   images:Array<IImage>,
   name: string,
   starRating:string,
        
}

const App=()=> {
 const [hotels,setHotels] = useState<Array<IHotel>>([])
 const [rating ,setRating] =useState<string>("");
 const [adults, setAdults]= useState<number>(0);
const [children,setChildren]=useState<number>(0)

    const incrementAdults =():void=>{
      if(adults<9){
        setAdults(adults+1);
      }
      
    }
    const decrementAdults = ():void=>{
      if(adults>0){
        setAdults(adults-1);
      }
    
  }

  const incrementChildren = ():void=>{
    if(children<9){
      setChildren(children+1);
    }
  }
  const decrementChildren = ():void=>{
    if(children>0){
      setChildren(children-1);
    }
  }

 const handleRating=(e:React.SyntheticEvent<HTMLInputElement>):void=>{
   setRating(e.currentTarget.value);
  
 }

 useEffect(()=>{
  const url=`https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG`
  const getHotels= async()=>{
    setHotels(await fetchData(url));
    // const response= await fetch(url)
    // const data = await response.json();
    // setHotels(data)
  }
  getHotels();
},[])
const filteredHotels= hotels.filter(({starRating})=>starRating>=rating);

  return (
    <RoomContext.Provider  value={{adults:adults,children:children}}>  
    <div className="App">
      <h1>Fancy Challenge</h1>
       <FilterRatingAndRooms 
       rating={rating} 
       handleRating={handleRating}  
       adults={adults}
       children={children}
       incrementAdults={incrementAdults}
       incrementChildren={incrementChildren}
       decrementAdults={decrementAdults}
       decrementChildren={decrementChildren}
       />
      <HotelCollections
       hotels={filteredHotels}
       />
    </div>
    </RoomContext.Provider>
  );
}

export default App;
