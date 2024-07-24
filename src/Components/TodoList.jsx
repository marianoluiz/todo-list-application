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

    /* list inside would be automatically deleted since you are deleting the whole element */
    const handleDeleteTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    /* adds listinput to newTodos[i].lists  */
    const handleAddList = (index) => {
      if (listInputs[index] && listInputs[index].trim() !== '') {
          const newTodos = [...todos];
          newTodos[index].lists.push(listInputs[index]);
          setTodos(newTodos);
          setListInputs({ ...listInputs, [index]: '' });
          /* [index] would be the name of the key pair */
      }
    };

      const handleListInputChange = (index, value) => {
        setListInputs({ ...listInputs, [index]: value });
        /* we use [index] so that it is dynamic, if no bracket it would be literally `index` 
        
        the [index] is the name of the keypair which is used to indentify which part of listInputs would be changed
        */

        /* so basically we just change value of this. */
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
        /*  Controlled Components - Single source of truths | consistency  */
        /* and if i input something that it is invalid and submit; it wouldnt be accepted as the value of this input field since it must go through the state first */
        /* also, we can erase the value or the input field from the state once we added a new element of the list. */
        onChange={(e) => setHeadingInput(e.target.value)}/>

          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {/* we use map to create many elements from array*/}
        {todos.map((todo, index) => (
            /* todo is the element in the array  (object)*/
            <div key={index} className="todo-card">

                <div className="heading_todo">
                    <h3>{todo.heading}</h3> {/* Display the heading here */}
                    <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
                </div>

                <ul>
                  {todo.lists.map((list, listIndex) => (
                    <li key={listIndex} className='todo_inside_list'>
                      <p>{list}</p>
                    </li>
                  ))}
                </ul>

                <div className='add_list'>
                  <input
                    type="text"
                    className="list-input"
                    placeholder="Add List"
                    value={listInputs[index] || ''}
                    onChange={(e) => handleListInputChange(index, e.target.value)}/>

                    {/* || '': This is the logical OR operator. If listInputs[index] is undefined, null, or any falsy value, it will fall back to '' (an empty string). */}

                    <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
                </div>

                
            </div>

        ))}
      </div>
    </>
  );
};

export default TodoList;
