import React from 'react'


export default function Card(props) {
  return (
    <div className='details'>
      <img src={`../images/${props.imageUrl}`} alt = "mountain" />
      <div>
      <div className='location'>
        <h3>{props.location}</h3>
        <img src='../images/googlemaps.png' alt='location finder' />
      </div>
      <h1 className='title'>{props.title}</h1>
      <p className='dates'>{props.startDate} - {props.endDate}</p>
      <p className='description'>{props.description}</p>
      </div>
    </div>
  )
}
