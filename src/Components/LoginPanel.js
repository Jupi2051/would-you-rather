import React, { Component } from "react";

class LoginPanel extends Component
{
    render()
    {
        return(
            <div>
                <form>
                    <select name="User">
                        <option value="User1"/>
                        <option value="User2"/>
                        <option value="User3"/>
                    </select>
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default LoginPanel;