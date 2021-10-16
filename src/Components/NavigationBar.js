import React, { Component } from "react";
import "../Styles/NavigationBar.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { authenticateUser } from "../actions/AuthedUser"

class Navigation extends Component
{
    render()
    {
        return(
            this.props.LoggedIn
            ?<ul className="NavList">
                <Link to="/">
                    <li className="NavElement">
                        Home
                    </li>
                </Link>
                <Link to="/add">
                    <li className="NavElement">
                        New Poll
                    </li>
                </Link>
                <Link to="/leaderboard">
                    <li className="NavElement">
                        Leaderboard
                    </li>
                </Link>
                <Link to="/">
                    <li className="NavElement" onClick={() => {this.props.dispatch(authenticateUser(null))}}>
                        Log Out
                    </li>
                </Link>
                    <li classname="NavUserData">
                        <div className="CurrentUserContainer">
                            <h3 className="CurrentUserName">{this.props.CurrentUser.name}</h3>
                            <img src={this.props.CurrentUser.avatarURL} alt="" className="CurrentUserPFP"/>
                        </div>
                    </li>
            </ul>
            :<ul className="NavList">
                    <li className="NavElement">
                        Home
                    </li>
                    <li className="NavElement">
                        New Poll
                    </li>
                    <li className="NavElement">
                        Leaderboard
                    </li>
            </ul>
        )
    }
}

function StateMap({authenticatedUser, Users})
{
    return {LoggedIn: authenticatedUser !== null, CurrentUser: Users[authenticatedUser]}
}

export default connect(StateMap)(Navigation);