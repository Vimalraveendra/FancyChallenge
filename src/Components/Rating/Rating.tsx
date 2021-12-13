import {useMemo} from 'react'
import "./Rating.css"

const Rating= ({starRating}:{starRating:string})=>{
  
  const ratingMemo=useMemo(()=>{
    const array =[...Array(5)];
    return array.map((star,index)=>{
        return <span className={index<parseInt(starRating)?"on":"off"}key={index}>&#9733;</span>
       })
  },[starRating]);

  return(
    <div>
      {ratingMemo}
    </div>
  )
   
}

export default Rating;