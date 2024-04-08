import React, { useState } from "react";

function Form() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const getTitleValue = (event) => {
    setTaskTitle(event.target.value);
  };

  const getDescriptionValue = (event) => {
    setTaskDescription(event.target.value);
  };

  const getInputValues = () => {
    const newTask = { title: taskTitle, description: taskDescription };
    setTasks([...tasks, newTask]);
    setTaskTitle("");
    setTaskDescription("");
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="form">
        <label>Task Title</label> <br />
        <input
          type="text"
          placeholder="Enter Your Task"
          value={taskTitle}
          onChange={getTitleValue}
        />{" "}
        <br />
        <label>Task Description</label> <br />
        <textarea
          placeholder="Enter Task Description"
          value={taskDescription}
          onChange={getDescriptionValue}
        ></textarea>{" "}
        <br />
        <button className="save-btn" onClick={getInputValues}>
          Save
        </button>
      </div>

      <div className="list-area">
        <div className="list">
          {tasks.map((task, index) => (
            <div key={index}>
              <h1>Task Title : {task.title}</h1>
              <h1>Task Description : {task.description}</h1>
              <div>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Form;
