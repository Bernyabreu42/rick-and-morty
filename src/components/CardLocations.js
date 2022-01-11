import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function CardLocations(props) {
  const router = useRouter()
  const { name, dimension, type, id } = props.props

  return (
    <>
      <div className="Card_locations">
        <div>
          <span>Locations</span>
          <h2>{name}</h2>
          <span>Type Locations</span>
          <h3>{type}</h3>
          <span>Dimension</span>
          <p>{dimension}</p>
        </div>
        <button onClick={() => router.push(`/locations/${id}`)} >Residents</button>
      </div>
    </>
  )
}
