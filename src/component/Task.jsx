import React, { useState, useEffect } from "react";
import axios from "axios";

const Task = () => {
  useEffect(() => {
    fetchTasks();
  }, []);

  const [tasks, setTasks] = useState();

  const fetchTasks = async () => {
    const response = await axios.post("http://localhost:3400/task/find", {
      username: localStorage.getItem("username")
    });
    console.log(response.data);
    setTasks(response.data);
  };

  if (tasks) {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Task Describtion</th>
              <th>Task Progression</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(e => (
              <tr key={e._id}>
                <td>{e.task.taskName}</td>
                <td>{e.task.taskDesc}</td>
                <td>{e.task.taskProgress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Task Describtion</th>
              <th>Task Progression</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    );
  }
};

export default Task;
