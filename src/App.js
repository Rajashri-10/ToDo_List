import { useState } from "react";
import Edit from './edit';
import './App.css';

function App() {
  const [todoList, SettodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = { id: todoList?.length + 1, task: newTask }
    const newtodoList = [...todoList, task];

    SettodoList(newtodoList);

  };


  const deleteTask = (taskId) => {
    const newTodoList = todoList.filter((task) => {
      if (task.id === taskId) {
        return false;
      } else {
        return true;
      }
    })
    SettodoList(newTodoList);
  };

  const editTask = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
  };

  const updateTask = (updatedTask) => {
    const updatedTodoList = todoList.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    SettodoList(updatedTodoList);
    setIsEditing(false);
    setCurrentTask(null);
  };

  return (
    <div className="App">
      <div className="input">
        <input
          value={newTask}
          onChange={handleChange}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="List">
        {todoList.map((task) => (
          <div key={task.id}>
            <h1>{task.task}</h1>
            <button id="Done" onClick={() => deleteTask(task.id)}>Done</button>
            <button id='Edit' onClick={() => editTask(task)}>Edit</button>
          </div>
        ))}
      </div>

      {isEditing &&
        <Edit
          task={currentTask}
          onUpdateTask={updateTask}
          onClose={() => setIsEditing(false)}
        />
      }
    </div>
  );
}

export default App;
