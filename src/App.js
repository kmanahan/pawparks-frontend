import React, { Component } from 'react';
import './App.css';
import ParkPage from './containers/ParkPage'
import ParkCards from './containers/ParkCards'
import Login from './components/Login'
import { connect } from 'react-redux'
import { setParks } from './redux/actionCreators'
import { automaticLogin, logout } from './redux/userActionCreator'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount(){

    localStorage.token && this.props.automaticLogin()
    this.props.setParks()
  }

  render(){
    return (
      <>
        <h1>PawParks</h1>
        {this.props.user.id
        ?
        <>
          <button onClick={this.props.logout}>Logout</button>
          <Switch>
            <Route path="/dog-parks/:id" component={ParkPage}/>
            <Route path="/dog-parks" component={ParkCards}/>
          </Switch>
          </>
        :
          <Login/>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, { setParks, automaticLogin, logout })(App);
