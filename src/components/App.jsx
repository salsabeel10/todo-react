import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const RemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d=new Date();
  let day=days[d.getDay()]
  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            setTodos((prevTodos) => [
              ...prevTodos,
              { id: Date.now(), text: todo, status: false },
            ]);
            setTodo("");
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {todos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={(e) => {
                  setTodos((prevTodos) =>
                    prevTodos.map((todoObj) =>
                      todoObj.id === obj.id
                        ? { ...todoObj, status: e.target.checked }
                        : todoObj
                    )
                  );
                }}
                checked={obj.status}
                type="checkbox"
                name=""
                id={obj.id}
              />
              <p
                style={{ textDecoration: obj.status ? "line-through" : "none" }}
              >
                {obj.text}
              </p>
            </div>
            <div className="right">
              <i
                className="fas fa-times"
                onClick={() => RemoveTodo(obj.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
