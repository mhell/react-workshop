
const TaskCard = ({children, onFilter, onSort, isFiltered, isSorted}) => {
  return (
    <div className="card border shadow-sm mx-2 mx-md-4 mt-0 mb-5">
      <div className="card-header bg-white d-flex justify-content-between align-items-center p-3">
        <h2 className="h5 mb-0">Todos</h2>
        <div className="btn-group" aria-label="Filter">
          <button type="button" className={`btn btn-sm btn-outline-secondary btnFilter ${isFiltered && 'text-bg-secondary'}`} onClick={() => onFilter(
            isFiltered ? undefined : {completed: false})}>
            <i className="bi bi-funnel"></i>
          </button>
          <button type="button" className={`btn btn-sm btn-outline-secondary btnSort ${isSorted && 'text-bg-secondary'}`} onClick={() => onSort(
            isSorted ? undefined : () => (todoA, todoB) => todoA.dueDate > todoB.dueDate ? 1 : -1)}>
            <i className="bi bi-sort-down"></i>
          </button>
        </div>
      </div>

      <ul id="todoList" className="list-group m-3">
        {children}
      </ul>
    </div>
  );
};

export default TaskCard;
