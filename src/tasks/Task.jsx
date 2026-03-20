import * as users from "../service/userService";
import { toLocalISOString } from "../utilities/formatters";

const Task = ({ todo, onComplete, onRemove, onEditing }) => {
  return (
    <div className="container-lg px-0">
      <div className="row">
        <div className="col-auto order-1 me-auto">
          <p className="fw-semibold m-0 todoTitle">{todo.title}</p>
          <p className="my-1 small text-secondary">
            {todo.description}
          </p>
        </div>
        <div className="col-sm-auto order-3 order-sm-2 mb-1 pe-0 small text-secondary">
          Created:{" "}
          <span className="text-nowrap">
            {toLocalISOString(todo.createdDate).split("T")[0]}
          </span>
        </div>
        <div className="col-sm-auto order-2 mb-1 order-sm-3 text-sm-end">
          <div className="btn-group" aria-label="Toggle completed">
            <button type="button" className={`btn btn-sm btn-outline-success ${todo.completed && "text-bg-success"}`}
              onClick={() => {
                todo.completed = !todo.completed;
                onComplete(todo);
              }}>
              <i className="bi bi-check-lg"></i>
            </button>
            <button type="button" className="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => onEditing(todo)}>
              <i className="bi bi-pencil"></i>
            </button>
            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => onRemove(todo.id)}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
        <div className="col-12 order-4 small text-secondary">
          <div className="row gx-2">
            <div className="col-sm-auto">
              <div className="d-flex align-items-center">
                <i className="bi bi-calendar-event me-1"></i>
                Due:
                <span className="ms-1 text-nowrap">
                  {toLocalISOString(todo.dueDate).split("T")[0]}
                </span>
              </div>
            </div>
            <div className="col-sm-auto mt-2 mt-sm-0 d-flex flex-wrap align-items-center gap-2">
              {todo.assignee && (
                <span className="badge text-bg-info text-white py-1 d-flex align-items-center">
                  <i className="bi bi-person me-1"></i>
                  <span>
                    {users.getbyId(todo.assignee).name}
                  </span>
                </span>
              )}
              {todo.attachments?.length > 0 && (
                <span className="badge text-bg-secondary text-white py-1 d-flex align-items-center">
                  <i className="bi bi-paperclip me-1"></i>
                  <span>
                    {todo.attachments.length} attachment
                    {todo.attachments.length > 1 && "s"}
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
