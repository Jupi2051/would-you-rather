import React, {Component} from "react";
import LeaderboardItem from "./LeaderboardItem";

class Leaderboard extends Component
{
    render()
    {
        return(
            <ul>
                <LeaderboardItem />
            </ul>
        );
    }
}

export default Leaderboard;