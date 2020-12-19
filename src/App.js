import React, { Component } from 'react';
// import { render } from 'react-dom';
import './App.css';
import ParkPage from './components/ParkPage'
import ParkCards from './containers/ParkCards'
import { connect } from 'react-redux'
import { setParks } from './redux/actionCreators'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount(){
    this.props.setParks()
  }

  render(){
    return (
      <>
        <h1>Welcome</h1>
        <Switch>
          <Route path="/dog-parks/:id" component={ParkPage}/>
          <Route path="/dog-parks" component={ParkCards}/>
        </Switch>
      
      </>
    );
  }
}

export default connect(null, { setParks })(App);
