import React, { Component } from "react";
import "../Styles/NewQuestion.css"
import { connect } from "react-redux"
import { HandleMiddleAddingQuestion } from "../actions/Shared";
import { Redirect } from "react-router-dom"

class NewQuestion extends Component
{
    constructor (props)
    {
        super(props);
        this.OnTextFieldChange = this.OnTextFieldChange.bind(this);
        this.OnSubmitQuestion = this.OnSubmitQuestion.bind(this);
    }

    state = {
        FirstChoice: "",
        SecondChoice: "",
        RedirectHome: false,
    }

    async OnSubmitQuestion(e)
    {
        e.preventDefault();
        if (this.props.author !== null)
        {
            this.props.dispatch(HandleMiddleAddingQuestion(this.state.FirstChoice, this.state.SecondChoice))
            this.setState({
                RedirectHome: true
            })
        }
    }

    OnTextFieldChange(e)
    {
        if (e.target.id === "FirstOption")
            this.setState({
                FirstChoice: e.target.value
            })
        else if(e.target.id === "SecondOption")
            this.setState({
                SecondChoice: e.target.value
            })
    }

    render()
    {
        if (this.state.RedirectHome)
            return <Redirect to="/"/>
        
        return(
            <div className="Center">
                <h1>Create a new Poll</h1>
                <form>
                    <label>First Choice</label> <br/> <br/>
                    <textarea id="FirstOption" className="ChoiceFilling" maxLength={100} onChange={this.OnTextFieldChange}/>
                    <p className="ORtext">OR</p>
                    <label>Second Choice</label> <br/> <br/>
                    <textarea id="SecondOption" className="ChoiceFilling" maxLength={100} onChange={this.OnTextFieldChange}/> <br/> <br/>
                    <button className="Button" onClick={(e) => this.OnSubmitQuestion(e)}>Submit</button>
                </form>
            </div>
        );
    }
}

function MapStoreToState({authenticatedUser, Questions})
{
    return {author: authenticatedUser, questions: Questions}
}

export default connect(MapStoreToState)(NewQuestion);