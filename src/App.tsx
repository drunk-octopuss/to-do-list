import React, { FC, useState } from "react";
import { ITodo } from "./components/interfaces";

import TodoForm from "./components/TodoForm";

import "./App.css";
import TodoList from "./components/TodoList";

const App: FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([
    {
      id: 1,
      todo: "Life is pointless",
      completed: false,
    },
    {
      id: 2,
      todo: "Go watch TV",
      completed: false,
    },
  ]);

  const addTodo = (todo: string): void => {
    if (!todo) {
      alert("please add todo!");
      return;
    }
    const data: ITodo = {
      id: todoList.length < 1 ? 1 : todoList[todoList.length - 1].id + 1,
      todo: todo,
      completed: false,
    };
    setTodoList([...todoList, data]);
  };

  const completeTodo = (id: number): void => {
    setTodoList(
      todoList.map(
        (todo: ITodo): ITodo =>
        todo.id === id
        ? Object.assign(todo, { completed: true }) && todo
        : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodoList(
      todoList.filter((todo: ITodo): ITodo | null =>
        todo.id !== id ? todo : null
      )
    );
  };

  return (
    <div className="app">
      <h1 className="heading">Rick & Morty Themed To Do List</h1>
      <div className="container">
        <TodoForm addTodo={addTodo} />
        <div className="todoList">
          {todoList.map((todo: ITodo, key: number) => (
            <TodoList
              key={key}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;