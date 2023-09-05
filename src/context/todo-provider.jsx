
import  { useState } from 'react';
import { TodoContext } from './todo-context';

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const value = {
    todos,
    setTodos
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}
