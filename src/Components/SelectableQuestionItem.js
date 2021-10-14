import React, { Component } from "react";
import "../Styles/SelectableQuestionItem.css"

class SelectableQuestionItem extends Component
{
    render()
    {
        return(
            <div>
                <div className="QuestionCard">
                    <div className="AskerData">
                        <img src="https://www.oniverse.xyz/imgs/Jupi.jpg" alt="" className="question-asker-pfp"/>
                        <h3>Someone's Name</h3>
                    </div>

                    <div className="QuestionData">
                        <h3>feap[fka[</h3>
                        <button className="QuestionViewButton">View Poll</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectableQuestionItem;