import React, { Component } from "react";

class NewQuestion extends Component
{
    render()
    {
        return(
            <div>
                <h2>Create a new Poll</h2>
                <form>
                    <label>First Choice:</label><br/>
                    <textarea maxLength={100} />
                    <p>OR</p>
                    <label>Second Choice:</label><br/>
                    <textarea maxLength={100} /> <br/> <br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NewQuestion;