import React, { Component } from "react";
import "../Styles/SelectableQuestionItem.css";
import { Link } from "react-router-dom";
import { viewQuestion } from "../actions/ViewQuestion"

class SelectableQuestionItem extends Component
{
    HandleViewPoll(Question, List)
    {
        List.props.dispatch(viewQuestion(Question));
    }

    render()
    {
        let question = this.props.question;
        let author = this.props.questionAuthor;
        let QuestionTitle = question.optionOne.text + " OR " + question.optionTwo.text;

        return(
            <li>
                <div className="QuestionCard">
                    <div className="AskerData">
                        <img src={author.avatarURL} alt="" className="question-asker-pfp"/>
                        <h3>{author.name}</h3>
                    </div>
                    <div className="QuestionData">
                        <h3>{QuestionTitle}</h3>
                        <Link to={`/questions/${question.id}`}>
                            <button className="QuestionViewButton" onClick={() => this.HandleViewPoll(question, this.props.ParentRef)}>View Poll</button>
                        </Link>
                    </div>
                </div>
            </li>
        );
    }
}

export default SelectableQuestionItem;