import React, { useState } from 'react';
import TaskList from './TaskList';
import Input from './Input';
import Filter from './Filter';
import useStorage from '../hooks/storage';

const getKey = () => Math.random().toString(32).substring(2);

function Todo() {
  const [tasks, putTasks, clearTasks] = useStorage();
  const [filter, setFilter] = useState('ALL');

  const handleAdd = text => putTasks(
    [...tasks, { key: getKey(), text, done: false }]
  );

  const handleFilterChange = value => setFilter(value);

  const handleCheck = checked => {
    const newItems = tasks.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    putTasks(newItems);
  };
  
  return (
    <div className="panel">
      <div className="panel-heading">
        <span role="img" aria-label="atom">⚛️</span> React ToDo
      </div>
      <Input onAdd={handleAdd} />
      <Filter onChange={handleFilterChange} value={filter} />
      <TaskList items={tasks} filter={filter} onCheck={handleCheck} />
      <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={clearTasks}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Todo;
