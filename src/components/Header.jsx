import { useState } from "react";
import logo from "../helper/logo192.png";
import ToDoList from "./ToDoList";

const Header = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };
  return (
    <>
      <div className="App d-flex justify-content-center align-item-center mt-5">
        <h1 className="title mx-3 text-primary">Todo APP</h1>
        <img
          style={({ width: "50px" }, { height: "50px" })}
          src={logo}
          alt={logo}
        />
      </div>

      <div className="container w-50 my-3 text-center">
        <form className="input-group mb-3" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter new Todo..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            required
          />

          <button className="btn btn-primary opacity-75" type="submit">
            Add Todo
          </button>
        </form>

        <h2 className="text-primary opacity-50">Todos</h2>
        {todos.map((item, i) => (
          <ToDoList key={i} item={item} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </>
  );
};

export default Header;
