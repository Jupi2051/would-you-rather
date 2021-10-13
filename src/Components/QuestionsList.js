import React, { Component } from "react";
import SelectableQuestionItem from "./SelectableQuestionItem";

class QuestionsList extends Component
{
    render()
    {
        return(
            <div>
                <SelectableQuestionItem />
                <SelectableQuestionItem />
            </div>
        );
    }
}

export default QuestionsList;