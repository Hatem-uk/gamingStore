import "./MostPopular.css"
import {MostPopularData} from "../../Data/MostPopularData"
import {Card} from "../../components/index"




 const MostPopular = () => {

const Cards=MostPopularData.map(card=>{
    return(  <Card key={card.id} image={card.image} title={card.title} catigory={card.catigory} rate={card.rate} downloads={card.downloads} /> )
})




  return (
    <div className="container bg-dark mt-5 p-5  ">
        <div className="section-header">
            <h4 > Most Popular </h4>
            <h3> Right Now</h3>
        </div>
         <div className=" section-items-cards d-flex flex-wrap flex-row justify-content-between mt-5 gap-4 "> 
                  {Cards}    
        </div>
        <button className="btn btn-danger ">2.3Mf</button>
    </div>
  )
}
export default MostPopular;