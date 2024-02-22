import React, { useState } from 'react';
import '../vikshsir/todo.css';

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodoTop = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        index: todos.length + 1,
        item: inputValue,
        createdAt: new Date().toLocaleString()
      };
      setTodos([newTodo, ...todos]);
      setInputValue('');
    }
  };

  const handleAddTodoBottom = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        index: todos.length + 1,
        item: inputValue,
        createdAt: new Date().toLocaleString()
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleSortAscending = () => {
    const sortedTodos = [...todos].sort((a, b) => a.item.localeCompare(b.item));
    setTodos(sortedTodos);
  };

  const handleSortByTime = () => {
    const sortedTodos = [...todos].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    setTodos(sortedTodos);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add todo"
          className="todo-input"
        />
        <button onClick={handleAddTodoTop} className="add-button">Add to Top</button>
        <button onClick={handleAddTodoBottom} className="add-button">Add to Bottom</button>
        <button onClick={handleSortAscending} className="add-button">Sort Ascending</button>
        <button onClick={handleSortByTime} className="add-button">Sort by Time</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{`${todo.index}. ${todo.item} - Created at: ${todo.createdAt}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
