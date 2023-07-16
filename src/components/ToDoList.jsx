import { useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import "../App.css";

const TodoList = ({ item, todos, setTodos }) => {
  const [lineThrough, setLineThrough] = useState(true);

  const deleteFunc = () => {
    setTodos(todos.filter((i) => i !== item));
  };

  return (
    <ul className="list-group rounded-pill m-2">
      {lineThrough ? (
        <li
          className="list-group-item d-flex justify-content-between align-items-center bg-info text-decoration-none"
          onClick={() =>
            setLineThrough((preventState) => setLineThrough(!preventState))
          }
        >
          {item}
          <BsFillTrash3Fill
            className="text-danger h5"
            type="button"
            onClick={deleteFunc}
          />
        </li>
      ) : (
        <li
          className="list-group-item d-flex justify-content-between align-items-center bg-info text-decoration-line-through text-success opacity-75 text-uppercase"
          onClick={() =>
            setLineThrough((preventState) => setLineThrough(!preventState))
          }
        >
          {item}
          <BsFillTrash3Fill
            className="text-white h5"
            type="button"
            onClick={deleteFunc}
          />
        </li>
      )}
    </ul>
  );
};

export default TodoList;
