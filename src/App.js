import React, { Component } from 'react';
import './App.css';
import ParkPage from './components/ParkPage'
import ParkCards from './containers/ParkCards'
import Login from './components/Login'
import { connect } from 'react-redux'
import { setParks } from './redux/actionCreators'
import { automaticLogin } from './redux/userActionCreator'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount(){
    localStorage.token && this.props.automaticLogin()
    this.props.setParks()
  }

  render(){
    console.log(this.props)
    return (
      <>
        <h1>PawParks</h1>
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

export default connect(mapStateToProps, { setParks, automaticLogin })(App);
