import React from 'react';

const TodoItem = () => (
  <li id="todoItem-0" className="list-group-item todoListItem">
  <div className="container-lg px-0">
    <div className="row">
      <div className="col-auto order-1 me-auto">
        <p className="fw-semibold m-0 todoTitle">Example Todo 1</p> 
        <p className="my-1 small text-secondary todoDescription">Description goes here</p>
      </div>
      <div className="col-sm-auto order-3 order-sm-2 mb-1 pe-0 small text-secondary">
        Created: <span className="text-nowrap todoCreatedDate">2025-07-01</span>
      </div>
      <div className="col-auto order-2 mb-1 order-sm-3 text-end">
        <div className="btn-group" aria-label="Toggle completed">
          <button type="button" className="btn btn-sm btn-outline-success btnCompleted">
            <i className="bi bi-check-lg"></i>
          </button>
          <button type="button" className="btn btn-sm btn-outline-primary btnEdit" data-bs-toggle="modal" data-bs-target="#editModal">
            <i className="bi bi-pencil"></i>
          </button>
          <button type="button" className="btn btn-sm btn-outline-danger btnDelete">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
      <div className="col-12 order-4 small text-secondary">
        <div className="row gx-2">
          <div className="col-sm-auto">
            <div className="d-flex align-items-center">
                <i className="bi bi-calendar-event me-1"></i>
              Due:<span className="ms-1 text-nowrap todoDueDate">2025-07-10</span>
            </div>
          </div>
          <div className="col-sm-auto mt-2 mt-sm-0 d-flex align-items-center gap-2">
            <span className="badge text-bg-info text-white py-1 d-flex align-items-center todoAssigneeBadge">
              <i className="bi bi-person me-1"></i>
              <span className="todoAssignee">John Doe</span>
            </span>
            <span className="badge text-bg-secondary text-white py-1 d-flex align-items-center todoAttachmentsBadge">
              <i className="bi bi-paperclip me-1"></i>
              <span className="todoAttachements">2 attachments</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</li>
);

export default TodoItem;