import React from 'react'
import { Link } from 'react-router-dom'

const ParkCard = (props) => {
    const {imageUrl, name, id} = props
    return (
        <div className="card">
            <img src={imageUrl} alt={name}/><br/>
            <div className="img-name">{props.name}</div>
            <p><Link to={`/dog-parks/${id}`}>{name}</Link></p>
        </div>
    )
}

export default ParkCard