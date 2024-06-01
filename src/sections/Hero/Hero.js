import './Hero.css'
import {PrimaryButton} from "../../components/index"
 const Hero=()=>{
    return(
      <>
<div className="hero-main">
    <div className='hero-text'>
      <h6 className='hero-subtitle'>Welcom To Cyborg</h6>
      <h4 className='hero-title'><em>Browse</em> Our Popular Games Here </h4>

   </div>
   <div className='main-button'>
       <PrimaryButton>Browse Now</PrimaryButton>
      </div>
 </div>
 
 
</>
    )
}

export default Hero;
