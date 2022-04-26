import React, { useState } from "react";

const Todo = ({ todo, onCompleted, onDelete, editTodo }) => {
  const [editable, setEditable] = useState(false);

  const changeHandler = (e) => {
    editTodo(e.target.value, todo.id);
  };

  return (
    <div className="row justify-content-center ">
      <div className="shadow-sm  rounded col-md-10 my-2 d-flex flex-column flex-md-row align-items-center justify-content-between p-4 ">
        {editable ? (
          <input
            type="text"
            value={todo.text}
            onChange={changeHandler}
            className="form-control"
          />
        ) : (
          <p
            className={` lead fw-normal mb-0 ${
              todo.isCompleted && "text-muted text-decoration-line-through"
            }`}
          >
            {todo.text}
          </p>
        )}

        <div className="d-flex ms-2">
          <button
            onClick={() => {
              setEditable(!editable);
            }}
            className="btn btn-warning "
          >
            {editable ? "OK" : "Edit"}
          </button>
          <button
            onClick={onCompleted}
            className="btn btn-outline-secondary mx-2 "
          >
            {todo.isCompleted ? "unCompleted" : "Completed"}
          </button>
          <button onClick={onDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
// className="lead mb-0"
