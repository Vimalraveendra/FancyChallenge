
 import "./FilterRatingAndRooms.css"

 export interface Props {
  rating:string|number,
  handleRating:(e:React.SyntheticEvent<HTMLInputElement>)=>void,
  adults:number,
  children:number,
  incrementAdults:()=>void,
  decrementAdults:()=>void,
  incrementChildren:()=>void,
  decrementChildren:()=>void,
}
const FilterRatingAndRooms:React.FC<Props> =({rating ,handleRating,adults,children,incrementAdults,decrementAdults,incrementChildren,decrementChildren})=>{

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
             <span onClick={incrementAdults} className="add">&#43;</span>
             <span>{adults}</span>
             <span onClick={decrementAdults} className="sub">&#8722;</span>
            </div>

            <div className="children">
             <span>Children:</span>
             <span onClick={incrementChildren} className="add">&#43;</span>
             <span>{children}</span>
             <span onClick={decrementChildren} className="sub">&#8722;</span>
            </div>
           </div>
   
        </div>
    )
}

export default FilterRatingAndRooms;