import { useForm } from "react-hook-form";

const Form = ({assignees, onNewTask}) => {

  function handleSubmit(event) {
    event.preventDefault();
    
  }

  return (
    <form id='todoForm' className='rounded border shadow-sm m-4 p-3' onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='titleInput' className='form-label'>Title</label>
        <input type='text' name='title' className='form-control' id='titleInput' required />
      </div>
      <div className='mb-3'>
        <label htmlFor='descriptionInput' className='form-label'>Description</label>
        <textarea name='description' className='form-control' id='descriptionInput' rows='3'></textarea>
      </div>
      <div className='row'>
        <div className='col-sm mb-3'>
          <label htmlFor='dateInput' className='form-label'>Due Date</label>
          <input type='datetime-local' name='dueDate' id='dateInput' className='form-control' required />
        </div>
        <div className='col-sm mb-3'>
          <label htmlFor='assignIput' className='form-label'>Assign to Person (Optional)</label>
          <select id='assignIput' className='form-select' name='assignee' aria-label='Default select example'>
            <option value='0'>-- Select Person (Optional) --</option>
            {
              assignees.map((assignee) => (
                <option key={assignee.id} value={assignee.id}>{assignee.name}</option>
              ))
            }
          </select>
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='attachmentInput' className='form-label'>Attachments</label>
        <div className='input-group'>
          <input id='attachmentInput' className='form-control attachments' type='file' multiple name='attachments' />
          <button className='btn btn-outline-secondary clearAttachments' type='button' >
            <i className='bi bi-x-lg'></i>
          </button>
        </div>
      </div>
      <div className='border rounded p-3 mb-3' style={{minHeight: '60px'}}>
        {/* Attachment previews will go here later */}
        <ul className='list-group attachmentList'></ul>
      </div>
      <button type='submit' className='btn btn-primary d-flex align-items-center gap-1 ms-auto'>
        <i className='bi bi-plus-lg'></i>
        Add Todo
      </button>
    </form>
  );
};

export default Form;