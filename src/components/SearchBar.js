import { connect } from 'react-redux'
import { handleSearchFormChange } from '../redux/actionCreators'

const SearchBar = (props) => {

  let onSubmit = (e) => {
    e.preventDefault() 
  } 

    return (
      <form onSubmit={onSubmit}>
        <label>
          <br/>
          enter the name of the park you're looking for:<br/>
          <input type="text" name="search" value={props.search} onChange={props.handleSearchFormChange} />
        </label>
        <br/>
        <button onClick={alphaSort}>
        Click to Sort Alphabetically
      </button>
      </form>
    )
}

const alphaSort = () => {
//  return props.name.sort ((r1,r2) => r1.name) 
return console.log('hi')
}

const msp = (state) => ({
  parks: state.parks.parks,
    ...state.parks.searchForm
})

export default connect(msp, {handleSearchFormChange})(SearchBar)