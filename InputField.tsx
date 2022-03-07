import React, { useRef } from "react";
import './App.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleTasks: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleTasks }) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleTasks(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="input-field"
        placeholder="Enter a new task"
      />
      <button className="btn-submit">Go</button>
    </form>
  );
};

export default InputField;
