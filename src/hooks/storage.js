import { useState, useEffect } from 'react';

const STORAGE_KEY = 'my-todo';

function useStorage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    } else {
      setTasks(JSON.parse(data));
    }
  }, []);

  const putTasks = items => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setTasks(items);
  };

  const clearTasks = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setTasks([]);
  };

  return [tasks, putTasks, clearTasks];
}

export default useStorage;
