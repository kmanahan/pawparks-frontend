import React, { Component } from 'react';
import './App.css';
import ParkPage from './components/ParkPage'
import ParkCards from './containers/ParkCards'
import Login from './components/Login'
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
        {this.props.user.id 
        ?
        <Switch>
          <Route path="/dog-parks/:id" component={ParkPage}/>
          <Route path="/dog-parks" component={ParkCards}/>
        </Switch>
        :
        <Login/>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, { setParks })(App);
