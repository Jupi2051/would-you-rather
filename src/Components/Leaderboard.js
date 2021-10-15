import React, {Component} from "react";
import LeaderboardItem from "./LeaderboardItem";
import { connect } from "react-redux";

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

function MapStateToProps({Users, Questions})
{
    return {};
}

export default connect(MapStateToProps)(Leaderboard);