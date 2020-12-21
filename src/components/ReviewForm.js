import React from 'react'
import { connect } from 'react-redux'
import { handleReviewChange, submitReview } from '../redux/actionCreators'

const ReviewForm = (props) => {

  const { content, rating } = props.form

  const onSubmit = (e) => {
    e.preventDefault()
    props.submitReview({...props.form, park_id: props.park_id})
  }

  return(
    <form onSubmit={ onSubmit }>
        <p>Been to this park? Give a review!</p>
      <label>
        Rating: 
        <input type="number" name="rating" value={rating} onChange={props.handleReviewChange} />
      </label><br/><br/>
      <label>
        Content:
        <textarea name="content" value={content} onChange={props.handleReviewChange}></textarea>
      </label><br/>
      <br/>
      <input type="submit" value="Submit" />
      <br/>
      <br/>
    </form>
  )
}

const mapStateToProps = (state) => ({
  form: state.parks.reviewForm
})

export default connect(mapStateToProps, { handleReviewChange, submitReview })(ReviewForm)
