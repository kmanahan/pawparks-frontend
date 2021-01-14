import { connect } from 'react-redux'
import { handleSearchFormChange } from '../redux/actionCreators'

const SearchBar = (props) => {

    return (
      <form>
        <label>
          <br/>
          enter the name of the park you're looking for:<br/>
          <input type="text" name="search" value={props.search} onChange={props.handleSearchFormChange} />
        </label>
      </form>
    )
}

const msp = (state) => ({
  parks: state.parks.parks,
    ...state.parks.searchForm
})

export default connect(msp, {handleSearchFormChange})(SearchBar)