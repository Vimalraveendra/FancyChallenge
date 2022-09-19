import {useState} from 'react';
import "./Slider.css"
import { IImage } from '../../Containers/App';

interface Props{
    images:Array<IImage>,
    name:string,
}

const Slider:React.FC<Props> = ({images,name})=>{

    const [current,setCurrent] = useState<number>(0);
     const len = images.length;
     
    const nextSlider = ()=>{
        setCurrent(current===len-1?0:current+1)
    }

    const previousSlider= ()=>{
        setCurrent(current===0?len-1:current-1)
    }
 
    return(
        <section className="slider">
             {
           images.length>1 ? images.map((image,index)=>{
                return(
                    //   <div className={index===current?"slide-active":"slide"} key={index}>
                      <div className="slide" key={index}>
                      {
                        index===current && <img  src={image.url} alt={image.alt!==""?image.alt:name}></img>
                      }
                      <span className="left-arrow" onClick={previousSlider}><i className="fas fa-angle-left"></i></span>
                      <span className="right-arrow" onClick={nextSlider}><i className="fas fa-angle-right"></i></span>
                      </div>    
                )
           }):      <div className="slide">
           {
              <img  src={images[0].url} alt={images[0].alt!==""?images[0].alt:name}></img>
           }
         </div> 
        
        }

        
        </section>
                    
    )
}

export default Slider;