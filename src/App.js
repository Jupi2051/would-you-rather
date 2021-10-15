import './App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { InitilizeData } from './actions/Shared';
import LoginPanel from "./Components/LoginPanel";
//import QuestionsList from './Components/QuestionsList';
import NewQuestion from "./Components/NewQuestion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AnswerableQuestion from './Components/AnswerableQuestion';
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
      <Router>
        <div>
            <p className="MainTitle">Would You Rather!</p>
            {
              <div>
                <Route path="/" exact component={this.props.LoggedIn? QuestionsList : LoginPanel} />
                <Route path="/questions/:question_id" component={AnswerableQuestion} />
                <Route path="/add" component={NewQuestion} />
              </div>
            }
        </div>
      </Router>
    );
  }
}

function MapStateToProps({authenticatedUser})
{
  return {LoggedIn: authenticatedUser !== null}
}

export default connect(MapStateToProps)(App);