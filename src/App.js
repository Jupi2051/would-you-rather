import './App.css';
import NewQuestion from './Components/NewQuestion';
import QuestionsList from "./Components/QuestionsList";
import AnswerableQuestion from './Components/AnswerableQuestion';

function App()
{
  return (
    <div>
        <p className="MainTitle">Would You Rather!</p>
        <AnswerableQuestion />
    </div>
  );
}

export default App;
