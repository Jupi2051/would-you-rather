import './App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { InitilizeData } from './actions/Shared';
import NewQuestion from './Components/NewQuestion';
import QuestionsList from "./Components/QuestionsList";
import AnswerableQuestion from './Components/AnswerableQuestion';
import Leaderboard from './Components/Leaderboard';
import LoginPanel from "./Components/LoginPanel";

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
          <LoginPanel />
          <NewQuestion />
          <AnswerableQuestion />
          <Leaderboard />
          <QuestionsList />
      </div>
    );
  }
}

export default connect()(App);