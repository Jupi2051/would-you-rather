import React, { Component } from "react";
import { Fragment } from "react";
import "../Styles/AnswerableQuestion.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {FormatToDateTime} from "../Helpers";

class AnswerableQuestion extends Component
{
    render()
    {
        const {author, question} = this.props;
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
                        <div className="FirstChoice">
                            <strong>
                                {question.optionOne.text}
                            </strong>
                        </div>
                        <h2 className="or-text">OR</h2>
                        <div className="SecondChoice">
                            <strong>
                                {question.optionTwo.text}
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
}

function MapStateToProps({Users, ViewQuestion})
{
    const QuestionAuthor = Object.values(Users).find((author) => author.id === ViewQuestion.author);
    return {
        author: QuestionAuthor,
        question: ViewQuestion
    };
}

export default connect(MapStateToProps)(AnswerableQuestion);