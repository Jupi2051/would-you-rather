import React, {Component} from "react";
import LeaderboardItem from "./LeaderboardItem";

class Leaderboard extends Component
{
    render()
    {
        return(
            <div className="TabMain">
                <ul className="QuestionsContainers">
                    <LeaderboardItem />
                    <LeaderboardItem />
                    <LeaderboardItem />
                </ul>
            </div>
        );
    }
}

export default Leaderboard;