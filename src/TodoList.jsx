import React from "react";
import Todo from "./components/Todo";

const TodoList = ({ todos, onCompleted, onDelete , editTodo }) => {
  return (
    <>
      {!todos.length && <h3 className="text-muted fw-bold " >please add todo ...</h3>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onCompleted={() => onCompleted(todo.id)}
          onDelete={() => onDelete(todo.id)}
          editTodo = {editTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
