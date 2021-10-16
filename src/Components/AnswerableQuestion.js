import React, { Component } from "react";
import { Fragment } from "react";
import "../Styles/AnswerableQuestion.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {FormatToDateTime} from "../Helpers";
import { HandleAnsweringQuestion } from "../actions/Shared"
import NotFound from "../Components/404";

class AnswerableQuestion extends Component
{

    handleSelection(Question, Option, alreadyAnswered)
    {
        if (!alreadyAnswered)
            this.props.dispatch(HandleAnsweringQuestion(Question, Option));
    }

    render()
    {
        const {author, question, answered, NotFoundPage} = this.props;
        if (!NotFoundPage)
        {
            return(
                <Fragment>
                    <div className="AnswerableQuestion">
                        <div className="QuestionInfoContainer">                        
                            <img src={author.avatarURL} alt="" className="question-asker-pfp-on-answer"/>
                            <div className="QuestionTextDataContainer">
                                <h2 className="QuestionWriterName">{author.name}</h2>
                                <h5>{FormatToDateTime(question.timestamp)}</h5>
                            </div>
                        </div>
                        
                        <div className="AnswersContainer">
                            <div className={answered[0]? (answered[1] === "FirstChoice"? "SelectedOption" : "NeglectedOption") : "FirstChoice"} onClick={() => this.handleSelection(question, "optionOne", answered[0])}>
                                <strong>
                                    {question.optionOne.text}
                                    {answered[0]? <Fragment><br/>{question.optionOne.votes.length + " voted"}</Fragment> : null}
                                    {answered[0]? <Fragment><br/>{(question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length) * 100).toFixed(1)}%</Fragment> : null}
                                </strong>
                            </div>

                            <h2 className="or-text">OR</h2>

                            <div className={answered[0]? (answered[1] === "SecondChoice"? "SelectedOption" : "NeglectedOption") : "SecondChoice"} onClick={() => this.handleSelection(question, "optionTwo", answered[0])}>
                                <strong>
                                    {question.optionTwo.text}
                                    {answered[0]? <Fragment><br/>{question.optionTwo.votes.length + " voted"}</Fragment> : null}
                                    {answered[0]? <Fragment><br/>{(question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length) * 100).toFixed(1)}%</Fragment> : null}
                                </strong>
                            </div>
                        </div>
                    </div>
                    <Link to="/">
                        <button className="AnswerableQuestionButton">Back</button>
                    </Link>
                </Fragment>
            );
        }
        else
        {
            return <NotFound />
        }
    }
}

function MapStateToProps({Users, ViewQuestion, authenticatedUser})
{
    if (ViewQuestion)
    {
        const QuestionAuthor = Object.values(Users).find((author) => author.id === ViewQuestion.author);
        const Answered = [
            ViewQuestion.optionOne.votes.includes(authenticatedUser) || ViewQuestion.optionTwo.votes.includes(authenticatedUser),
            ViewQuestion.optionOne.votes.includes(authenticatedUser)? "FirstChoice" : "SecondChoice"
        ]
        // array structured as follows : [bool (Answered), string "FirstChoice or SecondChoice"]
        return {
            author: QuestionAuthor,
            question: ViewQuestion,
            answered: Answered
        };
    }
    else
        return {NotFoundPage: true}
}

export default connect(MapStateToProps)(AnswerableQuestion);