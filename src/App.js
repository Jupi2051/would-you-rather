import './App.css';
import NewQuestion from './Components/NewQuestion';
import QuestionsList from "./Components/QuestionsList";
import AnswerableQuestion from './Components/AnswerableQuestion';
import Leaderboard from './Components/Leaderboard';

function App()
{
  return (
    <div>
        <p className="MainTitle">Would You Rather!</p>
        <NewQuestion />
        <br/>
        <br/>
        <QuestionsList />
        <br/>
        <br/>
        <Leaderboard />
        <br/>
        <br/>
        <AnswerableQuestion />
    </div>
  );
}

export default App;
