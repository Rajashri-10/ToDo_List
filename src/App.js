import { useState } from "react";
import './App.css';


function App() {

  const [todoList, SettodoList] = useState([]);
  const [newTask, setNewTask] = useState();

  const handleChange = (event) => {
    setNewTask(event.target.value);

  }

  const addTask = () => {
    const newtodoList = [...todoList, newTask];
    // const newtodoList = []
    SettodoList(newtodoList);

  }
  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      if (task === taskName) {
        return false;
      } else {
        return true;
      }
    })
    SettodoList(newTodoList);

  }




  return (
    <div className="App">
      <div className="input">
        <input onChange={handleChange}></input>
        <button onClick={addTask}> add Task </button>
      </div>
      <div className="List">
        {todoList.map((task) => {
          return <div> <h1> {task} </h1>
            <button id="Done" onClick={() =>
              deleteTask(task)}
            > Done  </button></div>
        })}


      </div>


    </div>
  );
}

export default App;
