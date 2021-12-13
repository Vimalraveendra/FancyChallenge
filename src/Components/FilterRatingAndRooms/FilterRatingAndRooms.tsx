
 import "./FilterRatingAndRooms.css"

 export interface Props {
  rating:string|number,
  handleRating:(e:React.SyntheticEvent<HTMLInputElement>)=>void,
  num:number,
  value:number,
  incrementNumber:()=>void,
  decrementNumber:()=>void,
  incrementValue:()=>void,
  decrementValue:()=>void,
}
const FilterRatingAndRooms:React.FC<Props>=({rating ,handleRating,num,value,incrementNumber,decrementNumber,incrementValue,decrementValue})=>{

    return(
        <div className="search-container">
          <div className="star-container">
          {
            [...Array(5)].map((star,index)=>{
             const ratingValue= index+1;
             return(
                <label key={index}>
                   <input 
                    type='radio' 
                     name="rating" 
                      value={ratingValue}
                      onClick={handleRating}
                      />
                        <span 
                            className={`star ${ratingValue<=rating?"on":"off  "}`}
                            >&#9733;</span>
                 </label>

            
             )
            })
            
           }
           <div className="adults">
             <span>Adults:</span>
             <span onClick={incrementNumber} className="add">&#43;</span>
             <span>{num}</span>
             <span onClick={decrementNumber} className="sub">&#8722;</span>
            </div>

            <div className="children">
             <span>Children:</span>
             <span onClick={incrementValue} className="add">&#43;</span>
             <span>{value}</span>
             <span onClick={decrementValue} className="sub">&#8722;</span>
            </div>
           </div>
   
        </div>
    )
}

export default FilterRatingAndRooms;