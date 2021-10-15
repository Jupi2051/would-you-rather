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
                    this.props.dispatch(authenticateUser(this.state.submittedId)); // dispatch log in here
                }}>
                    <select name="userID" className="UserSelect" onChange={(e) => this.setState({submittedId: e.target.value})}>
                        {
                            this.props.userIds.map((id) =>
                                <option key={id} value={id}>{this.props.users[id].name}</option>
                            )
                        }
                    </select>
                    <button className="LoginButton" type="submit">Log In</button>
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