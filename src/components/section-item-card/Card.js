import React from 'react'
import "./Card.css"
import { FaStar } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

 const Card = (props) => {
  return (
    <div className="  section-item-card   ">
    <img className="card-img w-100%" src=   {props.image}/>
       <div className="card-content ">
           <div >
            <h4>{props.title} <br/> <span>{props.catigory}</span></h4>
          </div>
         <div>
            <ul>
             <li><span  style={{color:"yellow"}}><FaStar /></span><span>{props.rate}</span></li>
             <li><span  style={{color:"var( --color-primary)"}}><FaDownload /></span><span>{props.downloads}</span></li>
            </ul>
         </div>
       </div>
  </div>
 
  )
}
export default Card
