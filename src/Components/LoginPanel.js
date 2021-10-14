import React, { Component } from "react";
import "../Styles/LoginPanel.css";

class LoginPanel extends Component
{
    render()
    {
        return(
            <div className="LoginPanel">
                <h1>Please Log In To Continue</h1>
                <form>
                    <select name="User" className="UserSelect">
                        <option value="User1">Jupi</option>
                        <option value="User2">Seth</option>
                        <option value="User3">Owah</option>
                    </select>
                    <button className="LoginButton">Log In</button>
                </form>
            </div>
        );
    }
}

export default LoginPanel;