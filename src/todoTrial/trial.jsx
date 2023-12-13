import { useState } from "react";
import "./style.css";

const generator = () => {
  return Math.floor(Math.random() * 100);
};

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((item) => item.id !== id));
  };

  const addTodo = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generator(),
      })
    );
    setInput("");

    console.log(todos);
    // setInput("");
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={addTodo}>Add Todo</button>
        <div className="todo-list">
          {todos.map(({ text, id }) => (
            <p key={id} className="todo">
              {text}{" "}
              <button onClick={() => deleteTodo(id)} className="close">
                X
              </button>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
