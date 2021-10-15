import './App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { InitilizeData } from './actions/Shared';
import LoginPanel from "./Components/LoginPanel";
import QuestionsList from './Components/QuestionsList';

class App extends Component
{
  componentDidMount()
  {
    this.props.dispatch(InitilizeData());
  }
  
  render()
  { 
    return (
      <div>
          <p className="MainTitle">Would You Rather!</p>
          {
            console.log(this.props.LoggedIn)
          }
          {
            (this.props.LoggedIn && <QuestionsList />) || <LoginPanel />
          }
      </div>
    );
  }
}

function MapStateToProps({authenticatedUser})
{
  return {LoggedIn: authenticatedUser !== null}
}

export default connect(MapStateToProps)(App);