import React, {Component} from "react";
import LeaderboardItem from "./LeaderboardItem";
import { connect } from "react-redux";

const Trophies = [
    "https://cdn.discordapp.com/attachments/870579068041580564/871129205558116392/5.png",
    "https://cdn.discordapp.com/attachments/870579068041580564/871129201569300521/3.png",
    "https://cdn.discordapp.com/attachments/870579068041580564/871129195957334106/1.png"
];

class Leaderboard extends Component
{
    render()
    {
        let Counter = 0;
        return(
            <div className="TabMain">
                <ul className="QuestionsContainers">
                    {
                    this.props.topUsers.map((TopUser) => {
                        let UI = <LeaderboardItem key={TopUser.User.id} author={TopUser.User} Asked={TopUser.Asked} Answered={TopUser.Answered} TrophyURL={Trophies[Counter]}/>
                        Counter++;
                        return UI;
                    })}
                </ul>
            </div>
        );
    }
}

function MapStateToProps({Users, Questions})
{
    let TopUsers = [];    

    TopUsers = Object.keys(Users).map((UserID) => (
        {
            User: Users[UserID],
            Answered: Object.keys(Users[UserID].answers).length,
            Asked: Users[UserID].questions.length
        })
    ).sort((user1, user2) => (user1.Answered + user1.Asked) < (user2.Answered + user2.Asked)).slice(0, 3);
    
    return {topUsers: TopUsers};
}

export default connect(MapStateToProps)(Leaderboard);