// import React, { useState } from 'react';
import { Con, InputCon, StyledPlusIcon } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useTodo } from '../../context/todo-context';
import { useState } from 'react';

const InputBox = () => {
  const { setTodos } = useTodo();
  const [todo, setTodo] = useState('');
  const addTodo = () => {
    if (todo.trim().length === 0) return
    const todoItem = {
      todo,
      id: uuidv4()
    }
    setTodos(prvTodo => [...prvTodo, todoItem]);
    setTodo('');
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTodo();
  }

  return (
    <Con>
      <InputCon
        type='text'
        placeholder='Write your todo'
        onChange={(e) => {
          setTodo(e.target.value);
        }} onKeyDown={handleKeyDown}
        value={todo}
      />
      <div>
        <StyledPlusIcon
          style={{
            cursor: todo.trim().length === 0 ? 'not-allowed' : 'pointer'
          }}
          onClick={addTodo}
        />
      </div>
    </Con>
  )
}

export default InputBox; 
