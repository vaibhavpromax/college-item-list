import React, { useState } from "react";
import "./App.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { essential } from "./constants/essential";
import Todo from "./components/Todo";
import FormTodo from "./components/FormTodo";

function App() {
  const [todos, setTodos] = useState(essential);
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="heading">College Checklist</h1>
        <p className="main-line">
          A checklist to check before leaving for college
        </p>
        <FormTodo addTodo={addTodo} />
        <div className="main-container">
          {todos.map((todo, index) => (
            <Card className="main-card" key={todo.id}>
              <Card.Body>
                <Todo
                  className="small-card"
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
          <img
            src="https://www.memecreator.org/static/images/memes/3593637.jpg"
            alt=""
          />
        </div>
        <p className="msg">Made with ❤️ by Vaibhav Singh</p>
      </div>
    </div>
  );
}

export default App;
