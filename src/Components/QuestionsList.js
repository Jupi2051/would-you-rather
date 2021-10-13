import React, { Component } from "react";
import "../Styles/QuestionsList.css"
import SelectableQuestionItem from "./SelectableQuestionItem";

class QuestionsList extends Component
{
    render()
    {
        return(
            <div className="TabMain">
                <div className="TabContainer">
                    <button className="TabButton">Unanswered Questions</button>
                    <button className="TabButton">Answered Questions</button>
                </div>
                <div className="QuestionsContainers">
                    <SelectableQuestionItem />
                    <SelectableQuestionItem />
                    <SelectableQuestionItem />
                    <SelectableQuestionItem />
                </div>
            </div>
        );
    }
}

export default QuestionsList;