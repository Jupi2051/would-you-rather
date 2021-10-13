import React, { Component } from "react";

class NewQuestion extends Component
{
    render()
    {
        return(
            <div>
                <form>
                    <label for="firstchoice">First Choice:</label><br/>
                    <input type="text" id ="firstchoice"></input><br/>
                    <p>OR</p>
                    <label for="secondchoice">Second Choice:</label><br/>
                    <input type="text" id ="firstchoice"></input><br/><br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NewQuestion;