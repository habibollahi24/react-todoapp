import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SelectOptions from "./components/SelectOptions";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]); //استیت اصلی ماست
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    selectedHandler();
  }, [todos]);

  const addTodo = (input) => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, todo]);
  };

  const completedHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const todo = { ...todos[index] };
    todo.isCompleted = !todo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = todo;
    setTodos(updatedTodos);
  };

  const delelHandler = (id) => {
    const deletTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deletTodo);
  };

  const editTodo = (newText, id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const todo = { ...todos[index] };
    todo.text = newText;
    const updatedTodos = [...todos];
    updatedTodos[index] = todo;
    setTodos(updatedTodos);
  };

  const selectedHandler = (selectOption) => {
    if (selectOption === "completed") {
      const completedTodo = todos.filter((todo) => todo.isCompleted);
      setSelected(completedTodo);
    } else if (selectOption === "unCompleted") {
      const unCompletedTodo = todos.filter((todo) => !todo.isCompleted);
      setSelected(unCompletedTodo);
    } else  {
      setSelected(todos);
    }
  };

  return (
    <div className=" container text-center row">
      <div className="col-md-9 p-1">
        <Navbar todos={todos} />
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={selected}
          onCompleted={completedHandler}
          onDelete={delelHandler}
          editTodo={editTodo}
        />
      </div>
      <div className="col-md-3 p-1">
        <SelectOptions onSelected={selectedHandler} />
      </div>
    </div>
  );
};

export default TodoApp;
