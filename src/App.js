import "./App.css";
import TodoApp from "./TodoApp";

function App() {
  return (
    <>
      <h1 className="text-center fw-bold text-muted p-5 bg-navbar mb-4 display-3" >ToDo App <span className="fs-6 text-danger text-decoration-underline" >By Habibolahi</span> </h1>
      <TodoApp />
    </>
  );
}

export default App;
