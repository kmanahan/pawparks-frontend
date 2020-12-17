import React from 'react'

const ParkCard = (props) => {
    const {image_url, name} = props
    return (
        <div className="card">
            <img src={image_url} alt={name}/><br/>
            <div class="img-name">{props.name}</div>
        </div>
    )
}

export default ParkCard