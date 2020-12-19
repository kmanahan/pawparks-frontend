import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedPark, parkNotSet } from '../redux/actionCreators'

class ParkPage extends Component {

    componentDidMount(){
        //getting id from route this.props.match.params is given a key of id when we difine /dog-parks/:id
        const id = this.props.match.params.id
        this.props.setSelectedPark(id)
    }

    componentWillUnmount(){
        this.props.parkNotSet()
    }

    render(){
        const {url, name, imageUrl, address, history} = this.props
        return(
            <div>
                <h1><a href={ url }>{ name }</a></h1>
                <button onClick={history.goBack}>Return to previous screen</button>
                <p><img src={ imageUrl } alt={ name }/></p>
                <p>{ address }</p>
                <iframe title="GOOGLE MAPS"
                    width="600"
                    height="450"
                    frameBorder="0" style={{border: 0}}
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOpkgotkpVeZEFuQe-PitfDFrhc9K4Y1o&q=${name + ", " + address}`} allowFullScreen>
                        
                    </iframe>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.parks.selectedPark
})

export default connect(mapStateToProps, { setSelectedPark, parkNotSet })(ParkPage)