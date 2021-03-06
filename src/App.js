import './App.css';
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { InitilizeData } from './actions/Shared';
import LoginPanel from "./Components/LoginPanel";
import NewQuestion from "./Components/NewQuestion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnswerableQuestion from './Components/AnswerableQuestion';
import QuestionsList from './Components/QuestionsList';
import Navigation from "./Components/NavigationBar";
import Leaderboard from "./Components/Leaderboard";
import NotFound from './Components/404';

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
            <Navigation />
            <p className="MainTitle">Would You Rather!</p>
            <Switch>
            <div>
                {
                this.props.LoggedIn? 
                  <Fragment>
                    <Switch>
                      <Route path="/" exact component={QuestionsList} />
                      <Route path="/questions/:question_id" component={AnswerableQuestion} />
                      <Route path="/add" component={NewQuestion} />
                      <Route path="/leaderboard" component={Leaderboard} />
                      <Route component={NotFound} />
                    </Switch>
                  </Fragment>
                : 
                  <Fragment>
                    <LoginPanel />
                  </Fragment>                
                }
            </div>
            </Switch>
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