import React, { Component } from "react";
import { Fragment } from "react";
import "../Styles/AnswerableQuestion.css"

class AnswerableQuestion extends Component
{
    render()
    {
        return(
            <Fragment>
                <div className="AnswerableQuestion">
                    <div className="QuestionInfoContainer">                        
                        <img src="https://www.oniverse.xyz/imgs/Jupi.jpg" alt="" className="question-asker-pfp-on-answer"/>
                        <div className="QuestionTextDataContainer">
                            <h2 className="QuestionWriterName">Sarah Edo owa owa</h2>
                            <h5>2021/10/14 1:23 PM</h5>
                        </div>
                    </div>
                    <div className="AnswersContainer">
                        <div className="FirstChoice">
                            <strong>
                                First
                            </strong>
                        </div>
                        <h2 className="or-text">OR</h2>
                        <div className="SecondChoice">
                            <strong>
                                Second
                            </strong>
                        </div>
                    </div>
                </div>
                <button className="AnswerableQuestionButton">Back</button>
            </Fragment>
        );
    }
}

export default AnswerableQuestion;