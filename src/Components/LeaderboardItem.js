import React, { Component } from "react";
import "../Styles/Leaderboard.css";

class LeaderboardItem extends Component
{
    render()
    {
        const {author, Answered, Asked, TrophyURL} = this.props;
        return (
            <li>
                <div className="UserCard">
                    <div className="LeaderboardUserData">
                        <img src={author.avatarURL} alt="" className="question-asker-pfp"/>
                        <h3>{author.name}</h3>
                        <img src={TrophyURL} alt="" className="LeaderboardCup"/>
                    </div>

                    <div className="LeaderboardData">
                        <h3 className="LeaderboardTitle">Answered</h3>
                        <h3 className="LeaderboardAddedNumber">{Answered}</h3>
                        <h3 className="LeaderboardTitle">Asked</h3>
                        <h3 className="LeaderboardAddedNumber">{Asked}</h3>
                        <h3 className="LeaderboardTitle">Score</h3>
                        <h2 className="LeaderboardScoreNumber">{Answered + Asked}</h2>
                    </div>
                </div>
            </li>
        );
    }
}

export default LeaderboardItem;