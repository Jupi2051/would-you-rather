import React, { Component } from "react";
import "../Styles/LoginPanel.css";
import { connect } from "react-redux";
import { authenticateUser } from "../actions/AuthedUser";

class LoginPanel extends Component
{
    state = {
        submittedId: ""
    }

    render()
    {
        return(
            <div className="LoginPanel">
                <h1>Please Log In To Continue</h1>
                <form onSubmit={(event) =>
                {
                    event.preventDefault();
                    if (this.state.submittedId !== "")
                        this.props.dispatch(authenticateUser(this.state.submittedId));
                }}>
                    <select name="userID" className="UserSelect" defaultValue="Placeholder" onChange={(e) => this.setState({submittedId: e.target.value})}>
                        <option value="Placeholder" disabled hidden>Select a Username</option>
                        {
                            this.props.userIds.map((id) =>
                                <option key={id} value={id}>{this.props.users[id].name}</option>
                            )
                        }
                    </select>
                    <button className={this.props.userIds.length === 0? "DisabledLoginButton":"LoginButton"} type="submit">Log In</button>
                </form>
            </div>
        );
    }
}

function MapStateToProps({Users})
{
    return {users: Users, userIds: Object.keys(Users)};
}

export default connect(MapStateToProps)(LoginPanel);