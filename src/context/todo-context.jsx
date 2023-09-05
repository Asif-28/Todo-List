
import { createContext, useContext } from 'react';

const todoContextDefaultValues = {
  todos: [],
  setTodos: () => { /*  */ }
};

export const TodoContext = createContext(todoContextDefaultValues);

export function useTodo() {
  return useContext(TodoContext);
}