import { useState } from "react";
import './App.css';


function App() {

  const [todoList, SettodoList] = useState([]);
  const [newTask, setNewTask] = useState();

  const handleChange = (event) => {
    setNewTask(event.target.value);

  }

  const addTask = () => {
    const task = { id: todoList?.length + 1, task: newTask }
    const newtodoList = [...todoList, task];
    SettodoList(newtodoList);

  }
  const deleteTask = (taskId) => {
    const newTodoList = todoList.filter((task) => {
      if (task.id === taskId) {
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
        {todoList?.map((task) => {
          return <div> <h1> {task.task} </h1>
            <button id="Done" onClick={() =>
              deleteTask(task.id)}
            > Done  </button></div>
        })}


      </div>


    </div>
  );
}

export default App;
