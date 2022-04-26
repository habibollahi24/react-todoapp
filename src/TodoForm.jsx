import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const changHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) return;
    addTodo(input);
    setInput("")
  };

  return (
    <div className="row justify-content-center mb-5 px-3">
      <form
        onSubmit={submitHandler}
        className="col-md-8 d-flex justify-content-center"
      >
        <input
          type="text"
          className="form-control form-control-lg me-2"
          value={input}
          onChange={changHandler}
          placeholder="Add ToDo ..."
        />
        <button type="submit" className="btn btn-secondary lead fs-5">
          send
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
