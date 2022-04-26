import React from "react";

const Navbar = ({ todos }) => {
  return (
    <>
      {todos.length !== 0 && (
        <div className="d-flex justify-content-center">
          <p className="m-3 p-1 text-success fw-bold ">
            completed todo : {todos.filter((todo) => todo.isCompleted).length}
          </p>
          <p className="m-3 p-1 text-danger fw-bold ">
            Uncompleted todo :
            {todos.filter((todo) => !todo.isCompleted).length}
          </p>
        </div>
      )}
    </>
  );
};

export default Navbar;
