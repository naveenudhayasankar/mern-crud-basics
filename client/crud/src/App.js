import {BrowserRouter, Route} from "react-router-dom";
import DisplayToDo from "./components/DisplayToDo/DisplayToDo";
import CreateToDo from "./components/CreateToDo/CreateToDo";
import "./App.css";

function App() {
  return (
    <div className="todo-container">
      <BrowserRouter>
        <Route exact path="/" component={DisplayToDo} />
        <Route exact path="/add-list" component={CreateToDo}/>
      </BrowserRouter>
    </div>    
  );
};

export default App;
