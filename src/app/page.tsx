"use client";

import { useEffect, useState } from "react";

export default function TodoApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) setTodos(JSON.parse(savedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a task..."
          className="border p-2 flex-1 "
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e)=>e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo} className="bg-blue-500 p-2 text-white">
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 p-2 border rounded"
          >
            <span>{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
