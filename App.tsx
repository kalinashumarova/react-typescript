import React, { useState } from 'react';
import { isDataView } from 'util/types';
import './App.css';
import InputField from './InputField'
import { Todo } from './model';
import TaskList from './TaskList';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [tasks, setTasks] = useState<Todo[]>([]);

  const handleTasks = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTasks([...tasks, {id: Date.now(), todo, isDone: false}]);
      setTodo('');
    }
    console.log(tasks)
  };

  return (
    <div className="App">
      <span className="heading">To-do list</span>
      <InputField todo={todo} setTodo={setTodo} handleTasks={handleTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
