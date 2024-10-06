import React, { useState, useEffect } from "react";
import axios from "axios";

const Todo = () => {
  console.log("hello");
  
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [editTodoId, setEditTodoId] = useState(null);
  const [editText, setEditText] = useState("");

  // Fetch todos when the component is mounted
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
        setTodos(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("There was an error fetching the todos!", error);
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // Add new todo
  const addTodo = async () => {
    if (newTodo.trim() === "") return;
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
        title: newTodo,
        completed: false,
      });
      setTodos([response.data, ...todos]);
      setNewTodo("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  // Toggle completion of a todo
  const toggleComplete = async (id) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
    
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, updatedTodo);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: response.data.completed } : todo
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // Enable edit mode for a todo
  const startEdit = (id, currentText) => {
    setEditTodoId(id);
    setEditText(currentText);
  };

  // Save the updated todo
  const saveEdit = async (id) => {
    if (editText.trim() === "") return;
    const updatedTodo = { title: editText, completed: false };

    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, updatedTodo);
      console.log("heee",response);
       setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, title: response.data.title } : todo
        )
      );
      setEditTodoId(null);
      setEditText("");
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  // Cancel edit mode
  const cancelEdit = () => {
    setEditTodoId(null);
    setEditText("");
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                {todo.title}
                <button onClick={() => startEdit(todo.id, todo.title)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
