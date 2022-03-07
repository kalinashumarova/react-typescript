import React from "react";
import { Todo } from "./model";
import "./App.css";
import SingleTask from './SingleTask';

interface Props {
  tasks: Todo[];
  setTasks: (value: React.SetStateAction<Todo[]>) => void;
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {


  return (
    <div className="task-list">
      {tasks.map((todo: Todo) => <SingleTask todo={todo} key={todo.id} tasks={tasks} setTasks={setTasks} />)}
    </div>
  );
};

export default TaskList;
