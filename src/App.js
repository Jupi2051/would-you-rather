import './App.css';
import NewQuestion from './Components/NewQuestion';
import QuestionsList from "./Components/QuestionsList";

function App()
{
  return (
    <div>
        <p className="MainTitle">Would You Rather!</p>
        <QuestionsList />
    </div>
  );
}

export default App;
