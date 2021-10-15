import React, { Component } from "react";
import "../Styles/SelectableQuestionItem.css"

class SelectableQuestionItem extends Component
{
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
                        <button className="QuestionViewButton">View Poll</button>
                    </div>
                </div>
            </li>
        );
    }
}

export default SelectableQuestionItem;