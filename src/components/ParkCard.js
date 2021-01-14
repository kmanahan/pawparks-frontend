import React from 'react'
import { Link } from 'react-router-dom'

const ParkCard = (props) => {
    const {imageUrl, name, id} = props
    return (
        <div className="card">
            <img src={imageUrl} alt={name}/><br/>
            <Link className="img-name" to={`/dog-parks/${id}`}>{name}</Link>
        </div>
    )
}

export default ParkCard