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
                    <button className={this.props.viewing === viewingUnanswered? "TabButtonSelected" : "TabButton"} onClick={(event) => {this.handleClick(event, viewingUnanswered)}}>Unanswered Questions</button>
                    <button className={this.props.viewing === viewingAnswered? "TabButtonSelected" : "TabButton"} onClick={(event) => {this.handleClick(event, viewingAnswered)}}>Answered Questions</button>
                </div>
                <ul className="QuestionsContainers">
                    {
                        this.props.questions.length === 0
                        ?<h2>There Are no questions for you in this category !</h2>
                        : this.props.questions.map((ObjQuestion) =>
                        {
                            return <SelectableQuestionItem key={ObjQuestion.id} questionAuthor={this.props.users[ObjQuestion.author]} question={ObjQuestion} ParentRef={this}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

function MapStateToProps({Questions, ViewedTab, authenticatedUser, Users})
{
    let QuestionsList = {};
    switch (ViewedTab)
    {
        case viewingAnswered:
            {
                QuestionsList = Object.keys(Questions).filter((questionId) => 
                {
                    return Questions[questionId].optionOne.votes.includes(authenticatedUser) || Questions[questionId].optionTwo.votes.includes(authenticatedUser);
                }).sort((questionId1, questionId2) => Questions[questionId2].timestamp - Questions[questionId1].timestamp).map((questionId) => Questions[questionId]);
                break;
            }
        case viewingUnanswered:
            {
                QuestionsList = Object.keys(Questions).filter((questionId) => 
                {
                    return !Questions[questionId].optionOne.votes.includes(authenticatedUser) && !Questions[questionId].optionTwo.votes.includes(authenticatedUser);
                }).sort((questionId1, questionId2) => Questions[questionId2].timestamp - Questions[questionId1].timestamp).map((questionId) => Questions[questionId]);
                break;
            }
        default:
    }
    return {questions: QuestionsList, users: Users, viewing: ViewedTab};
}

export default connect(MapStateToProps)(QuestionsList);