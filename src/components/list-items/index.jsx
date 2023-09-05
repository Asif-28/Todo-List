
// import React from 'react';
import Item from './item';
import { Con } from './styles';
import { useTodo } from '../../context/todo-context';
import { AnimatePresence } from 'framer-motion';

const ListItems = () => {
  const { todos } = useTodo();
  return (
    <Con as="div">
      <AnimatePresence initial={false}>
        {
          todos.map((todo) => {
            return (
              <Item key={todo.id} todo={todo} />
            )
          })
        }
      </AnimatePresence>
    </Con>
  )
}

export default ListItems;
