import React from 'react'
import Navbar from './Navbar'
import "./Products.css"
import bedsheets from "../images/bedsheets.jpeg"
function Products() {

  return (
    <div>
      <Navbar />
      <div className='products__title'>View our latest products</div>
      <div className='products__section'>
       <div className='products__row'>
        <div className='products__item'>
          <img className = "products__image" src = {bedsheets} />
          <div className = "products__name"> Bedsheets</div>
        </div>
        <div className='products__item'>
          <img className = "products__image" src = {bedsheets} />
          <div className = "products__name"> Bedsheets</div>
        </div>
        <div className='products__item'>
          <img className = "products__image" src = {bedsheets} />
          <div className = "products__name"> Bedsheets</div>
        </div>
       </div>
       <div className='products__row'>
       <div className='products__item'>
          <img className = "products__image" src = {bedsheets} />
          <div className = "products__name"> Bedsheets</div>
        </div>
        <div className='products__item'>
          <img className = "products__image" src = {bedsheets} />
          <div className = "products__name"> Bedsheets</div>
        </div>
        <div className='products__item'>
          <img className = "products__image" src = {bedsheets} />
          <div className = "products__name"> Bedsheets</div>
        </div>
        </div>
        <div className='products__row'>
        <div className='products__item'>
          <img className = "products__image" src = {bedsheets} />
          <div className = "products__name"> Bedsheets</div>
        </div>
        <div className='products__item'>
          <img className = "products__image" src = {bedsheets} />
          <div className = "products__name"> Bedsheets</div>
        </div>
        <div className='products__item'>
          <img className = "products__image" src = {bedsheets} />
          <div className = "products__name"> Bedsheets</div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Products