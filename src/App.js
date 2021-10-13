import './App.css';
import NewQuestion from './Components/NewQuestion';
import Question from './Components/Question';
import QuestionsList from './Components/QuestionsList';

function App()
{
  return (
    <div>
        <p className="MainTitle">Would You Rather!</p>
        <NewQuestion />
    </div>
  );
}

export default App;
