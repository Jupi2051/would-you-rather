import React, { Component } from "react";
import "../Styles/Leaderboard.css";

class LeaderboardItem extends Component
{
    render()
    {
        return (
            <li>
                <div className="UserCard">
                    <div className="LeaderboardUserData">
                        <img src="https://www.oniverse.xyz/imgs/Jupi.jpg" alt="" className="question-asker-pfp"/>
                        <h3>Transgender Seth</h3>
                        <img src="http://cdn.onlinewebfonts.com/svg/img_533280.png" alt="" className="LeaderboardCup"/>
                    </div>

                    <div className="LeaderboardData">
                        <h3 className="LeaderboardTitle">Answered</h3>
                        <h3 className="LeaderboardAddedNumber">5</h3>
                        <h3 className="LeaderboardTitle">Asked</h3>
                        <h3 className="LeaderboardAddedNumber">100</h3>
                        <h3 className="LeaderboardTitle">Score</h3>
                        <h2 className="LeaderboardScoreNumber">1050</h2>
                    </div>
                </div>
            </li>
        );
    }
}

export default LeaderboardItem;