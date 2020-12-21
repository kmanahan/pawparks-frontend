import React from 'react'

const ReviewCard = (props) => {
    const { username, content, rating } = props
    return (
        <div className="card">
            <p>{username} gave this park a {rating} ⭐ </p>
            <p>"{content}"</p>
        </div>
    )
}

export default ReviewCard