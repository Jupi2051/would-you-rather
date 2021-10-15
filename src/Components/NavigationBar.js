import React, { Component } from "react";
import "../Styles/NavigationBar.css"
import { Link } from "react-router-dom";

class Navigation extends Component
{
    render()
    {
        return(
            <ul className="NavList">
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
                <li className="NavLogButton">
                    Log In
                </li>
            </ul>
        )
    }
}

export default Navigation;