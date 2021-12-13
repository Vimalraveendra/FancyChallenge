import React ,{useState,useEffect,createContext} from 'react';
import './App.css';
import HotelCollections from '../Components/HotelCollections/HotelCollections';
import FilterRatingAndRooms from "../Components/FilterRatingAndRooms/FilterRatingAndRooms"
// import { fetchData } from '../api/api';

export interface AppContextInterface {
  num:number,
  value:number,
}

export const RoomContext = createContext<AppContextInterface>({num:0, value:0});



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
 const [num, setNum]= useState<number>(0);
const [value,setValue]=useState<number>(0)

    const incrementNumber =():void=>{
      if(num<9){
        setNum(num+1);
      }
      
    }
    const decrementNumber = ():void=>{
      if(num>0){
        setNum(num-1);
      }
    
  }

  const incrementValue = ():void=>{
    if(value<9){
      setValue(value+1);
    }
  }
  const decrementValue = ():void=>{
    if(value>0){
      setValue(value-1);
    }
  }

 const handleRating=(e:React.SyntheticEvent<HTMLInputElement>):void=>{
   setRating(e.currentTarget.value);
  
 }

 useEffect(()=>{
  const url=`https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG`
  const getHotels= async()=>{
    // setHotels(await fetchData(url));
    const response= await fetch(url)
    const data = await response.json();
    setHotels(data)
  }
  getHotels();
},[])
const filteredHotels= hotels.filter(({starRating})=>starRating>=rating);

  return (
    <RoomContext.Provider  value={{num:num,value:value}}>  
    <div className="App">
      <h1>Fancy Challenge</h1>
       <FilterRatingAndRooms 
       rating={rating} 
       handleRating={handleRating}  
       value={value}
       num={num}
       incrementNumber={incrementNumber}
       incrementValue={incrementValue}
       decrementNumber={decrementNumber}
       decrementValue={decrementValue}
       />
      <HotelCollections
       hotels={filteredHotels}
       />
    </div>
    </RoomContext.Provider>
  );
}

export default App;
