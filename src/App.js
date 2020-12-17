import React, { Component } from 'react';
// import { render } from 'react-dom';
import './App.css';
import ParkCards from './containers/ParkCards'
import { connect } from 'react-redux'
import { setParks } from './redux/actionCreators'

class App extends Component {

  componentDidMount(){
    this.props.setParks()
  }

  render(){
    return (
      <>
        <h1>Hello</h1>
        <ParkCards/>
      </>
    );
  }
}

export default connect(null, { setParks })(App);
