import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  
    const  [todos, setTodos] = useState([]);
    const  [headingInput, setHeadingInput] = useState('');
    const  [listInputs, setListInputs] = useState({})

    const handleAddTodo = () => {
        if (headingInput.trim() !== '') {
            setTodos([...todos, { heading: headingInput, lists: [] }]);
            setHeadingInput('');
        }
    };

    const handleDeleteTodo = (index) => {
        /* the todo that is not the index passed will the be set as the todos state. 
        
        technically, it erases the todo that is equal to the index paseed */
        
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
            
        <input
        type="text"
        className="heading-input"
        placeholder="Enter heading"
        value={headingInput}
        onChange={(e) => setHeadingInput(e.target.value)}/>

          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => (

            <div key={index} className="todo-card">

                <div className="heading_todo">
                    <h3>{todo.heading}</h3> {/* Display the heading here */}
                    <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
                </div>

            </div>

        ))}
      </div>
    </>
  );
};

export default TodoList;
