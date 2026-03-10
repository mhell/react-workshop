import React from "react";
import TaskItem from "./TaskItem";

const TaskCard = ({tasks, assignees}) => {
  return (
    <div className="card border shadow-sm mx-4 mt-0 mb-5" id="todoHolder">
      <div className="card-header bg-white d-flex justify-content-between align-items-center p-3">
        <h2 className="h5 mb-0">Todos</h2>
        <div className="btn-group" aria-label="Filter">
          <button type="button" className="btn btn-sm btn-outline-secondary btnFilter">
            <i className="bi bi-funnel"></i>
          </button>
          <button type="button" className="btn btn-sm btn-outline-secondary btnSort">
            <i className="bi bi-sort-down"></i>
          </button>
        </div>
      </div>

      <ul id="todoList" className="list-group m-3">
        {
          tasks.map((task) => (
            <li key={task.id} id={task.id} className='list-group-item todoListItem'>
              <TaskItem 
                title={task.title}
                description={task.description}
                createdDate={task.createdDate}
                assigneeName={task.assignee ? assignees.find((a) => a.id === task.assignee).name : null}
                attachments={task.attachments}
                dueDate={task.dueDate}
                completed={task.completed}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TaskCard;
