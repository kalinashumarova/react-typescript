import React from "react";
import { Todo } from "./model";
import "./App.css";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

interface Props {
  todo: Todo;
  key: number;
  tasks: Todo[];
  setTasks: (value: React.SetStateAction<Todo[]>) => void;
}

const SingleTask: React.FC<Props> = ({ todo, key, tasks, setTasks }) => {

    const handleEdit = () => {

    };

    const handleDelete = () => {

    };

    const handleDone = (id: number) => {
        setTasks(
            tasks.map((todo) =>
              todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
          );
    };


  return (
    <form key={key} className="task-wrapper">
      <div className="single-task">{todo}</div>

      <div className="task-icons">
        <span className="icon" onClick={handleEdit}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={handleDelete}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <BsCheckLg />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
