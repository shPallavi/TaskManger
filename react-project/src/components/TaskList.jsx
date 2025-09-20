import React from "react";

const TaskList = ({ tasks, toggleCompleted }) => {
  if (!tasks.length) return <p>No tasks found.</p>;
  return (
    <>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <div>
              <strong>{task.title}</strong>
              <p>{task.description}</p>
            </div>
            <button onClick={() => toggleCompleted(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
