import './App.css';
import NewQuestion from './Components/NewQuestion';
import QuestionsList from "./Components/QuestionsList";
import AnswerableQuestion from './Components/AnswerableQuestion';
import Leaderboard from './Components/Leaderboard';
import LoginPanel from "./Components/LoginPanel"

function App()
{
  return (
    <div>
        <p className="MainTitle">Would You Rather!</p>

        <LoginPanel />
        <NewQuestion />
        <AnswerableQuestion />
        <Leaderboard />
        <QuestionsList />
    </div>
  );
}

export default App;
