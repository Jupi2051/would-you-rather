import React, { Component } from "react";
import "../Styles/NewQuestion.css"

class NewQuestion extends Component
{
    render()
    {
        return(
            <div className="Center">
                <h1>Create a new Poll</h1>
                <form>
                    <label>First Choice</label> <br/> <br/>
                    <textarea className="ChoiceFilling" maxLength={100} />
                    <p className="ORtext">OR</p>
                    <label>Second Choice</label> <br/> <br/>
                    <textarea className="ChoiceFilling" maxLength={100} /> <br/> <br/>
                    <button className="Button">Submit</button>
                </form>
            </div>
        );
    }
}

export default NewQuestion;