import "./GaminLiberary.css"
import {GamingLiberaryData } from "../../Data/GamingLiberaryData "
import {GaminLiberaryCard} from "../../components/index"
import {Button} from "../../components/index"
import {SecoundButton} from "../../components/index"

 const GaminLiberary = () => {
  const Cards=GamingLiberaryData.map(card=>{
    return(  <GaminLiberaryCard key={card.id} image={card.image} title={card.title} catigory={card.catigory} 
      DateAdded={card.DateAdded} Hours_Played={card.Hours_Played}
      /> )
})

  return (
    <>
        <div className="container bg-dark mt-5 p-5  ">
        <div className="section-header">
            <h3 > Gamin Liberary </h3>
        </div>
         <div className=" section-items-cards d-flex flex-wrap flex-column mt-5 gap-2 "> 
                  {Cards}    
                 
        </div>
        <SecoundButton>Downloads</SecoundButton>

    </div>
    
    </>
  )
}
export default GaminLiberary;
