import React, { Component } from "react";
import "../Styles/QuestionsList.css"
import SelectableQuestionItem from "./SelectableQuestionItem";
import { connect } from "react-redux";
import { viewingAnswered, viewingUnanswered, switchTab } from "../actions/SwitchTab"

class QuestionsList extends Component
{
    handleClick(event, ViewedList)
    {
        event.preventDefault();
        this.props.dispatch(switchTab(ViewedList));
    }

    render()
    {
        return(
            <div className="TabMain">
                <div className="TabContainer">
                    <button className="TabButton" onClick={(event) => {this.handleClick(event, viewingUnanswered)}}>Unanswered Questions</button>
                    <button className="TabButton" onClick={(event) => {this.handleClick(event, viewingAnswered)}}>Answered Questions</button>
                </div>
                <ul className="QuestionsContainers">
                    {
                        
                    }
                    <SelectableQuestionItem />
                </ul>
            </div>
        );
    }
}

function MapStateToProps({Questions, ViewedTab, authenticatedUser})
{
    let QuestionsList = {};
    switch (ViewedTab)
    {
        case viewingAnswered:
            {
                QuestionsList = Object.keys(Questions).filter((questionId) => 
                {
                    return Questions[questionId].optionOne.votes.includes(authenticatedUser) || Questions[questionId].optionTwo.votes.includes(authenticatedUser);
                }).map((questionId) => Questions[questionId]);
                break;
            }
        case viewingUnanswered:
            {
                QuestionsList = Object.keys(Questions).filter((questionId) => 
                {
                    return !Questions[questionId].optionOne.votes.includes(authenticatedUser) && !Questions[questionId].optionTwo.votes.includes(authenticatedUser);
                }).map((questionId) => Questions[questionId]);
                break;
            }
        default:
    }
    return {questions: QuestionsList};
}

export default connect(MapStateToProps)(QuestionsList);