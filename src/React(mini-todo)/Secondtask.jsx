import React, { useState } from 'react';

const SecondTask = () => {
  const initialTodos = [
    {
      title: 'Go to School!',
      isCompleted: false,
    },
    {
      title: 'Buy milk!',
      isCompleted: true,
    },
    {
      title: 'Drive a Car!',
      isCompleted: false,
    },
    {
      title: 'Hello World!',
      isCompleted: true,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
  };

  return (
    <>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.title} - 
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleCheckboxChange(index)}
          />
          {todo.isCompleted ? 'Completed' : 'Not Completed'}
        </li>
      ))}
    </>
  );
};

export default SecondTask;