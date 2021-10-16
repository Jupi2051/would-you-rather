import React, {Component, Fragment} from "react";
import "../Styles/NotFound.css"

class NotFound extends Component
{
    render()
    {
        return(
            <Fragment>
                <div className="NotFoundContainer">
                    <h3>Oops! Error</h3>
                    <h1>404!</h1>
                    <h2>This page wasn't found!</h2>
                </div>
            </Fragment>
        );
    }
}

export default NotFound;