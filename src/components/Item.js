import React, {useState} from "react";
import "./Item.css"
import Navbar from "./Navbar"
import bedsheets from "../images/bedsheets.jpeg"
function Item(){
    return(
        <div>
             <Navbar/>
             <div className = "itemsection">
                <div className = "image__section">
                <img className = "product__image" src = {bedsheets} />
                </div>
                <div className = "description__section"> 
                    <div className = "product__title">
                        COTTON TOWEL
                    </div>
                    <div className = "product__description">
                    Llla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    </div>
             </div>
        </div>
    )
}
export default Item