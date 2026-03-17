import { useState } from "react";

export const ToDo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      title: input,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  const toggleTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todos.isCompleted } : todo,
    );
    setTodos(updated);
  };

  console.log({ todos });

  return (
    <div>
      <h1>React Todo App</h1>
      <input
        type="text"
        placeholder="enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>{to}</ul>
    </div>
  );
};
