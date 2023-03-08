import React, { FC, FormEvent, useState } from "react";


interface Props {
  addTodo(todo: string): void;
}

const TodoForm: FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>("");

  const handleTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  return (
    <form className="todoForm" onSubmit={handleTodo}>
      <div className="form-group">
        <input
          className="input"
          type="text"
          name="todo"
          placeholder="Add your next big task"
          autoComplete="off"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" value="Add" className="submit" />
      </div>
    </form>
  );
};

export default TodoForm;