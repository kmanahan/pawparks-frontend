import React from 'react'
import { connect } from 'react-redux'
import ParkCard from '../components/ParkCard'

const ParkCards = (props) => {
    console.log(props.parks)
    return(<div className="cards">
    {props.parks.map(park => <ParkCard key={park.id} {...park} />)}
    </div>)
}

const msp = (state) => ({parks: state.parks.parks})

export default connect(msp)(ParkCards)