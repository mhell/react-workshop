import { useState } from "react";
import { useForm } from "react-hook-form";
import TodoItem from "../model/TodoItem";
import { toLocalISOString } from "../utilities/formatters"

const Form = ({assignees, onSubmit, editTodo}) => {
  const defaultValues = {
    ...editTodo,
    dueDate: editTodo && toLocalISOString(editTodo.dueDate),
    assignee: editTodo && (editTodo.assignee ?? 0)
  };
  const { register, reset, resetField, handleSubmit, formState: { errors, isValid } } = useForm({defaultValues: defaultValues});
  const [attachments, setAttachments] = useState(editTodo?.attachments ?? [])

  function onValidSubmit(data) {
    const newTodoItem = new TodoItem(data.title, data.description, new Date(data.dueDate), Number(data.assignee), attachments);
    onSubmit(editTodo ? {...newTodoItem, id: editTodo.id} : newTodoItem);
    clearAttachments();
    reset();
  }

  function updateAttachments(event) {
    setAttachments(Array.from(event.target.files));
  }

  function clearAttachments(event) {
    setAttachments([]);
    resetField("attachments");
  }

  return (
    <form id='todoForm' className='rounded border shadow-sm mt-3 mb-4 mx-2 m-md-4 p-3' onSubmit={handleSubmit(onValidSubmit)}>
      <div className='mb-3'>
        <label htmlFor='titleInput' className='form-label'>Title</label>
        <input type='text' className='form-control' id='titleInput' 
        {...register("title", {required: "Title is required", maxLength: {value: 100, message: "Title needs to be less than 100 characters"}})} />
        <div className="invalid-feedback d-block">{errors.title?.message}</div>
      </div>
      <div className='mb-3'>
        <label htmlFor='descriptionInput' className='form-label'>Description</label>
        <textarea className='form-control' id='descriptionInput' rows='3' 
        {...register("description", {required: "Description is required", maxLength: {value: 100, message: "Description needs to be less than 500 characters"}})}></textarea>
        <div className="invalid-feedback d-block">{errors.description?.message}</div>
      </div>
      <div className='row'>
        <div className='col-sm mb-3'>
          <label htmlFor='dateInput' className='form-label'>Due Date</label>
          <input type='datetime-local' id='dateInput' className='form-control' 
          {...register("dueDate", {required: "Due date needs to be set", min: {value: new Date().toISOString().substring(0, 16), message: 'Due date cannot be set in the past'}})} />
          <div className="invalid-feedback d-block">{errors.dueDate?.message}</div>
        </div>
        <div className='col-sm mb-3'>
          <label htmlFor='assignIput' className='form-label'>Assign to Person (Optional)</label>
          <select id='assignIput' className='form-select' {...register("assignee")}>
            <option value='0'>-- Select Person (Optional) --</option>
            {
              assignees.map((assignee) => (
                <option key={assignee.id} value={assignee.id}>{assignee.name}</option>
              ))
            }
          </select>
          <div className="invalid-feedback d-block">{errors.assignee?.message}</div>
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='attachmentInput' className='form-label'>Attachments</label>
        <div className='input-group'>
          <input id='attachmentInput' className='form-control' type='file' multiple {...register("attachments")} files={attachments} onChange={updateAttachments}/>
          <button className='btn btn-outline-secondary' type='button' onClick={clearAttachments}>
            <i className='bi bi-x-lg'></i>
          </button>
        </div>
      </div>
      <div className='border rounded p-3 mb-3' style={{minHeight: '60px'}}>
        <ul className='list-group'>
          {
            attachments.map((attachment, index) => (
              <li key={index} className="list-group-item border-0 bi bi-file-earmark">
                <span className="ms-1">{attachment.name}</span>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="modal-footer border-0 justify-content-end">
        {editTodo &&
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Cancel
          </button>
        }
        <button type='submit' className='btn btn-primary d-flex align-items-center gap-1'>
          {editTodo ? "Save Changes" : <><i className='bi bi-plus-lg'></i> Add Todo</>}
        </button>
      </div>
    </form>
  );
};

export default Form;