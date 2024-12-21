import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if(newTask){
      setTasks([...tasks,newTask]);
      setNewTask('');
    }
  };

  const handleDelete = (index)=>{
    setTasks(tasks.filter((_,i)=>i!==index));
  }

  return (
    <div className="ToDoList">
      <div>
        <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
        <button onClick={handleAddTask}>{"Add task"}</button>
      </div>
      <div>
        <ul>
          {tasks.map((task,index)=>(
            <li key={index}>
              {task} <button onClick={()=>handleDelete(index)}>{'Delete'}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
