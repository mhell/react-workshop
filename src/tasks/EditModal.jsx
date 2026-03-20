import {useRef} from 'react';
import Modal from 'bootstrap/js/dist/modal';

const EditModal = ({children, shouldClose}) => {
  const modalRef = useRef(null);

  if (shouldClose) {
    Modal.getInstance(modalRef.current)?.hide();
  }

  return (
    <div className="modal fade" tabIndex="-1" aria-hidden="true" id="editModal" ref={modalRef}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Todo Item</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;