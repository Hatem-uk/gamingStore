import "./GaminLiberaryCard.css"
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import {PrimaryButton} from "../../components/index"


const GaminLiberaryCard = (props) => {
  return (
  
    <div className="  GaminLiberaryCard    ">
    <ul className="d-flex flex-wrap align-items-center justify-content-between">
  <li>  <img className="card-img " src={props.image}/></li>
            <li><h4>{props.title} <br/> <span>{props.catigory}</span></h4></li>
            <li><h4> DateAdded <br/> <span>{props.DateAdded}</span></h4></li>
            <li> <h4>Hours_Played <br/> <span>{props.Hours_Played}</span></h4></li>
            <PrimaryButton className="btn btn-primary">Downloads</PrimaryButton>

    </ul>
  </div>
  
 
  
)}

export default GaminLiberaryCard