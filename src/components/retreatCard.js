import React from 'react'
import './retreatCard.css'
import Img from '../sea.jpg'

const RetreatCard = ({ title, description, date, location, price, imageUrl }) => {
  return (
    <div className='retreatCard'>
    <img src={Img} alt=''  className='retreatImage'></img>
    <p className='retreatTitle'>Discover Your Inner Peace</p>
    <p className='retreatDescription'>Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
    <p className='retreatDate'>Date : Discover Your Inner Peace</p>
    <p className='retreatLocation'>Location : Discover Your Inner Peace</p>
    <p className='retreatPrice'>Price : Discover Your Inner Peace</p>
    </div>
  )
}

export default RetreatCard