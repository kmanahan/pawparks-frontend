import React from 'react'
import { connect } from 'react-redux'
import ParkCard from '../components/ParkCard'
import SearchBar from '../components/SearchBar'

const ParkCards = (props) => {

    const searchedParks = props.parks.filter(park => park.name.toLowerCase().includes(props.search.toLowerCase()))


    return(
        <>
        <SearchBar/>
        <div className="cards">
            {searchedParks.map(park => <ParkCard key={park.id} {...park} />)}
        </div>
        </>
    )
}

const msp = (state) => ({
    parks: state.parks.parks,
    search: state.parks.searchForm.search
})

export default connect(msp)(ParkCards)