import React from 'react'
import { connect } from 'react-redux'
import { handleReviewChange  } from '../redux/actionCreators'

const ReviewForm = (props) => {

  const { content, rating } = props.form

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return(
    <form onSubmit={ onSubmit }>
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
    </form>
  )
}

const mapStateToProps = (state) => ({
  form: state.parks.reviewForm
})

export default connect(mapStateToProps, { handleReviewChange })(ReviewForm)
