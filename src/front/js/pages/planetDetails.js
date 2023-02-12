import React from 'react'
import { useParams } from 'react-router-dom'

const PlanetDetails = () => {
    const{theid} = useParams()
    console.log (theid)
  return (
    <div>planetDetails</div>
  )
}

export default PlanetDetails